import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

type GSTInvoicingProps = {
  imageUrl: string;
  title: string;
  rating: number | string;
  description?: string;
  exclusiveOffersCount?: number;
  features?: string[];
};

const GSTInvoicingComponent: React.FC<GSTInvoicingProps> = ({ 
  imageUrl, 
  title, 
  rating, 
  description = '', 
  exclusiveOffersCount = 0,
  features = [] 
}) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Card - Product Info, Dynamic Content & Offers */}
          <div className="flex-1 bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left side - Image and links */}
              <div className="w-full md:w-64 flex-shrink-0">
                <img 
                  src={imageUrl} 
                  alt={title}
                  className="w-full h-auto rounded-lg mb-4 border border-gray-200"
                />
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm text-gray-600 hover:text-amber-700 cursor-pointer transition-colors">ID Proof</p>
                  <p className="text-xs sm:text-sm text-gray-600 hover:text-amber-700 cursor-pointer transition-colors">HSN Code</p>
                  <button className="text-xs sm:text-sm text-amber-700 hover:text-amber-800 font-medium hover:underline">
                    Load More →
                  </button>
                </div>
              </div>

              {/* Right side - All content */}
              <div className="flex-1 space-y-5">
                {/* Header */}
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-3">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span className="text-xs font-medium text-amber-700">GST INVOICING</span>
                  </div>
                  <h1 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{title}</h1>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600">({rating})</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">{description}</p>
                </div>

                {/* Features Box */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs px-3 py-1.5 rounded-full shadow-sm">
                      {exclusiveOffersCount} Exclusive Offers
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800 text-sm">1 Year License</p>
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1 text-lg font-bold">›</span>
                        <p className="text-xs sm:text-sm text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 border-2 border-amber-600 text-amber-700 px-6 py-2 rounded-lg hover:bg-amber-50 transition-all duration-300 font-medium text-xs sm:text-sm shadow-sm hover:shadow">
                    ADD TO CART
                  </button>
                </div>

                {/* Terms and Refer */}
                <div className="flex justify-between items-center">
                  <button className="text-xs sm:text-sm text-amber-700 hover:text-amber-800 font-medium hover:underline">
                    Terms and conditions
                  </button>
                  <button className="text-xs sm:text-sm text-amber-700 hover:text-amber-800 font-medium hover:underline">
                    Refer a Friend
                  </button>
                </div>

                {/* Offers and Discounts */}
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Offers and discounts</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-amber-200 transition-colors">
                      <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-700 rounded shadow-sm"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm">LEDGERS HR Software</h3>
                        <p className="text-xs text-gray-600">Attendance, Payroll, Employee Portal & HR Compliance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-amber-200 transition-colors">
                      <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-700 font-bold text-xs">GST</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm">Save 18% with GST Registration</h3>
                        <p className="text-xs text-gray-600">Get GST einvoice with Input Tax Credit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Cart Form */}
          <div className="lg:w-80 bg-white rounded-xl shadow-lg border border-gray-200 p-5 space-y-5 h-fit">
            {/* Cart Icon */}
            <div className="flex justify-end">
              <div className="relative">
                <ShoppingCart className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-600 rounded-full text-white text-xs flex items-center justify-center">0</span>
              </div>
            </div>

            {/* Empty Cart Message */}
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Your cart is empty</h3>
              <p className="text-xs text-gray-600">Browse our services and add some services in cart!</p>
            </div>

            {/* Login Section */}
            <div className="text-center">
              <p className="text-xs text-gray-600 mb-4">
                Existing User? <button className="text-amber-700 hover:text-amber-800 font-semibold hover:underline">Login</button>
              </p>
            </div>

            {/* Form */}
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600 focus:border-transparent text-xs sm:text-sm bg-gray-50"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600 focus:border-transparent text-xs sm:text-sm bg-gray-50"
              />
              <div className="flex gap-2">
                <select className="px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600 focus:border-transparent text-xs sm:text-sm bg-gray-50">
                  <option>🇮🇳 +91</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="flex-1 px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600 focus:border-transparent text-xs sm:text-sm bg-gray-50"
                />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="gstn" className="w-3.5 h-3.5 accent-amber-600" />
                <label htmlFor="gstn" className="text-xs text-gray-600">
                  Enter GSTN to get 18% GST Credit
                </label>
              </div>
              <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-3 rounded-lg hover:from-amber-800 hover:to-amber-900 transition-all duration-300 font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg">
                Get Started
              </button>
            </div>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pt-1">
              <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Secure · No spam · Instant confirmation</span>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-sm sm:text-base">★★★★★</span>
            <span className="text-xs sm:text-sm text-gray-600">4.9/5 (2.5k+ reviews)</span>
          </div>
          <div className="w-px h-3 bg-gray-200 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 border-2 border-white shadow-sm" />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Trusted by 50k+ businesses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage with default props
export default GSTInvoicingComponent;