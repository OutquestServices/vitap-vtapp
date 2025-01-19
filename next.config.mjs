/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AWS_KEY_ID: process.env.AWS_KEY_ID,
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    AWS_REGION: process.env.AWS_REGION,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  },
  images: {
    domains: [
      "www.vitap.ac.in",
      "vitap-backend.s3.ap-south-1.amazonaws.com",
      "universitywebsitbucket.s3.ap-south-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
