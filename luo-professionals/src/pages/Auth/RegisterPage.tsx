import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserPlus, Check, Users } from 'lucide-react'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    profession: '',
    sector: '',
    county: '',
    idNumber: ''
  })

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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 py-12 px-4 pt-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNkNGFmMzciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTQwIDQwaDQwdjQwSDQwVjQweiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl mb-4 shadow-xl animate-pulse-glow">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-2">Join LPA</h2>
          <p className="text-gray-600 text-lg">Become a member in 3 easy steps</p>
        </div>

        {/* Enhanced Progress Steps */}
        <div className="flex justify-between mb-12 animate-slide-up">
          {steps.map((s, idx) => (
            <div key={s.num} className="flex-1 flex items-center">
              <div className="flex flex-col items-center flex-1">
                <div className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  step >= s.num 
                    ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-xl scale-110' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > s.num ? <Check className="w-6 h-6" /> : s.num}
                  {step === s.num && (
                    <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-75"></div>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <div className={`text-xs font-bold ${step >= s.num ? 'text-primary-600' : 'text-gray-500'}`}>
                    {s.title}
                  </div>
                  <div className="text-xs text-gray-400">{s.desc}</div>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                  step > s.num ? 'bg-gradient-to-r from-primary-500 to-accent-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="card glass-effect animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">Personal Information</h3>
                  <p className="text-gray-600 mt-1">Tell us about yourself</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
                    { label: 'Email', name: 'email', type: 'email', placeholder: 'john@example.com' },
                    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+254 700 000 000' },
                    { label: 'ID Number', name: 'idNumber', type: 'text', placeholder: '12345678' }
                  ].map((field) => (
                    <div key={field.name} className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">Professional Details</h3>
                  <p className="text-gray-600 mt-1">Share your expertise</p>
                </div>
                <div className="space-y-4">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Profession</label>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Software Engineer"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Sector</label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none bg-white"
                    >
                      <option value="">Select your sector</option>
                      <option value="Healthcare">🏥 Healthcare</option>
                      <option value="Education">📚 Education</option>
                      <option value="Business & Finance">💼 Business & Finance</option>
                      <option value="Technology">💻 Technology</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">County</label>
                    <input
                      type="text"
                      name="county"
                      value={formData.county}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Nairobi"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">Secure Your Account</h3>
                  <p className="text-gray-600 mt-1">Create a strong password</p>
                </div>
                <div className="space-y-4">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder="Min. 8 characters"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      required
                      placeholder="Re-enter password"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                    />
                  </div>
                  <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mt-4">
                    <p className="text-sm text-primary-700">
                      <strong>Password requirements:</strong> At least 8 characters, include uppercase, lowercase, and numbers
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 py-3 px-6 border-2 border-gray-300 rounded-xl hover:bg-gray-50 font-semibold transition-all"
                >
                  Previous
                </button>
              )}
              <button 
                type="submit" 
                className={`${step === 1 ? 'w-full' : 'flex-1'} bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2`}
              >
                {step === 3 ? (
                  <>
                    <UserPlus className="w-5 h-5" />
                    Complete Registration
                  </>
                ) : (
                  <>Next Step →</>
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-600 hover:text-primary-700 font-bold transition-colors">
                Sign in here →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
