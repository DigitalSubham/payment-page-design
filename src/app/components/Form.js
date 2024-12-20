"use client";
import Image from "next/image";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    address: "",
    state: "",
    city: "",
    pincode: "",
    cardHolderName: "",
    cardNo: "",
    expiry: "",
    cvv: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidation = () => {
    const newError = {};
    if (!formData.address.trim()) newError.address = "Address is required.";
    if (!formData.state.trim()) newError.state = "State is required.";
    if (!formData.city.trim()) newError.city = "City is required.";
    if (!formData.pincode.trim()) newError.pincode = "Pincode is required.";
    if (!formData.cardHolderName.trim())
      newError.cardHolderName = "Cardholder name is required.";
    if (!formData.cardNo.trim() || formData.cardNo.length !== 16)
      newError.cardNo = "Card number must be 16 digits.";
    if (!formData.expiry.trim()) newError.expiry = "Expiry date is required.";
    if (!formData.cvv.trim() || formData.cvv.length !== 3)
      newError.cvv = "CVV must be 3 digits.";

    setError(newError);
    return Object.keys(newError).length === 0; // Returns true if no errors
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log("Form Submitted:", formData);
      // Further processing logic
    }
  };

  const inputFields = [
    {
      label: "Address Line",
      name: "address",
      type: "text",
      placeholder: "e.g., Po. Box 1223",
    },
    {
      label: "State",
      name: "state",
      type: "text",
      placeholder: "e.g., Tanzania, Arusha",
    },
    { label: "City", name: "city", type: "text", placeholder: "e.g., Arusha" },
    {
      label: "Pincode",
      name: "pincode",
      type: "number",
      placeholder: "e.g., 800008",
    },
  ];

  const cardFields = [
    {
      label: "Card Holder's Name",
      name: "cardHolderName",
      type: "text",
      placeholder: "e.g., Seen on your card",
    },
    {
      label: "Card Number",
      name: "cardNo",
      type: "text",
      placeholder: "e.g., 1234 5678 9101 1121",
    },
    {
      label: "Expiry",
      name: "expiry",
      type: "text",
      placeholder: "e.g., MM/YY",
    },
    { label: "CVV", name: "cvv", type: "number", placeholder: "e.g., 123" },
  ];

  const InputField = ({ label, name, type, placeholder }) => (
    <label className="flex flex-col gap-1">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        className={`border-2 rounded-md p-2 outline-none ${
          error[name] ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error[name] && (
        <span className="text-red-500 text-sm">{error[name]}</span>
      )}
    </label>
  );

  return (
    <div className="text-black   w-full mx-auto">
      <h1 className="capitalize text-2xl font-bold text-start mb-4">
        Complete Registration Payment
      </h1>
      <form onSubmit={handleNext}>
        <h2 className="text-base font-semibold mb-2">Personal Details</h2>
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-4">
          {inputFields.map((field, index) => (
            <InputField key={index} {...field} />
          ))}
        </div>

        <div>
          <h2 className="text-base font-semibold mt-6 mb-2">Payment Methods</h2>
          <div className="flex gap-5 items-center justify-start">
            {[
              { src: "/visa.png", alt: "Visa" },
              { src: "/stripe.png", alt: "Stripe" },
              { src: "/paypal.png", alt: "PayPal" },
              { src: "/mastercard.png", alt: "MasterCard" },
              { src: "/gpay.jpeg", alt: "Google Pay" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-sky-50 rounded-lg p-2 flex items-center justify-center w-[80px] h-[50px]" // Rectangle dimensions
              >
                <Image
                  priority
                  src={item.src}
                  alt={item.alt}
                  height={30} // Adjusted height for images
                  width={60} // Adjusted width for images
                  className="object-contain" // Ensures proper scaling within rectangle
                />
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-base font-semibold mt-6 mb-2">Card Details</h2>
        <div className="flex flex-col  gap-4">
          {cardFields.slice(0, 2).map((field, index) => (
            <InputField key={index} {...field} />
          ))}
          <div className="flex flex-col lg:flex-row gap-4">
            {cardFields.slice(2).map((field, index) => (
              <InputField key={index} {...field} />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
