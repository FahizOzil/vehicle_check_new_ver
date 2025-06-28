import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');
        const email = formData.get('email');

        if (!file) {
            return NextResponse.json(
                { error: 'No file received.' },
                { status: 400 }
            );
        }

        // Convert the file to a buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Create a unique filename
        const timestamp = new Date().toISOString().replace(/[:]/g, '-');
        const originalName = file.name;
        const fileName = `${timestamp}-${originalName}`;

        // Create directory path
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        const fullPath = path.join(uploadDir, fileName);

        // Create directory if it doesn't exist
        try {
            await mkdir(uploadDir, { recursive: true });
        } catch (err) {
            console.error('Error creating directory:', err);
        }

        // Write the file
        await writeFile(fullPath, buffer);

        // Return the public URL
        const fileUrl = `/uploads/${fileName}`;

        return NextResponse.json(
            {
                success: true,
                fileUrl: fileUrl
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: 'File upload failed: ' + error.message },
            { status: 500 }
        );
    }
}