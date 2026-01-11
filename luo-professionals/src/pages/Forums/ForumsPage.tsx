import { MessageSquare, ThumbsUp, Reply, TrendingUp, Plus, Search } from 'lucide-react'
import { useState } from 'react'

const ForumsPage = () => {
  const [activeTab, setActiveTab] = useState('all')
  
  const topics = [
    { 
      title: 'Healthcare Infrastructure Development in Rural Areas', 
      sector: 'Healthcare', 
      author: 'Dr. Jane Smith',
      replies: 45, 
      likes: 23, 
      views: 342,
      time: '2 hours ago',
      isHot: true,
      avatar: '🏥'
    },
    { 
      title: 'Technology Innovation in Education: AI & Learning', 
      sector: 'Technology', 
      author: 'John Kamau',
      replies: 32, 
      likes: 18, 
      views: 256,
      time: '5 hours ago',
      isHot: false,
      avatar: '💻'
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
      avatar: '💼'
    },
  ]

  const tabs = [
    { id: 'all', label: 'All Topics', count: 127 },
    { id: 'trending', label: 'Trending', count: 12 },
    { id: 'my-posts', label: 'My Posts', count: 5 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">Community Forums</h1>
              <p className="text-gray-600 text-lg">Connect, discuss, and collaborate with fellow professionals</p>
            </div>
            <button className="btn-primary flex items-center gap-2 shadow-xl">
              <Plus className="w-5 h-5" />
              New Topic
            </button>
          </div>
        </div>

        {/* Search and Tabs */}
        <div className="mb-6 space-y-4">
          <div className="relative animate-slide-up">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search topics, tags, or members..."
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none shadow-sm"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 animate-fade-in">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                {tab.label} <span className="ml-1 opacity-75">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Topics List */}
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <div 
              key={index} 
              className="card group hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 opacity-0 group-hover:opacity-10 rounded-full -mr-16 -mt-16 transition-opacity duration-500"></div>
              
              <div className="flex gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {topic.avatar}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {topic.isHot && (
                          <span className="flex items-center gap-1 text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                            <TrendingUp className="w-3 h-3" />
                            HOT
                          </span>
                        )}
                        <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                          {topic.sector}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        by <span className="font-semibold">{topic.author}</span> • {topic.time}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 text-sm text-gray-600 mt-4">
                    <div className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                      <Reply className="w-4 h-4" />
                      <span className="font-semibold">{topic.replies}</span>
                      <span className="hidden sm:inline">replies</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-green-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="font-semibold">{topic.likes}</span>
                      <span className="hidden sm:inline">likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      <span className="font-semibold">{topic.views}</span>
                      <span className="hidden sm:inline">views</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ForumsPage
