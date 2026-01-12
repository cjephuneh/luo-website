import { Calendar, MapPin, Users, Clock, Tag, ArrowRight, Video, Globe, Plus, Filter, Heart, Share2, Star } from 'lucide-react'
import { useState } from 'react'

const EventsPage = () => {
  const [viewMode, setViewMode] = useState<'upcoming' | 'past'>('upcoming')
  const [filterBy, setFilterBy] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  const events = [
    { 
      title: 'Annual General Meeting 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Nairobi Serena Hotel',
      type: 'in-person',
      attendees: 250,
      capacity: 300,
      category: 'Conference',
      description: 'Join us for our flagship annual event featuring keynote speakers, sector updates, and networking opportunities.',
      featured: true,
      image: '🎯',
      gradient: 'from-blue-500 to-cyan-500',
      registered: false,
      price: 'KES 5,000',
      rating: 4.8,
      reviews: 124
    },
    { 
      title: 'Healthcare Sector Workshop',
      date: 'March 22, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Kisumu Medical Center',
      type: 'hybrid',
      attendees: 120,
      capacity: 150,
      category: 'Workshop',
      description: 'Interactive workshop on modern healthcare delivery systems and rural infrastructure development.',
      featured: false,
      image: '🏥',
      gradient: 'from-red-500 to-pink-500',
      registered: true,
      price: 'Free',
      rating: 4.6,
      reviews: 89
    },
    { 
      title: 'Technology Innovation Summit',
      date: 'April 5, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Virtual Event',
      type: 'virtual',
      attendees: 500,
      capacity: 1000,
      category: 'Summit',
      description: 'Exploring AI, blockchain, and digital transformation in African context with industry leaders.',
      featured: true,
      image: '💻',
      gradient: 'from-purple-500 to-indigo-500',
      registered: false,
      price: 'KES 2,500',
      rating: 4.9,
      reviews: 210
    },
    { 
      title: 'Business & Finance Networking Mixer',
      date: 'April 12, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Villa Rosa Kempinski',
      type: 'in-person',
      attendees: 85,
      capacity: 100,
      category: 'Networking',
      description: 'Connect with business leaders and investors in an intimate setting with gourmet dinner.',
      featured: false,
      image: '💼',
      gradient: 'from-green-500 to-emerald-500',
      registered: false,
      price: 'KES 8,000',
      rating: 4.7,
      reviews: 67
    },
    { 
      title: 'Education Excellence Forum',
      date: 'April 18, 2024',
      time: '9:00 AM - 3:00 PM',
      location: 'University of Nairobi',
      type: 'in-person',
      attendees: 200,
      capacity: 250,
      category: 'Forum',
      description: 'Discussing innovative approaches to education in the digital age with renowned educators.',
      featured: true,
      image: '🎓',
      gradient: 'from-yellow-500 to-orange-500',
      registered: false,
      price: 'KES 1,500',
      rating: 4.5,
      reviews: 92
    },
    { 
      title: 'Environmental Sustainability Panel',
      date: 'May 3, 2024',
      time: '1:00 PM - 5:00 PM',
      location: 'Virtual Event',
      type: 'virtual',
      attendees: 350,
      capacity: 500,
      category: 'Panel',
      description: 'Panel discussion on sustainable development practices and green technology initiatives.',
      featured: false,
      image: '🌱',
      gradient: 'from-green-500 to-teal-500',
      registered: false,
      price: 'Free',
      rating: 4.4,
      reviews: 78
    },
  ]

  const stats = [
    { label: 'Upcoming Events', value: '12', icon: Calendar, color: 'from-blue-500 to-blue-600' },
    { label: 'Total Attendees', value: '955', icon: Users, color: 'from-green-500 to-green-600' },
    { label: 'This Month', value: '4', icon: Clock, color: 'from-purple-500 to-purple-600' },
    { label: 'Categories', value: '8', icon: Tag, color: 'from-orange-500 to-orange-600' },
  ]

  const categories = [
    { id: 'all', name: 'All Categories', count: 12 },
    { id: 'conference', name: 'Conferences', count: 3 },
    { id: 'workshop', name: 'Workshops', count: 4 },
    { id: 'networking', name: 'Networking', count: 2 },
    { id: 'summit', name: 'Summits', count: 3 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-accent-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-2">Events & Programs</h1>
                  <p className="text-gray-600 text-lg">Join, learn, and network with the LPA community</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn-secondary flex items-center gap-2 shadow-xl px-6 py-3">
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </button>
              <button className="btn-primary flex items-center gap-2 shadow-xl px-6 py-3">
                <Plus className="w-5 h-5" />
                Create Event
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
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

        {/* Filters and Toggles */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setViewMode('upcoming')}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                viewMode === 'upcoming'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setViewMode('past')}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                viewMode === 'past'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
              }`}
            >
              Past Events
            </button>
          </div>
          
          <div className="flex gap-2 flex-wrap ml-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilterBy(category.id)}
                className={`px-5 py-3 rounded-xl font-semibold transition-all text-sm ${
                  filterBy === category.id
                    ? 'bg-gradient-to-r from-accent-500 to-yellow-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex justify-end mb-8">
          <div className="flex gap-2 bg-white rounded-xl shadow-sm border border-gray-200 p-1">
            <button 
              onClick={() => setSortBy('date')}
              className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                sortBy === 'date' ? 'bg-primary-500 text-white shadow' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Date
            </button>
            <button 
              onClick={() => setSortBy('popularity')}
              className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                sortBy === 'popularity' ? 'bg-primary-500 text-white shadow' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Popularity
            </button>
            <button 
              onClick={() => setSortBy('price')}
              className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                sortBy === 'price' ? 'bg-primary-500 text-white shadow' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Price
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="card group hover:scale-[1.03] transition-all duration-300 relative overflow-hidden animate-slide-up bg-white shadow-lg border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-accent-500 to-yellow-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}

              {/* Registration Badge */}
              {event.registered && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <CheckIcon />
                    ✓ Registered
                  </div>
                </div>
              )}

              {/* Background Pattern */}
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br ${event.gradient} opacity-10`}></div>

              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 bg-gradient-to-br ${event.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform`}>
                      {event.image}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-primary-600 bg-primary-100 px-3 py-1.5 rounded-full">
                        {event.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                        {event.type === 'virtual' && <Video className="w-3 h-3" />}
                        {event.type === 'in-person' && <MapPin className="w-3 h-3" />}
                        {event.type === 'hybrid' && <Globe className="w-3 h-3" />}
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-2 leading-tight">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-5 line-clamp-2 text-sm">{event.description}</p>

                {/* Event Details */}
                <div className="space-y-3 mb-5 text-sm">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-gray-700">Price</span>
                    <span className="text-lg font-bold text-primary-600">{event.price}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-bold text-gray-700">{event.rating}</span>
                    <span className="text-gray-500 text-sm">({event.reviews} reviews)</span>
                  </div>
                </div>

                {/* Attendees Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="flex items-center gap-1.5 text-gray-700">
                      <Users className="w-4 h-4" />
                      <span className="font-semibold">{event.attendees}</span> / {event.capacity} attending
                    </span>
                    <span className="text-gray-500 font-semibold">
                      {Math.round((event.attendees / event.capacity) * 100)}% full
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${event.gradient} transition-all duration-500`}
                      style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    {event.registered ? 'View Details' : 'Register Now'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl transition-all shadow-sm">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                  </button>
                  <button className="p-3 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl transition-all shadow-sm">
                    <Share2 className="w-5 h-5 text-gray-600 hover:text-primary-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Define CheckIcon as it's used in the component
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default EventsPage
