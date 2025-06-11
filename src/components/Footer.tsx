import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img className="h-8" src="/logo.svg" alt="Zerodha" />
            <p className="mt-4 text-sm text-gray-600">
              Stock broking reimagined. Open a trading and Demat account online.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">About</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-gray-900">Products</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-gray-900">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-gray-600 hover:text-gray-900">Support Portal</Link>
              </li>
              <li>
                <Link to="/z-connect" className="text-sm text-gray-600 hover:text-gray-900">Z-Connect Blog</Link>
              </li>
              <li>
                <Link to="/downloads" className="text-sm text-gray-600 hover:text-gray-900">Downloads & Resources</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Account</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/open-account" className="text-sm text-gray-600 hover:text-gray-900">Open an Account</Link>
              </li>
              <li>
                <Link to="/fund-transfer" className="text-sm text-gray-600 hover:text-gray-900">Fund Transfer</Link>
              </li>
              <li>
                <Link to="/60-day-challenge" className="text-sm text-gray-600 hover:text-gray-900">60 Day Challenge</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600">&copy; 2024 Zerodha Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer