import { FileText, Calendar, DollarSign, Building2, Users, Clock, Search, Filter, Eye, Download, Share2, Bookmark, AlertTriangle, CheckCircle, TrendingUp, MapPin, ChevronDown, Star, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const TendersPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const tenderCategories = [
    { id: 'all', label: 'All Tenders', count: 18 },
    { id: 'infrastructure', label: 'Infrastructure', count: 6 },
    { id: 'technology', label: 'Technology', count: 4 },
    { id: 'healthcare', label: 'Healthcare', count: 3 },
    { id: 'education', label: 'Education', count: 3 },
    { id: 'services', label: 'Services', count: 2 },
  ]

  const tenders = [
    {
      id: 1,
      title: 'Construction of County Referral Hospital',
      organization: 'Kisumu County Government',
      location: 'Kisumu, Kenya',
      budget: 'KES 2.5 Billion',
      deadline: '2024-03-15',
      category: 'Infrastructure',
      status: 'open',
      bids: 24,
      posted: '2024-01-20',
      description: 'Construction of a 200-bed referral hospital with modern facilities including surgical theaters, diagnostic equipment, and accommodation for medical staff.',
      requirements: ['Valid construction license', 'Minimum 5 years experience', 'Financial capacity certificate', 'Technical capability documents'],
      documents: ['Tender Notice', 'Specifications', 'BOQ', 'Terms and Conditions'],
      contact: 'procurement@kisumucounty.go.ke'
    },
    {
      id: 2,
      title: 'ICT Equipment Supply and Installation',
      organization: 'Ministry of Education',
      location: 'Nairobi, Kenya',
      budget: 'KES 80 Million',
      deadline: '2024-02-28',
      category: 'Technology',
      status: 'open',
      bids: 15,
      posted: '2024-01-15',
      description: 'Supply and installation of ICT equipment including computers, servers, networking equipment, and software licenses for public schools nationwide.',
      requirements: ['ICT service provider license', '3+ years experience', 'Product warranty certificates', 'Installation timeline proposal'],
      documents: ['RFQ Document', 'Technical Specifications', 'Evaluation Criteria', 'Contract Terms'],
      contact: 'ict.procurement@education.go.ke'
    },
    {
      id: 3,
      title: 'Medical Equipment Procurement',
      organization: 'Kenya Medical Supplies Authority',
      location: 'National',
      budget: 'KES 150 Million',
      deadline: '2024-03-01',
      category: 'Healthcare',
      status: 'closed',
      bids: 32,
      posted: '2024-01-10',
      description: 'Procurement of medical equipment including ultrasound machines, laboratory analyzers, patient monitors, and diagnostic instruments for government hospitals.',
      requirements: ['CE/FDA certification', 'Local distributor agreement', 'After-sales service commitment', 'Training provision'],
      documents: ['Tender Document', 'Equipment Catalog', 'Service Level Agreement', 'Warranty Terms'],
      contact: 'procurement@kemsa.go.ke'
    },
    {
      id: 4,
      title: 'School Furniture Manufacturing',
      organization: 'County Education Office',
      location: 'Machakos, Kenya',
      budget: 'KES 45 Million',
      deadline: '2024-02-20',
      category: 'Education',
      status: 'open',
      bids: 18,
      posted: '2024-01-25',
      description: 'Manufacturing and supply of classroom furniture including desks, chairs, teacher tables, and storage units for primary and secondary schools.',
      requirements: ['Furniture manufacturing license', 'Quality assurance certification', 'Timely delivery guarantee', 'Durability warranty'],
      documents: ['Invitation Letter', 'Furniture Specifications', 'Delivery Schedule', 'Payment Terms'],
      contact: 'procurement@machakosedu.go.ke'
    }
  ]

  const filteredTenders = tenders.filter(tender => {
    const matchesSearch = tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tender.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tender.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === 'all' || tender.category.toLowerCase() === activeFilter
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-700'
      case 'closed': return 'bg-red-100 text-red-700'
      case 'evaluation': return 'bg-yellow-100 text-yellow-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open': return <CheckCircle className="w-4 h-4" />
      case 'closed': return <AlertTriangle className="w-4 h-4" />
      case 'evaluation': return <TrendingUp className="w-4 h-4" />
      default: return <FileText className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Header */}
        <div className="mb-12 animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl mb-6 shadow-2xl">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Tenders & Procurement</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Access government and private sector tender opportunities across Kenya
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search tenders, organizations, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-5 py-5 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-500/30 focus:border-green-500 transition-all outline-none shadow-lg text-lg"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {tenderCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg'
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
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white mb-4 shadow-lg">
              <FileText className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">42</div>
            <div className="text-gray-600 font-semibold">Active Tenders</div>
          </div>
          <div className="card group hover:scale-105 transition-all duration-300 bg-white shadow-lg border border-gray-100 p-6 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-4 shadow-lg">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">156</div>
            <div className="text-gray-600 font-semibold">Total Bids</div>
          </div>
          <div className="card group hover:scale-105 transition-all duration-300 bg-white shadow-lg border border-gray-100 p-6 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white mb-4 shadow-lg">
              <DollarSign className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">KES 2.8B</div>
            <div className="text-gray-600 font-semibold">Total Value</div>
          </div>
          <div className="card group hover:scale-105 transition-all duration-300 bg-white shadow-lg border border-gray-100 p-6 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-4 shadow-lg">
              <Building2 className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">24</div>
            <div className="text-gray-600 font-semibold">Organizations</div>
          </div>
        </div>

        {/* Tenders List */}
        <div className="space-y-6">
          {filteredTenders.map((tender, index) => (
            <div 
              key={tender.id}
              className="card group hover:scale-[1.01] transition-all duration-300 bg-white shadow-lg border border-gray-100 animate-slide-up p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Tender Details */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl flex items-center justify-center text-2xl shadow-md">
                        📄
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-semibold text-sm ${getStatusColor(tender.status)}`}>
                          {getStatusIcon(tender.status)}
                          {tender.status.charAt(0).toUpperCase() + tender.status.slice(1)}
                        </span>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                          {tender.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors mb-3">
                        {tender.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                        <span className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-semibold">{tender.organization}</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {tender.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-bold text-green-600">{tender.budget}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 line-clamp-2">{tender.description}</p>

                  {/* Key Dates */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-500 text-xs">Posted</div>
                      <div className="font-semibold">{tender.posted}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-500 text-xs">Deadline</div>
                      <div className="font-semibold text-red-600">{tender.deadline}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-500 text-xs">Bids Received</div>
                      <div className="font-semibold">{tender.bids}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-500 text-xs">Contact</div>
                      <div className="font-semibold text-blue-600 truncate">{tender.contact}</div>
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Required Documents:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tender.documents.map((doc, idx) => (
                        <span key={idx} className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">
                          <FileText className="w-3 h-3" />
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="lg:w-64 space-y-4">
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Submit Bid
                  </button>
                  <button className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all group/view">
                    <Eye className="w-5 h-5 group-hover/view:text-green-500" />
                    View Details
                  </button>
                  <button className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all group/download">
                    <Download className="w-5 h-5 group-hover/download:text-green-500" />
                    Download Docs
                  </button>
                  <div className="flex gap-3">
                    <button className="flex-1 p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group/bookmark">
                      <Bookmark className="w-5 h-5 text-gray-600 group-hover/bookmark:text-green-500 mx-auto" />
                    </button>
                    <button className="flex-1 p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group/share">
                      <Share2 className="w-5 h-5 text-gray-600 group-hover/share:text-green-500 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredTenders.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-4 text-lg shadow-xl">
              Load More Tenders
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TendersPage