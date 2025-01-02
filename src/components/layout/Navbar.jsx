import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">TaskFlow</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary">
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-primary"
            >
              Testimonials
            </a>
            <a href="#faq" className="text-gray-600 hover:text-primary">
              FAQ
            </a>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 text-gray-600 hover:text-primary"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-gray-600 hover:text-primary"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-gray-600 hover:text-primary"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 text-gray-600 hover:text-primary"
            >
              FAQ
            </a>
            <button className="w-full text-left px-3 py-2 bg-primary text-white rounded-md">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
