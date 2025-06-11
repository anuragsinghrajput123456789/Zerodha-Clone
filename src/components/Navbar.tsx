import  { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Zerodha" />
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/pricing" className="nav-link">Pricing</Link>
              <Link to="/support" className="nav-link">Support</Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link to="/signup" className="bg-[#387ED1] text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">
              Sign up
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/about" className="mobile-nav-link">About</Link>
            <Link to="/products" className="mobile-nav-link">Products</Link>
            <Link to="/pricing" className="mobile-nav-link">Pricing</Link>
            <Link to="/support" className="mobile-nav-link">Support</Link>
            <Link to="/login" className="mobile-nav-link">Login</Link>
            <Link to="/signup" className="mobile-nav-link bg-[#387ED1] text-white">Sign up</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar