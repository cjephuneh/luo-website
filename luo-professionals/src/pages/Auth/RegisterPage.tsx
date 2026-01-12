import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserPlus, Check, Users, Eye, EyeOff } from 'lucide-react'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    profession: '',
    sector: '',
    county: '',
    idNumber: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      navigate('/login')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const steps = [
    { num: 1, title: 'Personal Info', desc: 'Your basic details' },
    { num: 2, title: 'Professional', desc: 'Your expertise' },
    { num: 3, title: 'Security', desc: 'Set password' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 py-12 px-4 pt-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNkNGFmMzciIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTQwIDQwaDQwdjQwSDQwVjQweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl mb-6 shadow-2xl animate-pulse-glow">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Join LPA</h1>
          <p className="text-gray-600 text-lg">Become a member in 3 easy steps</p>
        </div>

        {/* Enhanced Progress Steps */}
        <div className="flex justify-between mb-12 animate-slide-up">
          {steps.map((s, idx) => (
            <div key={s.num} className="flex-1 flex items-center">
              <div className="flex flex-col items-center flex-1">
                <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                  step >= s.num 
                    ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-xl scale-110' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > s.num ? <Check className="w-8 h-8" /> : <span className="text-xl font-bold">{s.num}</span>}
                  {step === s.num && (
                    <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-75"></div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <div className={`text-sm font-bold ${step >= s.num ? 'text-primary-600' : 'text-gray-500'}`}>
                    {s.title}
                  </div>
                  <div className="text-xs text-gray-400">{s.desc}</div>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-4 transition-all duration-300 ${
                  step > s.num ? 'bg-gradient-to-r from-primary-500 to-accent-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="card glass-effect bg-white/80 backdrop-blur-sm animate-slide-up shadow-2xl border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-8 p-8">
            {step === 1 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Personal Information</h2>
                  <p className="text-gray-600">Tell us about yourself</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe', required: true },
                    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john@example.com', required: true },
                    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+254 700 000 000', required: true },
                    { label: 'National ID Number', name: 'idNumber', type: 'text', placeholder: '12345678', required: true }
                  ].map((field) => (
                    <div key={field.name} className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/30 focus:border-primary-500 transition-all outline-none text-base"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Professional Details</h2>
                  <p className="text-gray-600">Share your expertise</p>
                </div>
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Profession</label>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Software Engineer"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/30 focus:border-primary-500 transition-all outline-none text-base"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Sector</label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/30 focus:border-primary-500 transition-all outline-none bg-white text-base"
                    >
                      <option value="">Select your sector</option>
                      <option value="Healthcare">🏥 Healthcare</option>
                      <option value="Education">📚 Education</option>
                      <option value="Business & Finance">💼 Business & Finance</option>
                      <option value="Technology">💻 Technology</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">County</label>
                    <input
                      type="text"
                      name="county"
                      value={formData.county}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Nairobi"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/30 focus:border-primary-500 transition-all outline-none text-base"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Secure Your Account</h2>
                  <p className="text-gray-600">Create a strong password</p>
                </div>
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="At least 8 characters"
                        className="pr-12 w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/30 focus:border-primary-500 transition-all outline-none text-base"
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-500 transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Confirm Password</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder="Re-enter your password"
                        className="pr-12 w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/30 focus:border-primary-500 transition-all outline-none text-base"
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-500 transition-colors"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-xl p-6 mt-4">
                    <h4 className="font-bold text-primary-700 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm">!</span>
                      Password Requirements
                    </h4>
                    <ul className="text-sm text-primary-700 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                        Minimum 8 characters
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                        Include uppercase and lowercase letters
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                        Include at least one number
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="sm:flex-1 py-4 px-6 border-2 border-gray-300 rounded-xl hover:bg-gray-50 font-semibold transition-all text-lg"
                >
                  ← Previous
                </button>
              )}
              <button 
                type="submit" 
                className={`${step === 1 ? 'w-full' : 'sm:flex-1'} bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 text-lg`}
              >
                {step === 3 ? (
                  <>
                    <UserPlus className="w-6 h-6" />
                    <span>Complete Registration</span>
                  </>
                ) : (
                  <>
                    <span>Next Step →</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="px-8 py-6 bg-gray-50/50 rounded-b-xl border-t border-gray-100 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-600 hover:text-primary-700 font-bold transition-colors ml-1">
                Sign in here →
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            By registering, you agree to our {' '}
            <Link to="/terms" className="text-primary-600 hover:text-primary-700 font-medium">
              Terms of Service
            </Link>{' '}
            and {' '}
            <Link to="/privacy" className="text-primary-600 hover:text-primary-700 font-medium">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
