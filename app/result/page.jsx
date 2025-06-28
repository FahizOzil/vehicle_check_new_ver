'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import Nav from '../components/Navbar';
import Script from 'next/script';

// Initialize EmailJS
emailjs.init("uN-2O3nbFXI273dvI");

const InnerPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [registrationNumber, setRegistrationNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  const [carPhotos, setCarPhotos] = useState([]);
  const [engineVideo, setEngineVideo] = useState(null);

  // Form validation errors state
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    registrationNumber: "",
    carMake: "",
    carModel: "",
    carYear: "",
    mileage: "",
    fuelType: "",
    transmission: "",
    color: ""
  });

  // Car information state
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [color, setColor] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const regNumber = searchParams.get('reg');
    if (regNumber) {
      setRegistrationNumber(regNumber);
    }
  }, [searchParams]);

  // Validate single form field
  const validateField = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case 'fullName':
        errorMessage = value.trim() ? "" : "Full name is required";
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorMessage = !value.trim()
          ? "Email is required"
          : !emailRegex.test(value)
            ? "Please enter a valid email address"
            : "";
        break;
      case 'phone':
        // Basic phone validation (adjust for your specific requirements)
        const phoneRegex = /^[0-9+\-\s]{6,20}$/;
        errorMessage = !value.trim()
          ? "Phone number is required"
          : !phoneRegex.test(value)
            ? "Please enter a valid phone number"
            : "";
        break;
      case 'registrationNumber':
        errorMessage = value.trim() ? "" : "Registration number is required";
        break;
      case 'mileage':
        // Ensure mileage is a number
        const mileageRegex = /^[0-9]+$/;
        errorMessage = !value.trim()
          ? "Mileage is required"
          : !mileageRegex.test(value)
            ? "Please enter a valid mileage number"
            : "";
        break;
      default:
        // For other fields, just check if they're empty
        errorMessage = value.trim() ? "" : `${name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')} is required`;
    }

    return errorMessage;
  };

  // Handle input change with validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the corresponding state based on input name
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'registrationNumber':
        setRegistrationNumber(value);
        break;
      case 'carMake':
        setCarMake(value);
        break;
      case 'carModel':
        setCarModel(value);
        break;
      case 'carYear':
        setCarYear(value);
        break;
      case 'mileage':
        setMileage(value);
        break;
      case 'fuelType':
        setFuelType(value);
        break;
      case 'transmission':
        setTransmission(value);
        break;
      case 'color':
        setColor(value);
        break;
    }

    // Validate the field and update errors state
    const errorMessage = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: errorMessage
    }));
  };

 
  const handleFileChange = async (e) => {
    const { name, files } = e.target;

    const uploadFile = async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('email', email);

      try {
        const response = await fetch('/api/file-upload', {  // Updated endpoint
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Upload failed');
        }

        const data = await response.json();
        return data.fileUrl;
      } catch (error) {
        console.error('Error uploading file:', error);
        throw new Error(`Upload failed: ${error.message}`);
      }
    };

    if (name === "carPhotos") {
      if (files.length > 5) {
        setErrors(prev => ({
          ...prev,
          carPhotos: "You can upload up to 5 car photos only"
        }));
        return;
      }

      setIsLoading(true);

      try {
        const uploadPromises = Array.from(files).map(async (file) => {
          // Validate file size (e.g., 5MB limit)
          if (file.size > 5 * 1024 * 1024) {
            throw new Error(`File ${file.name} is too large. Maximum size is 5MB`);
          }

          // Validate file type
          if (!file.type.startsWith('image/')) {
            throw new Error(`File ${file.name} is not an image`);
          }

          return uploadFile(file);
        });

        const uploadedUrls = await Promise.all(uploadPromises);
        setCarPhotos(prev => [...prev, ...uploadedUrls]);
        setErrors(prev => ({ ...prev, carPhotos: "" }));
      } catch (error) {
        console.error('Error uploading photos:', error);
        setErrors(prev => ({
          ...prev,
          carPhotos: error.message || "Failed to upload photos. Please try again."
        }));
      } finally {
        setIsLoading(false);
      }
    }

    if (name === "engineVideo") {
      const videoFile = files[0];
      if (!videoFile) return;

      if (videoFile.size > 50 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          engineVideo: "The video size must be less than 50MB"
        }));
        return;
      }

      // Validate video type
      if (!videoFile.type.startsWith('video/')) {
        setErrors(prev => ({
          ...prev,
          engineVideo: "Please upload a valid video file"
        }));
        return;
      }

      setIsLoading(true);

      try {
        const videoUrl = await uploadFile(videoFile);
        setEngineVideo(videoUrl);
        setErrors(prev => ({ ...prev, engineVideo: "" }));
      } catch (error) {
        console.error('Error uploading video:', error);
        setErrors(prev => ({
          ...prev,
          engineVideo: error.message || "Failed to upload video. Please try again."
        }));
      } finally {
        setIsLoading(false);
      }
    }
  };

  const validateForm = () => {
    // Create a new errors object
    const newErrors = {};
    let isValid = true;

    // Validate each field
    newErrors.fullName = validateField('fullName', fullName);
    newErrors.email = validateField('email', email);
    newErrors.phone = validateField('phone', phone);
    newErrors.registrationNumber = validateField('registrationNumber', registrationNumber);
    newErrors.carMake = validateField('carMake', carMake);
    newErrors.carModel = validateField('carModel', carModel);
    newErrors.carYear = validateField('carYear', carYear);
    newErrors.mileage = validateField('mileage', mileage);
    newErrors.fuelType = validateField('fuelType', fuelType);
    newErrors.transmission = validateField('transmission', transmission);
    newErrors.color = validateField('color', color);

    // Check if there are any error messages
    Object.values(newErrors).forEach(error => {
      if (error) isValid = false;
    });

    // Validate car photos

    const hasPhotos =
      (Array.isArray(carPhotos) && carPhotos.length > 0) ||
      (typeof carPhotos === 'string' && carPhotos.trim() !== '');

    if (!hasPhotos) {
      newErrors.carPhotos = "Please upload at least one car photo";
      isValid = false;
    }

    if (carPhotos.length === 0) {
      newErrors.carPhotos = "Please upload at least one car photo";
      isValid = false;
    }

    // Validate engine video
    if (!engineVideo) {
      newErrors.engineVideo = "Please upload an engine video";
      isValid = false;
    }

    // Update the errors state
    setErrors(newErrors);

    // Terms acceptance check
    if (!termsAccepted) {
      setFormStatus({
        type: "error",
        message: "Please accept the terms and conditions to proceed"
      });
      isValid = false;
    }

    return isValid;
  };

  // State to track if payment is complete
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [paypalButtonRendered, setPaypalButtonRendered] = useState(false);


  // 2. Update your PayPal rendering logic
const [paypalLoaded, setPaypalLoaded] = useState(false);

// Add this useEffect to initialize PayPal when SDK is ready
useEffect(() => {
  if (window.paypal && !paypalButtonRendered) {
    renderPayPalButton();
  }
}, [paypalLoaded, paypalButtonRendered]);
  
  // 3. Update your renderPayPalButton function
const renderPayPalButton = () => {
  if (window.paypal && !paypalButtonRendered) {
    const paypalContainer = document.getElementById('paypal-button-container');
    if (!paypalContainer) return;
    
    // Clear the container before rendering
    paypalContainer.innerHTML = '';
    
    window.paypal.Buttons({
      // Set up the transaction
      createOrder: function (data, actions) {
        // Make sure the price matches what you display to the user (29.99)
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: "USD",
              value: "35.99"  // Updated to match the displayed price
            },
            description: `Vehicle Report for ${registrationNumber}`
          }]
        });
      },

      // Finalize the transaction
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          console.log("Payment completed successfully", details);
          setPaymentComplete(true);
          setFormStatus({
            type: "success",
            message: `Payment completed! Thank you ${details.payer.name.given_name}. Your report will be emailed to you shortly.`
          });

          // Optional: Send confirmation to your backend
          // sendPaymentConfirmation(details, registrationNumber, email);
        }); 
      },

      onError: function (err) {
        console.error("PayPal error:", err);
        setFormStatus({
          type: "error",
          message: "Payment processing failed. Please try again."
        });
      }
    }).render('#paypal-button-container');

    setPaypalButtonRendered(true);
  }
};  


  const handleGetReport = async () => {
    // Reset form status
    setFormStatus({ type: "", message: "" });

    // Validate all fields
    if (!validateForm()) {
      // Scroll to the top where errors are shown
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIsLoading(true);

    try {
      // Get current timestamp for the email
      const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

      // Get the base URL for the site
      const baseUrl = window.location.origin;

      // Prepare email template parameters
      const templateParams = {
        from_name: fullName,
        from_email: email,
        reply_to: email,
        to_name: "Admin",
        to_email: "fahizozil17@gmail.com",
        phone: phone,
        registration: registrationNumber,
        car_make: carMake,
        car_model: carModel,
        car_year: carYear,
        mileage: mileage,
        fuel_type: fuelType,
        transmission: transmission,
        color: color,
        // Add file URLs to email
        car_photos: Array.isArray(carPhotos) ? carPhotos.join('\n') : '',
        engine_video: engineVideo || '',
        submission_date: timestamp,
        message: `
            Vehicle Report Request
            ---------------------
            Date: ${timestamp}
            Vehicle: ${carMake} ${carModel} (${registrationNumber})
            
            Customer Details:
            - Name: ${fullName}
            - Email: ${email}
            - Phone: ${phone}
            
            Vehicle Details:
            - Year: ${carYear}
            - Mileage: ${mileage}
            - Fuel Type: ${fuelType}
            - Transmission: ${transmission}
            - Color: ${color}
            
            Files:
            - Photos: ${window.location.origin}${Array.isArray(carPhotos) ? carPhotos.join(`\n${window.location.origin}`) : ''}
            - Video: ${window.location.origin}${engineVideo || ''}
          `
      };

      console.log("Sending email with params:", templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_75x7l19',
        'template_pgxoiwm',
        templateParams,
        'uN-2O3nbFXI273dvI'
      );

      console.log('Email sent successfully!', response);

      // Show success message
      setFormStatus({
        type: "success",
        message: "Thank you! Your report is being processed. Please complete payment."
      });

      // Show PayPal button
      setTimeout(() => {
        renderPayPalButton();
      }, 500);

    } catch (error) {
      console.error('Error:', error);
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 50 }, (_, i) => currentYear - i);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Progress Steps */}
      <div className="flex items-center px-4 py-2 bg-white border-b">
        <div className="flex items-center">
          <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">1</div>
          <span className="ml-2 text-sm font-medium">Precheck</span>
        </div>
        <div className="h-px bg-gray-300 w-8 mx-2"></div>
        <div className="flex items-center text-gray-500">
          <div className="bg-white border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-xs">2</div>
          <span className="ml-2 text-sm font-medium">Payment</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Form status message */}
        {formStatus.message && (
          <div
            className={`mb-4 p-4 rounded ${formStatus.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
              }`}
          >
            {formStatus.message}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-bold">Success! We've detected this vehicle and its previous data records.</h2>
              <div className="mt-4">
                <span className="bg-black text-white text-sm px-3 py-1 inline-block">
                  VIN/REG: {registrationNumber}
                </span>
              </div>
            </div>

            <div className="bg-gray-400 p-6 rounded">
              <h3 className="text-lg font-bold mb-4">Let's Get Started</h3>

              <form>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name *"
                      className={`w-full p-3 rounded ${errors.fullName ? 'border-2 border-red-500' : 'bg-white'}`}
                      value={fullName}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      className={`w-full p-3 rounded ${errors.email ? 'border-2 border-red-500' : 'bg-white'}`}
                      value={email}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone (No spaces) *"
                      className={`w-full p-3 rounded ${errors.phone ? 'border-2 border-red-500' : 'bg-white'}`}
                      value={phone}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="registrationNumber"
                      placeholder="VIN/REG *"
                      className={`w-full p-3 rounded ${errors.registrationNumber ? 'border-2 border-red-500' : 'bg-white'}`}
                      value={registrationNumber}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.registrationNumber && <p className="text-red-600 text-sm mt-1">{errors.registrationNumber}</p>}
                  </div>

                  {/* Car Information Form - Always visible now */}
                  <div className="bg-gray-200 p-4 rounded space-y-4 mt-4">
                    <h4 className="font-medium">Vehicle Details (Required)</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="carMake"
                          placeholder="Car Make *"
                          className={`w-full p-3 rounded ${errors.carMake ? 'border-2 border-red-500' : 'bg-white'}`}
                          required
                          value={carMake}
                          onChange={handleInputChange}
                        />
                        {errors.carMake && <p className="text-red-600 text-sm mt-1">{errors.carMake}</p>}
                      </div>

                      <div>
                        <input
                          type="text"
                          name="carModel"
                          placeholder="Car Model *"
                          className={`w-full p-3 rounded ${errors.carModel ? 'border-2 border-red-500' : 'bg-white'}`}
                          required
                          value={carModel}
                          onChange={handleInputChange}
                        />
                        {errors.carModel && <p className="text-red-600 text-sm mt-1">{errors.carModel}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <select
                          name="carYear"
                          className={`w-full p-3 rounded ${errors.carYear ? 'border-2 border-red-500' : 'bg-white'}`}
                          value={carYear}
                          required
                          onChange={handleInputChange}
                        >
                          <option value="">Select Year *</option>
                          {yearOptions.map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                        {errors.carYear && <p className="text-red-600 text-sm mt-1">{errors.carYear}</p>}
                      </div>

                      <div>
                        <input
                          type="text"
                          name="mileage"
                          placeholder="Mileage *"
                          className={`w-full p-3 rounded ${errors.mileage ? 'border-2 border-red-500' : 'bg-white'}`}
                          required
                          value={mileage}
                          onChange={handleInputChange}
                        />
                        {errors.mileage && <p className="text-red-600 text-sm mt-1">{errors.mileage}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <select
                          name="fuelType"
                          className={`w-full p-3 rounded ${errors.fuelType ? 'border-2 border-red-500' : 'bg-white'}`}
                          value={fuelType}
                          required
                          onChange={handleInputChange}
                        >
                          <option value="">Fuel Type *</option>
                          <option value="Petrol">Petrol</option>
                          <option value="Diesel">Diesel</option>
                          <option value="Hybrid">Hybrid</option>
                          <option value="Electric">Electric</option>
                          <option value="LPG">LPG</option>
                        </select>
                        {errors.fuelType && <p className="text-red-600 text-sm mt-1">{errors.fuelType}</p>}
                      </div>

                      <div>
                        <select
                          name="transmission"
                          className={`w-full p-3 rounded ${errors.transmission ? 'border-2 border-red-500' : 'bg-white'}`}
                          value={transmission}
                          required
                          onChange={handleInputChange}
                        >
                          <option value="">Transmission *</option>
                          <option value="Manual">Manual</option>
                          <option value="Automatic">Automatic</option>
                          <option value="Semi-Automatic">Semi-Automatic</option>
                        </select>
                        {errors.transmission && <p className="text-red-600 text-sm mt-1">{errors.transmission}</p>}
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="color"
                        placeholder="Color *"
                        className={`w-full p-3 rounded ${errors.color ? 'border-2 border-red-500' : 'bg-white'}`}
                        required
                        value={color}
                        onChange={handleInputChange}
                      />
                      {errors.color && <p className="text-red-600 text-sm mt-1">{errors.color}</p>}
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1 font-medium">Upload Car Photos (Up to 5)</label>
                      <label className="inline-block px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700">
                        Choose Photos
                        <input
                          type="file"
                          name="carPhotos"
                          multiple
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                      {isLoading && name === "carPhotos" && (
                        <div className="mt-2 text-blue-600">Uploading photos...</div>
                      )}
                      {carPhotos.length > 0 && (
                        <div className="mt-2 text-green-600">
                          Successfully uploaded {carPhotos.length} photo(s)
                        </div>
                      )}
                      {errors.carPhotos && (
                        <p className="text-red-600 text-sm mt-1">{errors.carPhotos}</p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="block mb-1 font-medium">Upload Engine Video</label>
                      <label className="inline-block px-4 py-2 bg-green-600 text-white rounded cursor-pointer hover:bg-green-700">
                        Choose Video
                        <input
                          type="file"
                          name="engineVideo"
                          accept="video/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                      {isLoading && name === "engineVideo" && (
                        <div className="mt-2 text-blue-600">Uploading video...</div>
                      )}
                      {engineVideo && (
                        <div className="mt-2 text-green-600">
                          Video successfully uploaded
                        </div>
                      )}
                      {errors.engineVideo && (
                        <p className="text-red-600 text-sm mt-1">{errors.engineVideo}</p>
                      )}
                    </div>


                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-2/5">
           <div className="bg-white p-6 border rounded mt-6">
  <h3 className="text-lg font-semibold mb-4">Package Includes:</h3>
  <ul className="space-y-2 text-sm">
    {[
      "Vehicle Overview",
      "Market Value",
      "Vehicle Specifications",
      "Salvage History",
      "Export Records",
      "Impound Records",
      "Sales Listing History"
    ].map((item, idx) => (
      <li key={idx} className="flex items-start">
        <span className="text-green-600 mr-2">✓</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>


            <div className="mt-4 flex justify-center flex-col items-center">
              {!paymentComplete ? (
                <>
                  <button
                    onClick={handleGetReport}
                    disabled={isLoading}
                    className={`bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-medium ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                  >
                    {isLoading ? 'Processing...' : 'Get Report'}
                  </button>

                  {/* PayPal button container */}
                  <div id="paypal-button-container" className="mt-4 w-full max-w-xs"></div>

                  {/* Or separator */}
                  {paypalButtonRendered && (
                    <div className="flex items-center w-full my-4 max-w-xs">
                      <div className="flex-grow h-px bg-gray-300"></div>
                      <div className="mx-4 text-gray-500">or</div>
                      <div className="flex-grow h-px bg-gray-300"></div>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-green-100 text-green-800 p-4 rounded">
                  Payment complete! Your report will be delivered to your email.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. Update the Next.js Script component with an onLoad handler // In your Page component:
const Page = () => {
  return (
    <>
      <Script
        src="https://www.paypal.com/sdk/js?client-id=Af6QbZkvAz-SkqDF0gsQr8OSn4SlJmfgVJ6t0dTa2apDwGwUl-izHjIvbXgLXMz12odGnidrTmjdlxk6&currency=USD"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("PayPal SDK loaded");
          if (typeof window !== 'undefined') {
            // Set a flag that PayPal is loaded
            window.paypalSDKLoaded = true;
            // Trigger any components that need to know PayPal is ready
            const event = new Event('paypalSDKLoaded');
            window.dispatchEvent(event);
          }
        }}
        onError={() => console.error("Failed to load PayPal SDK")}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <InnerPage />
      </Suspense>
    </>
  );
};

export default Page;