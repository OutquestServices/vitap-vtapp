import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
} from "@aws-sdk/client-s3";

// Create S3 Client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export async function uploadFileToS3(file: File): Promise<string> {
  if (!process.env.AWS_BUCKET_NAME || !process.env.AWS_REGION) {
    throw new Error("AWS environment variables are not properly configured.");
  }

  const timestamp = Date.now();
  const fileName = `${timestamp}-${file.name}`;
  const filepath = `vtapp/${fileName}`;

  // Ensure the file is a valid Blob or Buffer
  const buffer = await file.arrayBuffer();
  const fileBuffer = Buffer.from(buffer);

  const params: PutObjectCommandInput = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: filepath,
    Body: fileBuffer, // Convert File to Buffer
    ContentType: file.type, // Optional: Ensure correct MIME type
  };

  const command = new PutObjectCommand(params);

  try {
    const data = await s3Client.send(command);

    if (data.$metadata.httpStatusCode !== 200) {
      throw new Error("Failed to upload file");
    }

    return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/vtapp/${fileName}`;
  } catch (err: any) {
    console.error("Error uploading file:", err.message || err);
    throw new Error(err.message || "File upload failed");
  }
}
