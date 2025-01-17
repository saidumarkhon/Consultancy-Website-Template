import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const QuoteRequestForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "Financial Consultancy",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full bg-tb-color mt-16 mb-16">
      <div className="flex flex-wrap lg:h-[650px]">
        {/* Left Column - Form */}
        <div className="w-full lg:w-1/2 py-10 px-6">
          <div className="max-w-xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-navy-900 mb-4">
              Request A Free Quote
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-xl lg:text-2xl">
              Kasd vero erat ea amet justo no stet, et elitr no dolore no elitr
              sea kasd et dolor diam tempor. Nonumy sed dolore no eirmod sit
              nonumy vero lorem amet stet diam at. Ea at lorem sed et, lorem et
              rebum ut eirmod gubergren, dolor ea duo diam justo dolor diam
              ipsum dolore stet stet elitr ut. Ipsum amet labore lorem lorem
              diam magna sea, eos sed dolore elitr.
            </p>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                />
              </div>

              <div className="relative col-span-full md:col-span-1">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-200 rounded-md appearance-none focus:outline-none focus:border-gray-400 bg-white text-gray-500"
                >
                  <option value="Financial Consultancy">
                    Financial Consultancy
                  </option>
                  <option value="Business Advisory">Business Advisory</option>
                  <option value="Tax Planning">Tax Planning</option>
                  <option value="Investment Strategy">
                    Investment Strategy
                  </option>
                </select>
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className=" bg-red-400 w-full text-white py-2 px-4 rounded-md hover:bg-primary-color transition-colors font-medium"
                >
                  Request A Quote
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-full">
          <img
            src="/quote.jpg"
            alt="Business analysis"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestForm;


