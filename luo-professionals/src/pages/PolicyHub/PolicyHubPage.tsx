import { FileText, Download, Upload, Eye, Users, Calendar, TrendingUp, Filter, Search, Star, Lock, Share2, Heart, ChevronDown, ExternalLink, Clock } from 'lucide-react'
import { useState } from 'react'

const PolicyHubPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [_sortOption, setSortOption] = useState('recent')
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    { id: 'all', label: 'All Documents', count: 24, icon: FileText },
    { id: 'healthcare', label: 'Healthcare', count: 8, icon: '🏥' },
    { id: 'education', label: 'Education', count: 6, icon: '📚' },
    { id: 'finance', label: 'Finance', count: 5, icon: '💼' },
    { id: 'tech', label: 'Technology', count: 5, icon: '💻' },
    { id: 'environment', label: 'Environment', count: 4, icon: '🌱' },
    { id: 'agriculture', label: 'Agriculture', count: 3, icon: '🌾' },
  ]

  const documents = [
    { 
      id: 1,
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
      description: 'Comprehensive framework for rural healthcare development with implementation guidelines and funding mechanisms.',
      tags: ['Healthcare', 'Infrastructure', 'Rural Development'],
      lastUpdated: '2 days ago',
      readTime: '15 min read',
      likes: 24,
      shares: 8
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
      description: 'Strategic approach to modernizing education sector with focus on digital learning and teacher development.',
      tags: ['Education', 'Strategy', 'Digital Learning'],
      lastUpdated: '1 week ago',
      readTime: '12 min read',
      likes: 18,
      shares: 5
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
      description: 'Guidelines for sustainable economic growth initiatives with focus on SME support and foreign investment.',
      tags: ['Economy', 'Investment', 'SME'],
      lastUpdated: '3 days ago',
      readTime: '22 min read',
      likes: 42,
      shares: 12
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
      description: 'Roadmap for tech adoption and digital literacy with emphasis on cybersecurity and data protection.',
      tags: ['Technology', 'Digital', 'Cybersecurity'],
      lastUpdated: '5 days ago',
      readTime: '18 min read',
      likes: 31,
      shares: 7
    },
    { 
      title: 'Environmental Conservation Policy',
      category: 'Environment',
      version: '1.0',
      pages: 34,
      date: 'March 5, 2024',
      status: 'Draft',
      downloads: 98,
      contributors: 6,
      featured: false,
      visibility: 'public',
      description: 'Comprehensive policy for environmental conservation and climate change mitigation in Kenya.',
      tags: ['Environment', 'Climate', 'Conservation'],
      lastUpdated: '1 day ago',
      readTime: '10 min read',
      likes: 15,
      shares: 3
    },
    { 
      title: 'Agricultural Modernization Framework',
      category: 'Agriculture',
      version: '2.3',
      pages: 76,
      date: 'February 20, 2024',
      status: 'Active',
      downloads: 267,
      contributors: 11,
      featured: true,
      visibility: 'public',
      description: 'Framework for modernizing agriculture through technology, financing, and market access.',
      tags: ['Agriculture', 'Technology', 'Market Access'],
      lastUpdated: '4 days ago',
      readTime: '20 min read',
      likes: 28,
      shares: 9
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
        <div className="mb-12 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-3">Policy & Governance Hub</h1>
                  <p className="text-gray-600 text-lg">Collaborative policy development and knowledge sharing platform</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn-secondary flex items-center gap-2 shadow-xl px-6 py-3">
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
              <button className="btn-primary flex items-center gap-2 shadow-xl px-6 py-3">
                <Upload className="w-5 h-5" />
                Upload Document
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card group hover:scale-105 transition-all duration-300 animate-slide-up bg-white shadow-lg border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg group-hover:rotate-6 transition-transform`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search Bar and Controls */}
        <div className="mb-8 space-y-6">
          <div className="relative animate-fade-in">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search policies, frameworks, and documents..."
              className="w-full pl-16 pr-5 py-5 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary-500/30 focus:border-primary-500 transition-all outline-none shadow-lg text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {/* Category Tabs */}
            <div className="flex gap-3 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-xl font-bold transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  {typeof category.icon === 'string' ? (
                    <span className="text-lg mr-2">{category.icon}</span>
                  ) : (
                    <category.icon className="w-4 h-4 inline mr-2" />
                  )}
                  <span>{category.label}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ml-2 ${
                    activeCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="ml-auto relative">
              <button 
                className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-all shadow-sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>Sort: Recent</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              {showFilters && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-10 py-2">
                  {['Recent', 'Popular', 'Alphabetical', 'Most Downloaded'].map((option) => (
                    <button 
                      key={option}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors text-sm"
                      onClick={() => {
                        setSortOption(option.toLowerCase());
                        setShowFilters(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div 
              key={doc.id || index}
              className="card group hover:scale-[1.03] transition-all duration-300 relative overflow-hidden animate-slide-up bg-white shadow-lg border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {doc.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-accent-500 to-yellow-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                </div>
              )}

              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <FileText className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-3 leading-tight">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{doc.description}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {doc.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
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
                    {doc.visibility === 'members' ? (
                      <Lock className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                    {doc.visibility === 'public' ? 'Public' : 'Members Only'}
                  </span>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 mb-5 text-sm text-gray-600 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span className="font-semibold">{doc.pages}</span> pages
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">{doc.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span className="font-semibold">{doc.downloads}</span> downloads
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="font-semibold">{doc.contributors}</span> contributors
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{doc.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-gray-700">v{doc.version}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group/btn">
                      <Heart className="w-5 h-5 text-gray-600 group-hover/btn:text-red-500" />
                      <span className="text-xs text-gray-500 ml-1">{doc.likes}</span>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group/btn">
                      <Share2 className="w-5 h-5 text-gray-600 group-hover/btn:text-primary-500" />
                      <span className="text-xs text-gray-500 ml-1">{doc.shares}</span>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group/btn">
                      <ExternalLink className="w-5 h-5 text-gray-600 group-hover/btn:text-primary-500" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-4">
                  <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Download Document</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-primary px-8 py-4 text-lg shadow-xl">
            Load More Documents
          </button>
        </div>
      </div>
    </div>
  )
}

export default PolicyHubPage
