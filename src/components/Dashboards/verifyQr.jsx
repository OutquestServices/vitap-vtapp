"use client";
import axios from "axios";
import QrReader from "modern-react-qr-reader";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const VerifyQR = () => {
  const [result, setResult] = useState("");
  const [popup, setPopup] = useState(false);
  const [formData, setFormData] = useState({ scanid: "" });
  const [message, setMessage] = useState("");

  const handleError = (err) => {
    console.error(err);
    setMessage("Error reading QR. Try again.");
    setPopup(true);
  };

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      setFormData({ scanid: data });
      handleSubmit(data);
    }
  };

  const onPopUpClose = () => {
    setPopup(false);
  };

  const isFormValid = () => {
    return formData.scanid.trim() !== "";
  };

  const handleSubmit = async (scanData) => {
    if (isFormValid()) {
      try {
        const response = await axios.post("/api/verify", { scanid: scanData });
        setMessage(response.data.message);
        setPopup(true);
        setTimeout(() => {
          setPopup(false);
          setResult("");
          setFormData({ scanid: "" }); // Reset the form data after the popup closes
        }, 3000);
      } catch (error) {
        console.error("An error occurred:", error.response || error);
        setMessage("Failed to verify. Try again.");
      }
    } else {
      setMessage("Scan Again");
    }
  };

  return (
    <>
      <div className="h-full w-full relative pb-28 bg-cover bg-black">
        {popup && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="p-4 bg-white shadow-xl rounded-lg">
              <p className="text-lg">{message}</p>
              <IoMdClose
                size={30}
                className="absolute top-2 right-2 cursor-pointer"
                onClick={onPopUpClose}
              />
            </div>
          </div>
        )}

        <main className="px-4 py-2 text-center text-white">
          <h1 className="text-2xl font-semibold">Ticket Verification</h1>
          <QrReader
            delay={300}
            facingMode="environment"
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
          {result && <p>{result}</p>}
        </main>
      </div>
    </>
  );
};

export default VerifyQR;
