import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { Download, TrendingUp, Users, MapPin, Filter, Calendar, Eye, FileText, Activity } from 'lucide-react'
import { useState } from 'react'

const ReportsPage = () => {
  const [activeView, setActiveView] = useState<'overview' | 'detailed'>('overview')
  const [selectedPeriod, setSelectedPeriod] = useState('2024')

  const sectorData = [
    { name: 'Healthcare', members: 1200, color: '#ef4444' },
    { name: 'Education', members: 950, color: '#3b82f6' },
    { name: 'Business', members: 1500, color: '#10b981' },
    { name: 'Technology', members: 1584, color: '#8b5cf6' },
  ]

  const growthData = [
    { month: 'Jan', members: 3200, projects: 28 },
    { month: 'Feb', members: 3650, projects: 32 },
    { month: 'Mar', members: 4100, projects: 35 },
    { month: 'Apr', members: 4500, projects: 38 },
    { month: 'May', members: 4850, projects: 42 },
    { month: 'Jun', members: 5234, projects: 47 },
  ]

  const countyData = [
    { county: 'Nairobi', members: 1234, percentage: 24 },
    { county: 'Kisumu', members: 856, percentage: 16 },
    { county: 'Siaya', members: 645, percentage: 12 },
    { county: 'Homa Bay', members: 523, percentage: 10 },
    { county: 'Others', members: 1976, percentage: 38 },
  ]

  const stats = [
    { icon: Users, label: 'Total Members', value: '5,234', change: '+23%', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Activity, label: 'Active Engagements', value: '12.5K', change: '+45%', gradient: 'from-green-500 to-emerald-500' },
    { icon: MapPin, label: 'Counties Reached', value: '47', change: '+8', gradient: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, label: 'Growth Rate', value: '34%', change: '+12%', gradient: 'from-orange-500 to-red-500' },
  ]

  const reports = [
    {
      title: 'Q1 2024 Comprehensive Report',
      type: 'Quarterly',
      date: 'March 31, 2024',
      pages: 45,
      downloads: 234,
      category: 'Comprehensive',
      featured: true
    },
    {
      title: 'Annual Report 2023',
      type: 'Annual',
      date: 'December 31, 2023',
      pages: 89,
      downloads: 856,
      category: 'Annual Review',
      featured: true
    },
    {
      title: 'Sector Performance Analysis',
      type: 'Analysis',
      date: 'March 15, 2024',
      pages: 34,
      downloads: 145,
      category: 'Sectoral',
      featured: false
    },
    {
      title: 'Impact Assessment Report',
      type: 'Impact',
      date: 'February 28, 2024',
      pages: 56,
      downloads: 312,
      category: 'Impact Study',
      featured: false
    }
  ]

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold gradient-text">Analytics & Reports</h1>
              </div>
              <p className="text-gray-600 text-lg ml-17">Data-driven insights and comprehensive reporting</p>
            </div>
            <div className="flex gap-3">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-6 py-3 border-2 border-gray-200 rounded-xl font-semibold focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
              <button className="btn-secondary flex items-center gap-2 shadow-xl">
                <Filter className="w-5 h-5" />
                <span className="hidden sm:inline">Filters</span>
              </button>
              <button className="btn-primary flex items-center gap-2 shadow-xl">
                <Download className="w-5 h-5" />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} text-white mb-3 shadow-lg group-hover:rotate-6 transition-transform`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1 text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium mb-2">{stat.label}</div>
              <div className="text-xs font-bold text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 mb-8 animate-fade-in">
          <button
            onClick={() => setActiveView('overview')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeView === 'overview'
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            Overview Dashboard
          </button>
          <button
            onClick={() => setActiveView('detailed')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeView === 'detailed'
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            Detailed Reports
          </button>
        </div>

        {activeView === 'overview' ? (
          <>
            {/* Charts Grid */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* Member Growth Chart */}
              <div className="card animate-slide-up">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary-500" />
                  Membership & Projects Growth
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '2px solid #e5e7eb', 
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }} 
                    />
                    <Line type="monotone" dataKey="members" stroke="#0066cc" strokeWidth={3} dot={{ r: 5 }} />
                    <Line type="monotone" dataKey="projects" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Sector Distribution */}
              <div className="card animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-500" />
                  Members by Sector
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sectorData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '2px solid #e5e7eb', 
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }} 
                    />
                    <Bar dataKey="members" radius={[8, 8, 0, 0]}>
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* County Distribution */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-1 card animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  Geographic Distribution
                </h2>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={countyData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="members"
                    >
                      {countyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="lg:col-span-2 card animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-xl font-bold mb-6">County Breakdown</h2>
                <div className="space-y-4">
                  {countyData.map((county, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div 
                        className="w-4 h-4 rounded-full flex-shrink-0"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-gray-800">{county.county}</span>
                          <span className="text-sm text-gray-600">{county.members} members</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full transition-all duration-500"
                            style={{ 
                              width: `${county.percentage}%`,
                              backgroundColor: COLORS[index % COLORS.length]
                            }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-bold text-gray-700">{county.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Detailed Reports View */
          <div className="grid lg:grid-cols-2 gap-6 animate-fade-in">
            {reports.map((report, index) => (
              <div 
                key={index}
                className="card group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {report.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-accent-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Featured
                    </span>
                  </div>
                )}

                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/5 to-purple-500/5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full mb-2">
                        {report.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                        {report.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mb-4 text-sm text-gray-600 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{report.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FileText className="w-4 h-4" />
                      <span>{report.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-4 h-4" />
                      <span>{report.downloads}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-200 hover:border-primary-500 rounded-xl transition-all">
                      <Eye className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ReportsPage
