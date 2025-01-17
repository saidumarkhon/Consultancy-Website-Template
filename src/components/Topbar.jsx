import React from "react";

const Topbar = () => {
  return (
    <div className="bg-tb-color  hidden lg:block text-base">
        <div className="flex justify-between">
          {/* Left side links */} 
          <div className="flex items-center pl-8 font-secondary-font text-[18px] ">
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-600 py-2 px-4 border-r border-gray-300"
              >
                <small>FAQs</small>
              </a>
              <a
                href="#"
                className="text-gray-600 py-2 px-4 border-r border-gray-300"
              >
                <small>Support</small>
              </a>
              <a
                href="#"
                className="text-gray-600 py-2 px-4 border-r border-gray-300"
              >
                <small>Privacy</small>
              </a>
              <a
                href="#"
                className="text-gray-600 py-2 px-4 border-r border-gray-300"
              >
                <small>Policy</small>
              </a>
              <a href="#" className="text-gray-600 py-2 px-4">
                <small>Career</small>
              </a>
            </div>
          </div>

          {/* Right side contact info */}
          <div className="flex items-cente text-white px-10 gap-2 bg-primary-color"
          style={{
            clipPath: 'polygon(0% 0%, 7% 100%, 100% 100%, 100% 0%)'
          }}>
            <div
              className="flex items-center justify-center gap-2 pr-4 pl-14"
              
            >
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="m3.62 6.389 8.396 6.724 8.638-6.572-7.69-4.29a1.975 1.975 0 0 0-1.928 0L3.62 6.39Z" />
                <path d="m22 8.053-8.784 6.683a1.978 1.978 0 0 1-2.44-.031L2.02 7.693a1.091 1.091 0 0 0-.019.199v11.065C2 20.637 3.343 22 5 22h14c1.657 0 3-1.362 3-3.043V8.053Z" />
              </svg>

              <p>info@example.com</p>
            </div>
            <div className="flex items-center justify-center gap-2 px-4 border-l-2">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
              </svg>

              <p>+012 345 6789</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Topbar;
