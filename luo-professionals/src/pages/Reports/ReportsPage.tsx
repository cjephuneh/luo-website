import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
import { Download, TrendingUp, Users, MapPin, Filter, Calendar, Eye, FileText, Activity, DownloadCloud, Share2, Target} from 'lucide-react'
import { useState } from 'react'

const ReportsPage = () => {
  const [activeView, setActiveView] = useState<'overview' | 'detailed'>('overview')
  const [selectedPeriod, setSelectedPeriod] = useState('2024')
  const [activeTab, setActiveTab] = useState('all')

  const sectorData = [
    { name: 'Healthcare', members: 1200, color: '#ef4444', projects: 24 },
    { name: 'Education', members: 950, color: '#3b82f6', projects: 18 },
    { name: 'Business', members: 1500, color: '#10b981', projects: 32 },
    { name: 'Technology', members: 1584, color: '#8b5cf6', projects: 28 },
    { name: 'Agriculture', members: 890, color: '#f59e0b', projects: 15 },
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
    { county: 'Nairobi', members: 1234, percentage: 24, color: '#3b82f6' },
    { county: 'Kisumu', members: 856, percentage: 16, color: '#10b981' },
    { county: 'Siaya', members: 645, percentage: 12, color: '#f59e0b' },
    { county: 'Homa Bay', members: 523, percentage: 10, color: '#ef4444' },
    { county: 'Kakamega', members: 456, percentage: 9, color: '#8b5cf6' },
    { county: 'Migori', members: 324, percentage: 6, color: '#ec4899' },
    { county: 'Mombasa', members: 298, percentage: 5, color: '#06b6d4' },
    { county: 'Others', members: 1976, percentage: 38, color: '#64748b' },
  ]

  const impactData = [
    { subject: 'Healthcare', impact: 85, fullMark: 100 },
    { subject: 'Education', impact: 78, fullMark: 100 },
    { subject: 'Economy', impact: 92, fullMark: 100 },
    { subject: 'Environment', impact: 70, fullMark: 100 },
    { subject: 'Technology', impact: 88, fullMark: 100 },
    { subject: 'Agriculture', impact: 75, fullMark: 100 },
  ]

  const stats = [
    { icon: Users, label: 'Total Members', value: '5,234', change: '+23%', gradient: 'from-blue-500 to-cyan-500', description: 'Active community members' },
    { icon: Activity, label: 'Active Engagements', value: '12.5K', change: '+45%', gradient: 'from-green-500 to-emerald-500', description: 'This quarter' },
    { icon: MapPin, label: 'Counties Reached', value: '47', change: '+8', gradient: 'from-purple-500 to-pink-500', description: 'Across Kenya' },
    { icon: TrendingUp, label: 'Growth Rate', value: '34%', change: '+12%', gradient: 'from-orange-500 to-red-500', description: 'Year over year' },
  ]

  const reports = [
    {
      id: 1,
      title: 'Q1 2024 Comprehensive Report',
      type: 'Quarterly',
      date: 'March 31, 2024',
      pages: 45,
      downloads: 234,
      category: 'Comprehensive',
      featured: true,
      size: '2.4 MB',
      description: 'Complete overview of Q1 activities, achievements, and impact metrics',
      tags: ['Quarterly', 'Comprehensive', 'Impact']
    },
    {
      title: 'Annual Report 2023',
      type: 'Annual',
      date: 'December 31, 2023',
      pages: 89,
      downloads: 856,
      category: 'Annual Review',
      featured: true,
      size: '5.1 MB',
      description: 'Full year review including financials, achievements, and future plans',
      tags: ['Annual', 'Financial', 'Review']
    },
    {
      title: 'Sector Performance Analysis',
      type: 'Analysis',
      date: 'March 15, 2024',
      pages: 34,
      downloads: 145,
      category: 'Sectoral',
      featured: false,
      size: '1.8 MB',
      description: 'Detailed analysis of performance across different professional sectors',
      tags: ['Analysis', 'Sectoral', 'Performance']
    },
    {
      title: 'Impact Assessment Report',
      type: 'Impact',
      date: 'February 28, 2024',
      pages: 56,
      downloads: 312,
      category: 'Impact Study',
      featured: false,
      size: '3.2 MB',
      description: 'Comprehensive impact assessment of community development initiatives',
      tags: ['Impact', 'Assessment', 'Community']
    },
    {
      title: 'Technology Innovation Metrics',
      type: 'Technical',
      date: 'April 10, 2024',
      pages: 42,
      downloads: 98,
      category: 'Technology',
      featured: false,
      size: '2.1 MB',
      description: 'Analysis of technology adoption and innovation within the community',
      tags: ['Technology', 'Innovation', 'Digital']
    },
    {
      title: 'Funding and Investment Report',
      type: 'Financial',
      date: 'April 5, 2024',
      pages: 38,
      downloads: 167,
      category: 'Finance',
      featured: false,
      size: '2.7 MB',
      description: 'Overview of funding activities and investment opportunities',
      tags: ['Finance', 'Funding', 'Investment']
    }
  ]



  const tabs = [
    { id: 'all', label: 'All Reports', count: 24 },
    { id: 'featured', label: 'Featured', count: 4 },
    { id: 'recent', label: 'Recent', count: 8 },
    { id: 'popular', label: 'Popular', count: 6 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-3">Analytics & Reports</h1>
                  <p className="text-gray-600 text-lg">Data-driven insights and comprehensive reporting</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-6 py-3 border-2 border-gray-200 rounded-xl font-semibold focus:ring-4 focus:ring-primary-500/30 focus:border-primary-500 outline-none bg-white shadow-sm"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
              <button className="btn-secondary flex items-center gap-2 shadow-xl px-6 py-3">
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
              <button className="btn-primary flex items-center gap-2 shadow-xl px-6 py-3">
                <Download className="w-5 h-5" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card group hover:scale-105 transition-all duration-300 animate-slide-up bg-white shadow-lg border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white mb-4 shadow-lg group-hover:rotate-6 transition-transform`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2 text-gray-800">{stat.value}</div>
              <div className="text-gray-600 font-semibold mb-2">{stat.label}</div>
              <div className="text-sm font-bold text-green-600 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>{stat.change}</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex gap-3 mb-10 animate-fade-in">
          <button
            onClick={() => setActiveView('overview')}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
              activeView === 'overview'
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-xl'
                : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            Overview Dashboard
          </button>
          <button
            onClick={() => setActiveView('detailed')}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
              activeView === 'detailed'
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-xl'
                : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            Detailed Reports
          </button>
        </div>

        {activeView === 'overview' ? (
          <>
            {/* Charts Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              {/* Member Growth Chart */}
              <div className="card animate-slide-up bg-white shadow-lg border border-gray-100 p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                  <TrendingUp className="w-6 h-6 text-primary-500" />
                  Membership & Projects Growth
                </h2>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={growthData}>
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
                    <Area type="monotone" dataKey="members" stackId="1" stroke="#0066cc" fill="#0066cc" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="projects" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Sector Distribution */}
              <div className="card animate-slide-up bg-white shadow-lg border border-gray-100 p-6" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                  <Users className="w-6 h-6 text-primary-500" />
                  Members by Sector
                </h2>
                <ResponsiveContainer width="100%" height={350}>
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

            {/* Impact and Geographic Distribution */}
            <div className="grid lg:grid-cols-3 gap-8 mb-10">
              <div className="lg:col-span-1 card animate-slide-up bg-white shadow-lg border border-gray-100 p-6" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                  <Target className="w-6 h-6 text-primary-500" />
                  Impact Assessment
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={impactData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Impact" dataKey="impact" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <div className="card animate-slide-up bg-white shadow-lg border border-gray-100 p-6" style={{ animationDelay: '0.3s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Geographic Distribution</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                    
                    <div className="space-y-4">
                      {countyData.map((county, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div 
                            className="w-4 h-4 rounded-full flex-shrink-0"
                            style={{ backgroundColor: county.color }}
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold text-gray-800">{county.county}</span>
                              <span className="text-sm text-gray-600">{county.members} members</span>
                            </div>
                            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full transition-all duration-500"
                                style={{ 
                                  width: `${county.percentage}%`,
                                  backgroundColor: county.color
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
              </div>
            </div>
          </>
        ) : (
          /* Detailed Reports View */
          <div className="space-y-8">
            {/* Tabs */}
            <div className="flex gap-3 flex-wrap animate-fade-in">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  {tab.label} <span className="ml-2">({tab.count})</span>
                </button>
              ))}
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {reports.map((report, index) => (
                <div 
                  key={report.id || index}
                  className="card group hover:scale-[1.03] transition-all duration-300 relative overflow-hidden animate-slide-up bg-white shadow-lg border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {report.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-accent-500 to-yellow-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                        <StarIcon />
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/5 to-purple-500/5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative p-6">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                        <FileText className="w-8 h-8 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <span className="text-xs font-bold text-primary-600 bg-primary-100 px-3 py-1.5 rounded-full">
                            {report.category}
                          </span>
                          <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                            {report.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-2 leading-tight">
                          {report.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">{report.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {report.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mb-5 text-sm text-gray-600 pb-5 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{report.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>{report.pages} pages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span>{report.downloads}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <DownloadCloud className="w-4 h-4" />
                        <span>{report.size}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Share2 className="w-5 h-5 text-gray-600 hover:text-primary-500" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Eye className="w-5 h-5 text-gray-600 hover:text-primary-500" />
                        </button>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg">
                          <Download className="w-4 h-4" />
                          <span className="hidden sm:inline">PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <button className="btn-primary px-8 py-4 text-lg shadow-xl">
                Load More Reports
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Define StarIcon as it's used in the component
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default ReportsPage
