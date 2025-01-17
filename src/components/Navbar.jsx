import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Smile } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "about", label: "About" },
  { href: "service", label: "Service" },
  {
    href: "",
    label: "Pages",
    dropdown: [
      { href: "blog", label: "Blog Grid" },
      { href: "detail", label: "Blog Detail" },
      { href: "feature", label: "Features" },
      { href: "quote", label: "Quote Form" },
      { href: "team", label: "The Team" },
      { href: "testimonial", label: "Testimonial" },
    ],
  },
  { href: "contact", label: "Contact" },
];

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Get current path without leading slash
    const path = window.location.pathname.replace(/^\//, "");
    setCurrentPath(path || "/");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const isLinkActive = (href) => {
    return currentPath === href;
  };

  const isDropdownActive = (item) => {
    if (!item.dropdown) return false;
    return item.dropdown.some(dropdownItem => isLinkActive(dropdownItem.href));
  };

  return (
    <nav
      className={`w-full top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-linear ${
        isScrolled ? "py-4 fixed" : "py-8"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between text-primary-color">
          {/* Logo */}
          <a href="#" className="flex items-center justify-center space-x-3">
            <Smile size={40} />
            <span className="text-2xl md:text-4xl font-bold dark:text-white uppercase">
              Consult
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 uppercase">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center space-x-1 uppercase transition-colors ${
                        isDropdownActive(item) || activeDropdown === item.label
                          ? "text-primary-color"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary-color"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 z-50 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 border border-gray-200 dark:border-gray-700">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className={`block px-4 py-2 transition-colors ${
                              isLinkActive(dropdownItem.href)
                                ? "text-primary-color"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`transition-colors ${
                      isLinkActive(item.href)
                        ? "text-primary-color"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary-color dark:hover:text-blue-500"
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="pt-4 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`w-full flex items-center justify-between px-4 py-2 transition-colors ${
                        isDropdownActive(item) || activeDropdown === item.label
                          ? "text-primary-color"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className={`block px-4 py-2 transition-colors ${
                              isLinkActive(dropdownItem.href)
                                ? "text-primary-color"
                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`block px-4 py-2 transition-colors ${
                      isLinkActive(item.href)
                        ? "text-primary-color"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;