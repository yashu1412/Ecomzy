import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import CountryCode from "../../../Data/CountryCode.json";  

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = (data) => {
    console.log("Form Data Submitted: ", data);
    // Here you can handle the form submission logic such as redirecting to a thank you page, etc.
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={handleSubmit(submitContactForm)}
    >
      {/* Name Fields */}
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="firstname" className="lable-style">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="form-style p-2 rounded-lg border-black"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="-mt-1 text-[12px] text-red-500">
              Please enter your first name.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="lastname" className="lable-style">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className="form-style p-2 rounded-lg border-black"
            {...register("lastname")}
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="lable-style">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="form-style  p-2 rounded-lg border-black"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="-mt-1 text-[12px] text-red-500">
            Please enter a valid email address.
          </span>
        )}
      </div>

      {/* Phone Number with Country Code */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="lable-style">
          Phone Number
        </label>
        <div className="flex gap-5">
          <div className="flex w-[81px] flex-col gap-2">
            <select
              type="text"
              name="countrycode"
              id="countrycode"
              className="form-style  p-2 rounded-lg border-black bg-white text-richblack-300"
              {...register("countrycode", { required: true })}
            >
              {CountryCode.map((ele, i) => {
                return (
                  <option key={i} value={ele.code}>
                    {ele.code} - {ele.country}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className="form-style  p-2 rounded-lg border-black"
              {...register("phoneNo", {
                required: { value: true, message: "Phone number required." },
                maxLength: { value: 12, message: "Invalid phone number." },
                minLength: { value: 10, message: "Invalid phone number." },
              })}
            />
          </div>
        </div>
        {errors.phoneNo && (
          <span className="-mt-1 text-[12px] text-red-500">
            {errors.phoneNo.message}
          </span>
        )}
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="lable-style">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter your message"
          className="form-style  p-2 rounded-lg border-black"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="-mt-1 text-[12px] text-red-500">
            Please enter your message.
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`rounded-md bg-yellow-500 px-6 py-3 text-center text-[13px] font-bold text-white shadow-md 
        transition-all duration-200 hover:scale-95 sm:text-[16px]`}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactUsForm;
