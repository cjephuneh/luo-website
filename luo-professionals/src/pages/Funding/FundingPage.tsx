import { DollarSign, TrendingUp, Heart, Target, Award, ArrowUpRight, CreditCard, Building2, Users2, Sparkles, CheckCircle, Wallet, Smartphone, PiggyBank, Shield, Star, Verified, Globe } from 'lucide-react'
import { useState } from 'react'

const FundingPage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'donate' | 'invest'>('donate')

  const [donationFrequency, setDonationFrequency] = useState<'one-time' | 'monthly'>('one-time')

  const stats = [
    { 
      icon: DollarSign, 
      label: 'Total Funds Raised', 
      value: 'KES 45M', 
      change: '+23%',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Since inception'
    },
    { 
      icon: TrendingUp, 
      label: 'Active Investments', 
      value: 'KES 120M', 
      change: '+45%',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Portfolio value'
    },
    { 
      icon: Users2, 
      label: 'Total Contributors', 
      value: '1,234', 
      change: '+156',
      gradient: 'from-purple-500 to-pink-500',
      description: 'This quarter'
    },
    { 
      icon: Target, 
      label: 'Projects Funded', 
      value: '47', 
      change: '+12',
      gradient: 'from-orange-500 to-red-500',
      description: 'Active projects'
    },
  ]

  const donationAmounts = [500, 1000, 2500, 5000, 10000]

  const projects = [
    {
      title: 'Rural Healthcare Mobile Clinics',
      category: 'Healthcare',
      raised: 2500000,
      goal: 5000000,
      backers: 234,
      daysLeft: 15,
      image: '🏥',
      gradient: 'from-red-500 to-pink-500',
      featured: true,
      impact: '1,200 patients served'
    },
    {
      title: 'Digital Learning Centers',
      category: 'Education',
      raised: 3200000,
      goal: 4000000,
      backers: 189,
      daysLeft: 22,
      image: '📚',
      gradient: 'from-blue-500 to-cyan-500',
      featured: false,
      impact: '850 students enrolled'
    },
    {
      title: 'Youth Entrepreneurship Fund',
      category: 'Business',
      raised: 4500000,
      goal: 6000000,
      backers: 312,
      daysLeft: 30,
      image: '💼',
      gradient: 'from-green-500 to-emerald-500',
      featured: true,
      impact: '120 businesses launched'
    },
    {
      title: 'Clean Water Initiative',
      category: 'Infrastructure',
      raised: 1800000,
      goal: 3000000,
      backers: 156,
      daysLeft: 45,
      image: '💧',
      gradient: 'from-blue-400 to-cyan-400',
      featured: false,
      impact: '2,500 people with access to clean water'
    }
  ]

  const impactMetrics = [
    { icon: Heart, value: '15,000+', label: 'Lives Impacted' },
    { icon: Award, value: '89%', label: 'Project Success Rate' },
    { icon: Building2, value: '23', label: 'Partner Organizations' },
  ]

  const investmentOpportunities = [
    { name: 'Agri-Tech Innovation Fund', return: '12-15%', term: '24 months', min: '500K', risk: 'Medium', category: 'Agriculture' },
    { name: 'Renewable Energy Projects', return: '10-12%', term: '36 months', min: '1M', risk: 'Low', category: 'Energy' },
    { name: 'SME Growth Fund', return: '14-18%', term: '18 months', min: '250K', risk: 'High', category: 'Business' },
    { name: 'Real Estate Development', return: '8-11%', term: '36 months', min: '2M', risk: 'Low', category: 'Property' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Header */}
        <div className="mb-12 animate-fade-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 shadow-2xl animate-pulse-glow">
              <DollarSign className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold gradient-text mb-6">Funding & Investment Hub</h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Empowering community development through strategic funding and sustainable investments
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden animate-slide-up bg-white shadow-lg border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500`}></div>
              <div className="relative p-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white mb-4 shadow-lg group-hover:rotate-6 transition-transform`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2 text-gray-800">{stat.value}</div>
                <div className="text-gray-600 font-semibold mb-3">{stat.label}</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{stat.description}</span>
                  <span className="text-sm font-bold text-green-600 flex items-center gap-2">
                    <ArrowUpRight className="w-4 h-4" />
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Metrics Banner */}
        <div className="card bg-gradient-to-r from-primary-500 to-primary-600 text-white mb-12 animate-fade-in shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 p-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-lg opacity-90">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content - Donation/Investment Forms */}
          <div className="lg:col-span-2 space-y-10">
            {/* Tabs */}
            <div className="flex gap-3 animate-slide-up">
              <button
                onClick={() => setActiveTab('donate')}
                className={`flex-1 px-8 py-5 rounded-2xl font-bold text-xl transition-all ${
                  activeTab === 'donate'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  <Heart className="w-6 h-6" />
                  Make a Donation
                </div>
              </button>
              <button
                onClick={() => setActiveTab('invest')}
                className={`flex-1 px-8 py-5 rounded-2xl font-bold text-xl transition-all ${
                  activeTab === 'invest'
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-xl'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  <TrendingUp className="w-6 h-6" />
                  Investment Opportunities
                </div>
              </button>
            </div>

            {/* Donation Form */}
            {activeTab === 'donate' && (
              <div className="card animate-fade-in bg-white shadow-lg border border-gray-100">
                <div className="mb-8 p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-7 h-7 text-accent-500" />
                    <h2 className="text-3xl font-bold text-gray-800">Support Our Mission</h2>
                  </div>
                  <p className="text-gray-600 text-lg">Your contribution directly impacts community development projects</p>
                </div>

                {/* Donation Frequency */}
                <div className="mb-8 px-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">Donation Frequency</label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setDonationFrequency('one-time')}
                      className={`px-6 py-3 rounded-xl font-bold transition-all ${
                        donationFrequency === 'one-time'
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      onClick={() => setDonationFrequency('monthly')}
                      className={`px-6 py-3 rounded-xl font-bold transition-all ${
                        donationFrequency === 'monthly'
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Quick Amount Selection */}
                <div className="mb-8 px-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">Select Amount (KES)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-4 rounded-xl font-bold transition-all ${
                          selectedAmount === amount
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105'
                            : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200'
                        }`}
                      >
                        {amount.toLocaleString()}
                      </button>
                    ))}
                    <button
                      onClick={() => setSelectedAmount(null)}
                      className={`py-4 rounded-xl font-bold transition-all ${
                        selectedAmount === null
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105'
                          : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200'
                      }`}
                    >
                      Custom
                    </button>
                  </div>
                </div>

                {/* Custom Amount Input */}
                <div className="mb-8 px-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Custom Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">KES</span>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="w-full pl-16 pr-4 py-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/30 focus:border-green-500 transition-all outline-none text-xl font-semibold"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-8 px-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">Payment Method</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: 'M-Pesa', icon: <Smartphone className="w-8 h-8" />, popular: true },
                      { name: 'Credit/Debit Card', icon: <CreditCard className="w-8 h-8" />, popular: true },
                      { name: 'Bank Transfer', icon: <Building2 className="w-8 h-8" />, popular: false },
                      { name: 'PayPal', icon: <Globe className="w-8 h-8" />, popular: false },
                      { name: 'Mobile Money', icon: <Wallet className="w-8 h-8" />, popular: true },
                      { name: 'Bank Deposit', icon: <PiggyBank className="w-8 h-8" />, popular: false }
                    ].map((method, index) => (
                      <button
                        key={index}
                        className="flex flex-col items-center justify-center p-5 border-2 border-gray-200 rounded-xl hover:border-green-500 transition-all group bg-white shadow-sm hover:shadow-md"
                      >
                        <div className="mb-3 text-gray-700 group-hover:text-green-600">
                          {method.icon}
                        </div>
                        <span className="font-semibold text-gray-700 group-hover:text-green-600 mb-2">{method.name}</span>
                        {method.popular && (
                          <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="px-6 pb-6">
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-5 px-6 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 text-xl">
                    <Heart className="w-6 h-6" />
                    <span>Complete Donation</span>
                  </button>
                </div>
              </div>
            )}

            {/* Investment Opportunities */}
            {activeTab === 'invest' && (
              <div className="space-y-8 animate-fade-in">
                <div className="card bg-white shadow-lg border border-gray-100">
                  <div className="p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">Investment Portfolio</h2>
                    <p className="text-gray-600 mb-6 text-lg">Strategic investment opportunities with measurable community impact</p>
                    
                    <div className="space-y-6">
                      {investmentOpportunities.map((investment, index) => (
                        <div key={index} className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary-500 transition-all group cursor-pointer bg-gray-50/50">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div>
                              <h3 className="font-bold text-xl text-gray-800 group-hover:text-primary-600 mb-1">{investment.name}</h3>
                              <div className="flex items-center gap-3 mt-2">
                                <span className="text-sm font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
                                  {investment.category}
                                </span>
                                <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                                  investment.risk === 'Low' ? 'text-green-700 bg-green-100' :
                                  investment.risk === 'Medium' ? 'text-yellow-700 bg-yellow-100' :
                                  'text-red-700 bg-red-100'
                                }`}>
                                  {investment.risk} Risk
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-green-600">{investment.return} ROI</div>
                              <div className="text-sm text-gray-600">Expected return</div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                            <div>
                              <span className="text-gray-500">Term:</span> <span className="font-semibold">{investment.term}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Min Investment:</span> <span className="font-semibold">KES {investment.min}</span>
                            </div>
                          </div>
                          <button className="mt-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg">
                            Learn More
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Active Projects */}
          <div className="space-y-8">
            <div className="card animate-fade-in bg-white shadow-lg border border-gray-100" style={{ animationDelay: '0.2s' }}>
              <div className="p-6 pb-4">
                <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
                  <Target className="w-7 h-7 text-primary-500" />
                  Active Campaigns
                </h3>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-100 hover:border-primary-300 transition-all group cursor-pointer shadow-sm">
                      {project.featured && (
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-block text-xs font-bold text-accent-600 bg-accent-100 px-3 py-1 rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                          <span className="inline-block text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full flex items-center gap-1">
                            <Verified className="w-3 h-3" />
                            Verified
                          </span>
                        </div>
                      )}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-3xl flex-shrink-0`}>
                          {project.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-lg text-gray-800 group-hover:text-primary-600 transition-colors mb-1 line-clamp-2">
                            {project.title}
                          </h4>
                          <span className="text-sm text-gray-500">{project.category}</span>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span className="font-semibold">KES {(project.raised / 1000000).toFixed(1)}M</span>
                          <span>Goal: KES {(project.goal / 1000000).toFixed(1)}M</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${project.gradient} transition-all duration-500`}
                            style={{ width: `${(project.raised / project.goal) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600 mb-3">
                        <span>{project.backers} backers</span>
                        <span>{project.daysLeft} days left</span>
                      </div>

                      <div className="text-sm text-gray-600 flex items-center gap-2 mb-4">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>{project.impact}</span>
                      </div>

                      <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg">
                        Donate Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tax Benefits */}
            <div className="card bg-gradient-to-br from-accent-50 to-yellow-50 border-2 border-accent-200 animate-fade-in shadow-lg" style={{ animationDelay: '0.3s' }}>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Tax Benefits</h3>
                    <p className="text-gray-600">All donations are tax-deductible under KRA guidelines</p>
                  </div>
                </div>
                <button className="w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-4 rounded-xl border-2 border-accent-300 transition-all text-base">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Security Guarantee */}
            <div className="card bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 animate-fade-in shadow-lg" style={{ animationDelay: '0.4s' }}>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Secure & Trusted</h3>
                    <p className="text-gray-600">Your transactions are protected with bank-level security</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-white rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-gray-800">256-bit</div>
                    <div className="text-xs text-gray-600">Encryption</div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-gray-800">PCI DSS</div>
                    <div className="text-xs text-gray-600">Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FundingPage
