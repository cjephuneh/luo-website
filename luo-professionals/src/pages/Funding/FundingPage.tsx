import { DollarSign, TrendingUp, Heart, Target, Award, ArrowUpRight, CreditCard, Building2, Users2, Sparkles, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const FundingPage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'donate' | 'invest'>('donate')

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
      featured: true
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
      featured: false
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
      featured: true
    }
  ]

  const impactMetrics = [
    { icon: Heart, value: '15,000+', label: 'Lives Impacted' },
    { icon: Award, value: '89%', label: 'Project Success Rate' },
    { icon: Building2, value: '23', label: 'Partner Organizations' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Header */}
        <div className="mb-8 animate-fade-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-4 shadow-xl animate-pulse-glow">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Funding & Investment Hub</h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Empowering community development through strategic funding and sustainable investments
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${stat.gradient} opacity-5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500`}></div>
              <div className="relative">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} text-white mb-3 shadow-lg group-hover:rotate-6 transition-transform`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-1 text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium mb-2">{stat.label}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{stat.description}</span>
                  <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Metrics Banner */}
        <div className="card bg-gradient-to-r from-primary-500 to-primary-600 text-white mb-12 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <div className="text-3xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm opacity-90">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Donation/Investment Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="flex gap-2 animate-slide-up">
              <button
                onClick={() => setActiveTab('donate')}
                className={`flex-1 px-6 py-4 rounded-xl font-bold text-lg transition-all ${
                  activeTab === 'donate'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                <Heart className="w-5 h-5 inline mr-2" />
                Make a Donation
              </button>
              <button
                onClick={() => setActiveTab('invest')}
                className={`flex-1 px-6 py-4 rounded-xl font-bold text-lg transition-all ${
                  activeTab === 'invest'
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-xl'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                <TrendingUp className="w-5 h-5 inline mr-2" />
                Investment Opportunities
              </button>
            </div>

            {/* Donation Form */}
            {activeTab === 'donate' && (
              <div className="card animate-fade-in">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-accent-500" />
                    <h2 className="text-2xl font-bold text-gray-800">Support Our Mission</h2>
                  </div>
                  <p className="text-gray-600">Your contribution directly impacts community development projects</p>
                </div>

                {/* Quick Amount Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Select Amount (KES)</label>
                  <div className="grid grid-cols-3 gap-3">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-3 px-4 rounded-xl font-bold transition-all ${
                          selectedAmount === amount
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        {amount.toLocaleString()}
                      </button>
                    ))}
                    <button
                      onClick={() => setSelectedAmount(null)}
                      className={`py-3 px-4 rounded-xl font-bold transition-all ${
                        selectedAmount === null
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      Custom
                    </button>
                  </div>
                </div>

                {/* Custom Amount Input */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Custom Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">KES</span>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none text-lg font-semibold"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Payment Method</label>
                  <div className="space-y-3">
                    {[
                      { name: 'M-Pesa', icon: '📱', popular: true },
                      { name: 'Credit/Debit Card', icon: '💳', popular: false },
                      { name: 'Bank Transfer', icon: '🏦', popular: false }
                    ].map((method) => (
                      <button
                        key={method.name}
                        className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-green-500 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{method.icon}</span>
                          <span className="font-semibold text-gray-700 group-hover:text-green-600">{method.name}</span>
                        </div>
                        {method.popular && (
                          <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                            Most Popular
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  <Heart className="w-6 h-6" />
                  Complete Donation
                </button>
              </div>
            )}

            {/* Investment Opportunities */}
            {activeTab === 'invest' && (
              <div className="space-y-6 animate-fade-in">
                <div className="card">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Investment Portfolio</h2>
                  <p className="text-gray-600 mb-6">Strategic investment opportunities with measurable community impact</p>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'Agri-Tech Innovation Fund', return: '12-15%', term: '24 months', min: '500K' },
                      { name: 'Renewable Energy Projects', return: '10-12%', term: '36 months', min: '1M' },
                      { name: 'SME Growth Fund', return: '14-18%', term: '18 months', min: '250K' }
                    ].map((investment, index) => (
                      <div key={index} className="p-4 border-2 border-gray-200 rounded-xl hover:border-primary-500 transition-all group cursor-pointer">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary-600">{investment.name}</h3>
                          <span className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                            {investment.return} ROI
                          </span>
                        </div>
                        <div className="flex gap-6 text-sm text-gray-600">
                          <div>
                            <span className="text-gray-500">Term:</span> <span className="font-semibold">{investment.term}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Min Investment:</span> <span className="font-semibold">KES {investment.min}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Active Projects */}
          <div className="space-y-6">
            <div className="card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary-500" />
                Active Campaigns
              </h3>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-100 hover:border-primary-300 transition-all group cursor-pointer">
                    {project.featured && (
                      <span className="inline-block text-xs font-bold text-accent-600 bg-accent-100 px-2 py-1 rounded-full mb-2">
                        Featured
                      </span>
                    )}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}>
                        {project.image}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-1 line-clamp-2">
                          {project.title}
                        </h4>
                        <span className="text-xs text-gray-500">{project.category}</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span className="font-semibold">KES {(project.raised / 1000000).toFixed(1)}M</span>
                        <span>Goal: KES {(project.goal / 1000000).toFixed(1)}M</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${project.gradient} transition-all duration-500`}
                          style={{ width: `${(project.raised / project.goal) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-600">
                      <span>{project.backers} backers</span>
                      <span>{project.daysLeft} days left</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tax Benefits */}
            <div className="card bg-gradient-to-br from-accent-50 to-yellow-50 border-2 border-accent-200 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Tax Benefits</h3>
                  <p className="text-sm text-gray-600">All donations are tax-deductible under KRA guidelines</p>
                </div>
              </div>
              <button className="w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-2 px-4 rounded-lg border-2 border-accent-300 transition-all text-sm">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FundingPage
