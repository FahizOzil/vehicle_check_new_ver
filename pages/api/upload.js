// import formidable from 'formidable';
// import fs from 'fs';
// import path from 'path';

// // Configure API route to handle file uploads
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const form = formidable({ multiples: true });
    
//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         return res.status(500).json({ error: 'Failed to parse form data' });
//       }

//       // Get the file and user info from the request
//       const file = files.file;
//       const email = fields.email;
      
//       // Get current UTC date and format it
//       const now = new Date();
//       const timestamp = now.toISOString()
//         .slice(0, 19)
//         .replace('T', ' ')
//         .replace(/[-:]/g, '');  // Format: YYYYMMDD HHMMSS

//       // Set up directory paths
//       const baseDir = path.join(process.cwd(), 'public', 'auto');
//       const dateDir = path.join(baseDir, timestamp);
//       const userDir = path.join(dateDir, 'FahizOzil'); // Using fixed username

//       // Create directories if they don't exist
//       [baseDir, dateDir, userDir].forEach(dir => {
//         if (!fs.existsSync(dir)) {
//           fs.mkdirSync(dir, { recursive: true });
//         }
//       });

//       // Create filename with timestamp
//       const fileExt = path.extname(file.originalFilename || '');
//       const fileName = `${timestamp}_${file.originalFilename}`;
//       const filePath = path.join(userDir, fileName);

//       // Copy the uploaded file to our directory
//       fs.copyFileSync(file.filepath, filePath);

//       // Create the public URL for the file
//       const publicPath = `/auto/${timestamp}/FahizOzil/${fileName}`;

//       // Return the success response
//       res.status(200).json({ 
//         success: true,
//         fileUrl: publicPath,
//         timestamp: now.toISOString().replace('T', ' ').slice(0, 19),
//         username: 'FahizOzil'
//       });
//     });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ 
//       success: false, 
//       error: 'Failed to upload file',
//       details: error.message 
//     });
//   }
// }