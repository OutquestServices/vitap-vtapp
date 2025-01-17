"use client";
import { uploadFileToS3 } from "@/lib/ImageUpload";
import React, { useState } from "react";

export default function UploadImage() {
  const [formData, setFormData] = useState({
    eventId: "",
    instructorImage: null as File | null,
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFormData((prev) => ({
        ...prev,
        instructorImage: selectedFile,
      }));
      setPreviewImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage("Processing...");

    if (!formData.instructorImage) {
      setStatusMessage("Please upload an image.");
      return;
    }

    const image = await uploadFileToS3(formData.instructorImage);

    try {
      const response = await fetch("/api/imageupload", {
        method: "POST",
        body: JSON.stringify({
          eventId: formData.eventId,
          image,
        }),
      });

      const data = await response.json();
      setStatusMessage(data.message || "Image uploaded successfully.");
      setFormData({
        eventId: "",
        instructorImage: null,
      });
      setPreviewImage(null);
    } catch (error) {
      console.error("Error while uploading Image:", error);
      setStatusMessage("Error occurred while uploading the Image.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-md w-full max-w-sm sm:max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Create New Instructor
        </h1>

        {/* Notes Section */}
        <div className="bg-gray-700 p-4 rounded-md mb-6">
          <ul className="list-disc list-inside text-gray-300 text-sm">
            <li>Only image files (e.g., .jpg, .jpeg, .png) can be uploaded.</li>
            <li>Each event ID can have only one image uploaded.</li>
            <li>
              Once an image is uploaded for an event ID, it cannot be changed.
            </li>
            <li>
              If you need to change the image, please contact at{" "}
              <a
                href="mailto:akshay.22bce9221@vitapstudent.ac.in"
                className="text-blue-400 underline"
              >
                akshay.22bce9221@vitapstudent.ac.in
              </a>
              .
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="eventId"
              className="block text-sm font-medium text-gray-300"
            >
              Event Id
            </label>
            <input
              type="text"
              id="eventId"
              name="eventId"
              value={formData.eventId}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="instructorImage"
              className="block text-sm font-medium text-gray-300"
            >
              Instructor Image
            </label>
            <div
              className={`mt-1 w-full h-40 sm:h-48 flex items-center justify-center border-2 ${
                previewImage
                  ? "border-gray-600"
                  : "border-dashed border-gray-500"
              } rounded-md bg-gray-700 relative`}
            >
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Selected"
                  className="h-full w-full object-cover rounded-md"
                />
              ) : (
                <label
                  htmlFor="instructorImage"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <span className="text-gray-400 text-lg sm:text-2xl">+</span>
                  <span className="text-gray-400 text-sm sm:text-base">
                    Upload an image
                  </span>
                </label>
              )}
              <input
                type="file"
                id="instructorImage"
                name="instructorImage"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Upload Image
          </button>
        </form>

        {statusMessage && (
          <p className="mt-4 text-sm text-center text-gray-400">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
}
