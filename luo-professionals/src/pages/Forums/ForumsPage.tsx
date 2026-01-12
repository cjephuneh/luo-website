import { MessageSquare, ThumbsUp, Reply, TrendingUp, Plus, Search, Users, Heart, Share2, Filter, Tag, Clock, Eye, ChevronDown, Pin } from 'lucide-react'
import { useState } from 'react'

const ForumsPage = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  
  const topics = [
    { 
      id: 1,
      title: 'Healthcare Infrastructure Development in Rural Areas', 
      sector: 'Healthcare', 
      author: 'Dr. Jane Smith',
      replies: 45, 
      likes: 23, 
      views: 342,
      time: '2 hours ago',
      isHot: true,
      isPinned: true,
      avatar: '👩‍⚕️',
      tags: ['Healthcare', 'Infrastructure', 'Rural Development'],
      lastReply: 'Dr. Omondi replied 30 mins ago',
      excerpt: 'Discussing the challenges and opportunities in improving healthcare infrastructure in rural areas...'
    },
    { 
      id: 2,
      title: 'Technology Innovation in Education: AI & Learning', 
      sector: 'Technology', 
      author: 'John Kamau',
      replies: 32, 
      likes: 18, 
      views: 256,
      time: '5 hours ago',
      isHot: false,
      isPinned: false,
      avatar: '👨‍💻',
      tags: ['Technology', 'Education', 'AI'],
      lastReply: 'Sarah Mwangi replied 2 hours ago',
      excerpt: 'Exploring how AI can revolutionize the education sector in Kenya and Africa...'
    },
    { 
      title: 'Business Opportunities in Agricultural Sector', 
      sector: 'Business & Finance', 
      author: 'Sarah Ochieng',
      replies: 28, 
      likes: 15, 
      views: 189,
      time: '1 day ago',
      isHot: true,
      isPinned: false,
      avatar: '👩‍💼',
      tags: ['Business', 'Agriculture', 'Investment'],
      lastReply: 'James Otieno replied 4 hours ago',
      excerpt: 'Identifying key business opportunities in the agricultural value chain...'
    },
    { 
      title: 'Renewable Energy Projects in Kenya', 
      sector: 'Technology', 
      author: 'Eng. Michael Ochieng',
      replies: 67, 
      likes: 42, 
      views: 512,
      time: '3 hours ago',
      isHot: true,
      isPinned: true,
      avatar: '👨‍🔧',
      tags: ['Energy', 'Renewable', 'Sustainability'],
      lastReply: 'Prof. Anyango replied 1 hour ago',
      excerpt: 'Discussing the potential of renewable energy projects and government incentives...'
    },
    { 
      title: 'Youth Empowerment Through Skills Development', 
      sector: 'Education', 
      author: 'Grace Atieno',
      replies: 23, 
      likes: 12, 
      views: 145,
      time: '6 hours ago',
      isHot: false,
      isPinned: false,
      avatar: '👩‍🏫',
      tags: ['Youth', 'Education', 'Skills'],
      lastReply: 'Peter Njoroge replied 3 hours ago',
      excerpt: 'How can we better equip the youth with relevant skills for the modern economy?...'
    },
    { 
      title: 'Women in Leadership: Breaking Barriers', 
      sector: 'Business & Finance', 
      author: 'Diana Wanjiku',
      replies: 54, 
      likes: 38, 
      views: 298,
      time: '12 hours ago',
      isHot: true,
      isPinned: false,
      avatar: '👩‍💼',
      tags: ['Leadership', 'Gender', 'Empowerment'],
      lastReply: 'Dr. Maina replied 2 hours ago',
      excerpt: 'Sharing experiences and strategies for women advancing in leadership roles...'
    },
  ]

  const tabs = [
    { id: 'all', label: 'All Topics', count: 127 },
    { id: 'trending', label: 'Trending', count: 12 },
    { id: 'my-posts', label: 'My Posts', count: 5 },
    { id: 'pinned', label: 'Pinned', count: 3 }
  ]

  const sectors = [
    { id: 'all', name: 'All Sectors', count: 127 },
    { id: 'healthcare', name: 'Healthcare', count: 24 },
    { id: 'technology', name: 'Technology', count: 32 },
    { id: 'education', name: 'Education', count: 18 },
    { id: 'business', name: 'Business & Finance', count: 28 },
    { id: 'agriculture', name: 'Agriculture', count: 15 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-2">Community Forums</h1>
                  <p className="text-gray-600 text-lg">Connect, discuss, and collaborate with fellow professionals</p>
                </div>
              </div>
            </div>
            <button className="btn-primary flex items-center gap-2 shadow-xl px-6 py-3">
              <Plus className="w-5 h-5" />
              New Topic
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="relative animate-slide-up">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search topics, tags, or members..."
              className="w-full pl-14 pr-5 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary-500/30 focus:border-primary-500 transition-all outline-none shadow-lg text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3 animate-fade-in">
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
                {tab.label} <span className="ml-2 opacity-80">({tab.count})</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 animate-fade-in">
            {sectors.map((sector) => (
              <button
                key={sector.id}
                onClick={() => setSelectedFilter(sector.id)}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all text-sm ${
                  selectedFilter === sector.id
                    ? 'bg-gradient-to-r from-accent-500 to-yellow-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                {sector.name} <span className="ml-1 opacity-75">({sector.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Topics List */}
        <div className="space-y-6">
          {topics.map((topic, index) => (
            <div 
              key={topic.id || index} 
              className="card group hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden animate-slide-up bg-white shadow-lg border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 opacity-0 group-hover:opacity-10 rounded-full -mr-16 -mt-16 transition-opacity duration-500"></div>
              
              <div className="p-6">
                <div className="flex gap-5">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-md">
                      {topic.avatar}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          {topic.isPinned && (
                            <span className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                              <Pin className="w-3 h-3" />
                              PINNED
                            </span>
                          )}
                          {topic.isHot && (
                            <span className="flex items-center gap-1 text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                              <TrendingUp className="w-3 h-3" />
                              HOT
                            </span>
                          )}
                          <span className="text-xs font-bold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                            {topic.sector}
                          </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-3 leading-tight">
                          {topic.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                          {topic.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {topic.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-sm text-gray-500 mb-4">
                          by <span className="font-semibold text-gray-700">{topic.author}</span> • {topic.time} • {topic.lastReply}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                          <Reply className="w-5 h-5" />
                          <span className="font-semibold">{topic.replies}</span>
                          <span className="hidden sm:inline">replies</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-red-500 transition-colors">
                          <Heart className="w-5 h-5" />
                          <span className="font-semibold">{topic.likes}</span>
                          <span className="hidden sm:inline">likes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-5 h-5" />
                          <span className="font-semibold">{topic.views}</span>
                          <span className="hidden sm:inline">views</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Share2 className="w-5 h-5 text-gray-600 hover:text-primary-500" />
                        </button>
                        <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2">
                          Read More <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-primary px-8 py-4 text-lg shadow-xl">
            Load More Topics
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForumsPage
