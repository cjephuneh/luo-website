import { FileText, Download, Upload, Eye, Users, Calendar, TrendingUp, Filter, Search, Star, Lock } from 'lucide-react'
import { useState } from 'react'

const PolicyHubPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Documents', count: 24, icon: FileText },
    { id: 'healthcare', label: 'Healthcare', count: 8, icon: '🏥' },
    { id: 'education', label: 'Education', count: 6, icon: '📚' },
    { id: 'finance', label: 'Finance', count: 5, icon: '💼' },
    { id: 'tech', label: 'Technology', count: 5, icon: '💻' }
  ]

  const documents = [
    { 
      title: 'Healthcare Infrastructure Development Policy 2024',
      category: 'Healthcare',
      version: '3.2',
      pages: 67,
      date: 'March 15, 2024',
      status: 'Active',
      downloads: 342,
      contributors: 12,
      featured: true,
      visibility: 'public',
      description: 'Comprehensive framework for rural healthcare development'
    },
    { 
      title: 'Education Reform Strategy & Implementation',
      category: 'Education',
      version: '2.1',
      pages: 45,
      date: 'March 10, 2024',
      status: 'Draft',
      downloads: 156,
      contributors: 8,
      featured: false,
      visibility: 'members',
      description: 'Strategic approach to modernizing education sector'
    },
    { 
      title: 'Economic Development & Investment Framework',
      category: 'Finance',
      version: '4.0',
      pages: 89,
      date: 'February 28, 2024',
      status: 'Active',
      downloads: 523,
      contributors: 15,
      featured: true,
      visibility: 'public',
      description: 'Guidelines for sustainable economic growth initiatives'
    },
    { 
      title: 'Technology Innovation & Digital Transformation',
      category: 'Technology',
      version: '1.5',
      pages: 52,
      date: 'March 1, 2024',
      status: 'Review',
      downloads: 289,
      contributors: 10,
      featured: false,
      visibility: 'members',
      description: 'Roadmap for tech adoption and digital literacy'
    },
  ]

  const stats = [
    { label: 'Total Documents', value: '24', icon: FileText, color: 'from-blue-500 to-blue-600' },
    { label: 'Total Downloads', value: '1.3K', icon: Download, color: 'from-green-500 to-green-600' },
    { label: 'Contributors', value: '45', icon: Users, color: 'from-purple-500 to-purple-600' },
    { label: 'This Month', value: '+8', icon: TrendingUp, color: 'from-orange-500 to-orange-600' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Header */}
        <div className="mb-8 animate-fade-in"></div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold gradient-text">Policy & Governance Hub</h1>
                  <p className="text-gray-600 text-lg mt-1">Collaborative policy development and knowledge sharing</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="btn-secondary flex items-center gap-2 shadow-xl">
                <Filter className="w-5 h-5" />
                <span className="hidden sm:inline">Filters</span>
              </button>
              <button className="btn-primary flex items-center gap-2 shadow-xl">
                <Upload className="w-5 h-5" />
                Upload Document
              </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-2 shadow-lg group-hover:rotate-6 transition-transform`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-6 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search policies, frameworks, and documents..."
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
              }`}
            >
              {typeof category.icon === 'string' ? (
                <span className="text-xl">{category.icon}</span>
              ) : (
                <category.icon className="w-5 h-5" />
              )}
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <div 
              key={index}
              className="card group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {doc.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-accent-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                </div>
              )}

              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{doc.description}</p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-semibold">
                    {doc.category}
                  </span>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-semibold ${
                    doc.status === 'Active' ? 'bg-green-100 text-green-700' :
                    doc.status === 'Draft' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {doc.status}
                  </span>
                  <span className="flex items-center gap-1 text-gray-600">
                    {doc.visibility === 'members' && <Lock className="w-3.5 h-3.5" />}
                    {doc.visibility === 'public' ? 'Public' : 'Members Only'}
                  </span>
                </div>

                {/* Stats Row */}
                <div className="flex items-center gap-6 mb-4 text-sm text-gray-600 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    <span className="font-semibold">{doc.pages}</span> pages
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Download className="w-4 h-4" />
                    <span className="font-semibold">{doc.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span className="font-semibold">{doc.contributors}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{doc.date}</span>
                    <span className="text-gray-300">•</span>
                    <span className="font-semibold text-gray-700">v{doc.version}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group/btn">
                      <Eye className="w-5 h-5 text-gray-600 group-hover/btn:text-primary-600" />
                    </button>
                    <button className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg">
                      <Download className="w-4 h-4" />
                      <span className="hidden sm:inline">Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default PolicyHubPage
