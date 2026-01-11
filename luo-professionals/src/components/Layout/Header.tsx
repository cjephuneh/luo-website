import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { logout } from '@/store/slices/authSlice'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { isAuthenticated, user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    dispatch(logout())
    setShowUserMenu(false)
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary-600/95 backdrop-blur-md shadow-2xl' : 'bg-primary-600'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2 group">
            <span className="text-accent-500 group-hover:scale-110 transition-transform duration-300">LPA</span>
            <span className="hidden md:inline text-white group-hover:text-accent-500 transition-colors">
              Luo Professionals Association
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`relative hover:text-accent-500 transition-colors ${
              isActive('/') ? 'text-accent-500' : 'text-white'
            }`}>
              Home
              {isActive('/') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-500" />}
            </Link>
            <Link to="/events" className={`relative hover:text-accent-500 transition-colors ${
              isActive('/events') ? 'text-accent-500' : 'text-white'
            }`}>
              Events
              {isActive('/events') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-500" />}
            </Link>
            <Link to="/funding" className={`relative hover:text-accent-500 transition-colors ${
              isActive('/funding') ? 'text-accent-500' : 'text-white'
            }`}>
              Funding
              {isActive('/funding') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-500" />}
            </Link>
            <Link to="/reports" className={`relative hover:text-accent-500 transition-colors ${
              isActive('/reports') ? 'text-accent-500' : 'text-white'
            }`}>
              Reports
              {isActive('/reports') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-500" />}
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className={`relative hover:text-accent-500 transition-colors ${
                  isActive('/dashboard') ? 'text-accent-500' : 'text-white'
                }`}>
                  Dashboard
                </Link>
                <Link to="/forums" className={`relative hover:text-accent-500 transition-colors ${
                  isActive('/forums') ? 'text-accent-500' : 'text-white'
                }`}>
                  Forums
                </Link>
                <Link to="/policy-hub" className={`relative hover:text-accent-500 transition-colors ${
                  isActive('/policy-hub') ? 'text-accent-500' : 'text-white'
                }`}>
                  Policy Hub
                </Link>
                <div className="relative">
                  <button 
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 hover:text-accent-500 transition-colors text-white"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center">
                      <User className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{user?.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 animate-fade-in">
                      <button 
                        onClick={handleLogout} 
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-accent-500 transition-colors">
                  Login
                </Link>
                <Link to="/register" className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-accent-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-2 animate-fade-in">
            <Link to="/" className="block py-2 hover:text-accent-500">Home</Link>
            <Link to="/events" className="block py-2 hover:text-accent-500">Events</Link>
            <Link to="/funding" className="block py-2 hover:text-accent-500">Funding</Link>
            <Link to="/reports" className="block py-2 hover:text-accent-500">Reports</Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="block py-2 hover:text-accent-500">Dashboard</Link>
                <Link to="/forums" className="block py-2 hover:text-accent-500">Forums</Link>
                <Link to="/policy-hub" className="block py-2 hover:text-accent-500">Policy Hub</Link>
                <button onClick={handleLogout} className="block w-full text-left py-2 hover:text-accent-500">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block py-2 hover:text-accent-500">Login</Link>
                <Link to="/register" className="block py-2 hover:text-accent-500">Register</Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
