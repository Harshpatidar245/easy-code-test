'use client';

import { useState, ChangeEvent, FormEvent, JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  paymentMethod: string;
}

export default function Checkout(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: 'razorpay',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-primary-light">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg"></div>
            <span className="font-bold text-lg">EasyCode Academy</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-gray-700 hover:text-primary">Programs</a>
            <a href="#" className="text-gray-700 hover:text-primary">Courses</a>
            <a href="#" className="text-gray-700 hover:text-primary">Practice</a>
            <a href="#" className="text-gray-700 hover:text-primary">Resources</a>
            <a href="#" className="text-gray-700 hover:text-primary">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>{'>'}</span>
          <span className="text-gray-900">Checkout</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-text-dark mb-6">Confirm Your Seat</h2>
            
            <p className="text-gray-700 mb-6">
              Join Python Using AI Live Workshop at EasyCode Academy
            </p>

            {/* Course Details */}
            <div className="space-y-4 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white text-sm">✓</div>
                <span>Course ID: EC-PYAI-01</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white text-sm">✓</div>
                <span>Python Using AI Live Workshop</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white text-sm">✓</div>
                <span>Date: 30 Jan, 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white text-sm">✓</div>
                <span>Time: 7:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white text-sm">✓</div>
                <span>Amount Payable: ₹99</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mb-8">
              <h3 className="text-lg font-semibold mb-6">Enter Your Information</h3>
              <div className="space-y-4">
                <div className="relative">
                  <span className="absolute left-3 top-3 text-primary">👤</span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-primary">✉️</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-primary text-lg">📞</span>
                  <span className="absolute left-12 top-3 text-gray-500 text-sm">+91</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </form>

            {/* Payment Method (left) */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="razorpay"
                    checked={formData.paymentMethod === 'razorpay'}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span className="ml-3 text-gray-700 font-semibold">Razorpay</span>
                  {formData.paymentMethod === 'razorpay' && (
                    <span className="ml-auto text-primary font-bold text-lg">✓</span>
                  )}
                </label>
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span className="ml-3 text-gray-700 font-semibold">UPI</span>
                  {formData.paymentMethod === 'upi' && (
                    <span className="ml-auto text-primary font-bold text-lg">✓</span>
                  )}
                </label>
              </div>
            </div>

            {/* Proceed Button */}
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-4 transition">
              Proceed to Pay ₹99
              <span>{'>'}</span>
            </button>
          </div>

          {/* Right Section - Payment Summary */}
          <div className="bg-white rounded-lg p-8 shadow-sm h-fit">
            <h2 className="text-2xl font-bold text-text-dark mb-6">Payment Summary</h2>
            
            {/* Illustration Placeholder */}
            <div className="bg-linear-to-br from-primary-light to-accent-light rounded-lg h-48 mb-6 flex items-center justify-center">
              <Image
                src="/course-illustration.png"
                alt="Course Illustration"
                width={350}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Course Summary */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Python Using AI Live Workshop</h3>
              <p className="text-sm text-gray-600">Date: 30 Jan, 2026 | 7:00 PM</p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-gray-700">Live Interactive AI-powered coding session</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-gray-700">Industry Expert-Led Class</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-gray-700">Limited Seats Available</span>
              </div>
            </div>

            {/* Limited Time Offer */}
            <div className="bg-linear-to-r from-primary-light to-accent-light p-4 rounded-lg mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary">⏰</span>
                <span className="font-semibold text-primary">Limited Time Offer</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-600 line-through">₹990</span>
                <span className="text-lg font-bold text-primary">₹990</span>
              </div>
              <div className="text-2xl font-bold text-primary">Today&apos;s Price: ₹99</div>
            </div>

            {/* Pricing Details */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-700">Total (Incl. Taxes):</span>
                <span className="font-semibold">₹99</span>
              </div>
              <p className="text-sm text-green-600">Save ₹891 Today!</p>
            </div>

            {/* Razorpay Info (right summary) */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-xs text-gray-600 mb-4 flex items-center gap-2">
                <span>🔒</span>
                <span>Payments secured by Razorpay</span>
              </p>
              
              <div className="space-y-3">
                <label className="flex items-center p-3 bg-white rounded-lg cursor-default">
                  <input
                    type="radio"
                    name="paymentMethodSummary"
                    checked={formData.paymentMethod === 'razorpay'}
                    readOnly
                    className="w-4 h-4"
                  />
                  <span className="ml-3 font-semibold text-gray-900">Razorpay</span>
                </label>
                <label className="flex items-center p-3 bg-white rounded-lg cursor-default">
                  <input
                    type="radio"
                    name="paymentMethodSummary"
                    checked={formData.paymentMethod === 'upi'}
                    readOnly
                    className="w-4 h-4"
                  />
                  <span className="ml-3 font-semibold text-gray-900">UPI</span>
                </label>
              </div>
            </div>

            {/* Proceed Button */}
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-4 transition">
              Proceed to Pay ₹99
              <span>{'>'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Security Footer */}
      <div className="bg-white mt-12 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-primary text-xl">🔒</span>
              <span className="font-semibold text-gray-700">SSL SECURE PAYMENT</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="text-center flex-1 min-w-fit">
              <div className="text-3xl mb-1">🛡️</div>
              <p className="text-xs text-gray-600">256-Bit Encryption</p>
              <p className="text-xs font-semibold text-gray-700">Most Secure Standard</p>
            </div>
            <div className="text-center flex-1 min-w-fit">
              <div className="text-3xl mb-1">✅</div>
              <p className="text-sm font-semibold text-gray-700">100% SAFE</p>
              <p className="text-xs text-gray-600">& SECURE</p>
            </div>
            <div className="text-center flex-1 min-w-fit">
              <div className="text-3xl mb-1">✓</div>
              <p className="text-sm font-semibold text-gray-700">100%</p>
              <p className="text-xs text-gray-600">SECURE</p>
            </div>
            <div className="text-center flex-1 min-w-fit">
              <div className="text-3xl mb-1">🔐</div>
              <p className="text-sm font-semibold text-gray-700">SSL</p>
              <p className="text-xs text-gray-600">Verified</p>
            </div>
            <div className="text-center flex-1 min-w-fit">
              <div className="text-2xl font-bold text-primary">Razorpay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}