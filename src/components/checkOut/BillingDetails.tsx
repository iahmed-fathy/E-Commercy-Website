"use client";

import { useState } from "react";

export default function BillingDetails() {
  const [fname, setFname] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [townCity, setTownCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  return (
    <div className="w-1/2 max-lg:w-full">
      <h1 className="font-medium text-[36px] mb-4">Billing Details</h1>
      <form className="flex flex-col gap-2 w-full">
        <div>
          <label htmlFor="fname" className="text-black/40 text-[16px] block">
            <span>First Name</span> <span className="text-red-300">*</span>
          </label>
          <input
            id="fname"
            name="fname"
            type="text"
            required
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="bg-[#F5F5F5] rounded-[4px] focus:outline-0 py-2 px-4 w-full"
          />
        </div>
        <div>
          <label
            htmlFor="companyName"
            className="text-black/40 text-[16px] block"
          >
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="bg-[#F5F5F5] rounded-[4px] focus:outline-0 py-2 px-4 w-full"
          />
        </div>
        <div>
          <label
            htmlFor="streetAddress"
            className="text-black/40 text-[16px] block"
          >
            <span>Street Address</span> <span className="text-red-300">*</span>
          </label>
          <input
            id="streetAddress"
            name="streetAddress"
            type="text"
            required
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            className="bg-[#F5F5F5] rounded-[4px] focus:outline-0 py-2 px-4 w-full"
          />
        </div>
        <div>
          <label
            htmlFor="apartment"
            className="text-black/40 text-[16px] block"
          >
            Apartment, floor, etc. (optional)
          </label>
          <input
            id="apartment"
            name="apartment"
            type="text"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
            className="bg-[#F5F5F5] rounded-[4px] focus:outline-0 py-2 px-4 w-full"
          />
        </div>
        <div>
          <label htmlFor="townCity" className="text-black/40 text-[16px] block">
            <span>Town/City</span> <span className="text-red-300">*</span>
          </label>
          <input
            id="townCity"
            name="townCity"
            type="text"
            required
            value={townCity}
            onChange={(e) => setTownCity(e.target.value)}
            className="bg-[#F5F5F5] rounded-[4px] focus:outline-0 py-2 px-4 w-full"
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="text-black/40 text-[16px] block"
          >
            <span>Phone Number</span> <span className="text-red-300">*</span>
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-[#F5F5F5] rounded-[4px] focus:outline-0 py-2 px-4 w-full"
          />
        </div>
        <div>
          <label
            htmlFor="emailAddress"
            className="text-black/40 text-[16px] block"
          >
            <span>Email Address</span> <span className="text-red-300">*</span>
          </label>
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            required
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className="bg-[#F5F5F5] rounded-[4px] focus:outline-0 py-2 px-4 w-full"
          />
        </div>
        <div className="flex gap-2 items-center ">
          <input
            type="checkbox"
            id="saveInfo"
            name="saveInfo"
            checked={saveInfo}
            onChange={(e) => setSaveInfo(e.target.checked)}
            className="w-4 h-4 accent-[#DB4444]"
          />
          <label htmlFor="saveInfo" className="text-[16px]">
            Save this information for faster check-out next time
          </label>
        </div>
      </form>
    </div>
  );
}
