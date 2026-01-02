

import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const GSTInvoicingComponent = ({ 
  imageUrl, 
  title, 
  rating, 
  description, 
  exclusiveOffersCount,
  features 
}) => {
  return (
    <div className="flex gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Left Card - Product Info, Dynamic Content & Offers */}
      <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
        <div className="flex gap-6">
          {/* Left side - Image and links */}
          <div className="w-64 flex-shrink-0">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="space-y-2">
              <p className="text-sm text-gray-600">ID Proof</p>
              <p className="text-sm text-gray-600">HSN Code</p>
              <button className="text-sm text-blue-600 hover:underline">
                Load More
              </button>
            </div>
          </div>

          {/* Right side - All content */}
          <div className="flex-1 space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-xl font-semibold text-gray-800 mb-2">{title}</h1>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({rating})</span>
              </div>
              <p className="text-sm text-gray-600">{description}</p>
            </div>

            {/* Features Box */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {exclusiveOffersCount} Exclusive Offers
                </span>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">1 Year License</p>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">›</span>
                    <p className="text-sm text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              <button className="mt-4 border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-50 transition-colors">
                ADD
              </button>
            </div>

            {/* Terms and Refer */}
            <div className="flex justify-between items-center">
              <button className="text-sm text-blue-600 hover:underline">
                Terms and conditions
              </button>
              <button className="text-sm text-blue-600 hover:underline">
                Refer a Friend
              </button>
            </div>

            {/* Offers and Discounts */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Offers and discounts</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">LEDGERS HR Software</h3>
                    <p className="text-sm text-gray-600">Attendance, Payroll, Employee Portal & HR Compliance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xs">GIN</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Save 18% with GST Registration</h3>
                    <p className="text-sm text-gray-600">Get GST einvoice with Input Tax Credit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card - Cart Form */}
      <div className="w-80 bg-white rounded-lg shadow-sm p-6 space-y-6 h-fit">
        {/* Cart Icon */}
        <div className="flex justify-end">
          <div className="relative">
            <ShoppingCart className="w-8 h-8 text-green-600" />
          </div>
        </div>

        {/* Empty Cart Message */}
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 mb-2">Your cart is empty</h3>
          <p className="text-sm text-gray-600">Browse our services and add some services in cart!</p>
        </div>

        {/* Login Section */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Existing User? <button className="text-green-600 hover:underline">Login</button>
          </p>
        </div>

        {/* Form */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="flex gap-2">
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>🇮🇳 +91</option>
            </select>
            <input
              type="tel"
              placeholder="Phone"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="gstn" className="w-4 h-4" />
            <label htmlFor="gstn" className="text-sm text-gray-600">
              Enter GSTN to get 18% GST Credit
            </label>
          </div>
          <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

// Example usage with default props
export default GSTInvoicingComponent;