import { Briefcase, MapPin, Clock, DollarSign, Search, Filter, Building2, Calendar, Users, Bookmark, Share2, ChevronDown, Star, TrendingUp, Eye, Phone, Mail, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const JobsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const jobCategories = [
    { id: 'all', label: 'All Jobs', count: 24 },
    { id: 'healthcare', label: 'Healthcare', count: 8 },
    { id: 'technology', label: 'Technology', count: 6 },
    { id: 'education', label: 'Education', count: 4 },
    { id: 'business', label: 'Business', count: 3 },
    { id: 'engineering', label: 'Engineering', count: 3 },
  ]

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Ltd',
      location: 'Nairobi, Kenya',
      salary: 'KES 120,000 - 180,000',
      type: 'Full-time',
      experience: '3-5 years',
      posted: '2 days ago',
      deadline: '2024-02-15',
      sector: 'Technology',
      logo: '💻',
      featured: true,
      urgent: false,
      description: 'We are seeking an experienced Senior Software Engineer to join our dynamic development team. You will be responsible for designing and implementing scalable software solutions.',
      requirements: ['Bachelor\'s degree in Computer Science', '3+ years experience in software development', 'Proficiency in JavaScript/TypeScript', 'Experience with React/Vue.js'],
      benefits: ['Health insurance', 'Flexible working hours', 'Professional development budget', 'Remote work options'],
      applicants: 42
    },
    {
      id: 2,
      title: 'Medical Doctor',
      company: 'County Referral Hospital',
      location: 'Kisumu, Kenya',
      salary: 'KES 150,000 - 200,000',
      type: 'Full-time',
      experience: '2+ years',
      posted: '1 day ago',
      deadline: '2024-02-20',
      sector: 'Healthcare',
      logo: '🏥',
      featured: true,
      urgent: true,
      description: 'Join our medical team as a qualified doctor to provide quality healthcare services to our community.',
      requirements: ['MBChB degree', 'Valid medical license', '2+ years clinical experience', 'Good communication skills'],
      benefits: ['Competitive salary', 'Medical insurance', 'Continuing education support', 'Career advancement opportunities'],
      applicants: 28
    },
    {
      id: 3,
      title: 'Business Development Manager',
      company: 'Financial Services Group',
      location: 'Mombasa, Kenya',
      salary: 'KES 80,000 - 120,000',
      type: 'Full-time',
      experience: '5+ years',
      posted: '3 days ago',
      deadline: '2024-02-25',
      sector: 'Business',
      logo: '💼',
      featured: false,
      urgent: false,
      description: 'Lead business development initiatives and drive revenue growth for our financial services division.',
      requirements: ['Bachelor\'s degree in Business/Administration', '5+ years sales experience', 'Strong leadership skills', 'Financial services background preferred'],
      benefits: ['Performance bonuses', 'Company car', 'Health insurance', 'Annual leave allowance'],
      applicants: 15
    },
    {
      id: 4,
      title: 'Teacher - Mathematics',
      company: 'Premier High School',
      location: 'Eldoret, Kenya',
      salary: 'KES 60,000 - 90,000',
      type: 'Full-time',
      experience: '1-3 years',
      posted: '1 week ago',
      deadline: '2024-03-01',
      sector: 'Education',
      logo: '📚',
      featured: false,
      urgent: false,
      description: 'Teach mathematics to high school students and contribute to academic excellence.',
      requirements: ['Bachelor\'s degree in Education/Mathematics', 'Teaching certificate', '1+ years teaching experience', 'Passion for education'],
      benefits: ['Housing allowance', 'Study leave', 'Professional development', 'School fees assistance'],
      applicants: 35
    }
  ]

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.sector.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === 'all' || job.sector.toLowerCase() === activeFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Header */}
        <div className="mb-12 animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-2xl">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Career Opportunities</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover your next career move with opportunities from leading organizations
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies, or sectors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-5 py-5 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all outline-none shadow-lg text-lg"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {jobCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="card group hover:scale-105 transition-all duration-300 bg-white shadow-lg border border-gray-100 p-6 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-4 shadow-lg">
              <Briefcase className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">156</div>
            <div className="text-gray-600 font-semibold">Active Jobs</div>
          </div>
          <div className="card group hover:scale-105 transition-all duration-300 bg-white shadow-lg border border-gray-100 p-6 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white mb-4 shadow-lg">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">1,247</div>
            <div className="text-gray-600 font-semibold">Applications</div>
          </div>
          <div className="card group hover:scale-105 transition-all duration-300 bg-white shadow-lg border border-gray-100 p-6 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white mb-4 shadow-lg">
              <Building2 className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">89</div>
            <div className="text-gray-600 font-semibold">Companies</div>
          </div>
          <div className="card group hover:scale-105 transition-all duration-300 bg-white shadow-lg border border-gray-100 p-6 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-4 shadow-lg">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">23%</div>
            <div className="text-gray-600 font-semibold">Weekly Growth</div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredJobs.map((job, index) => (
            <div 
              key={job.id}
              className="card group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden bg-white shadow-lg border border-gray-100 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {job.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                </div>
              )}
              
              {/* Urgent Badge */}
              {job.urgent && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    URGENT
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl shadow-md">
                      {job.logo}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-600 mb-3">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span className="font-semibold">{job.company}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {job.sector}
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-semibold">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Posted {job.posted}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{job.applicants} applicants</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 line-clamp-2">{job.description}</p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Apply Now
                  </button>
                  <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group/bookmark">
                    <Bookmark className="w-5 h-5 text-gray-600 group-hover/bookmark:text-blue-500" />
                  </button>
                  <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group/share">
                    <Share2 className="w-5 h-5 text-gray-600 group-hover/share:text-blue-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredJobs.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-4 text-lg shadow-xl">
              Load More Jobs
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default JobsPage