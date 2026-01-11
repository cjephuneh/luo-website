import { Calendar, MapPin, Users, Clock, Tag, ArrowRight, Video, Globe, Plus, Filter } from 'lucide-react'
import { useState } from 'react'

const EventsPage = () => {
  const [viewMode, setViewMode] = useState<'upcoming' | 'past'>('upcoming')

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
      description: 'Join us for our flagship annual event featuring keynote speakers, sector updates, and networking',
      featured: true,
      image: '🎯',
      gradient: 'from-blue-500 to-cyan-500',
      registered: false
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
      description: 'Interactive workshop on modern healthcare delivery systems and rural infrastructure',
      featured: false,
      image: '🏥',
      gradient: 'from-red-500 to-pink-500',
      registered: true
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
      description: 'Exploring AI, blockchain, and digital transformation in African context',
      featured: true,
      image: '💻',
      gradient: 'from-purple-500 to-indigo-500',
      registered: false
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
      description: 'Connect with business leaders and investors in an intimate setting',
      featured: false,
      image: '💼',
      gradient: 'from-green-500 to-emerald-500',
      registered: false
    },
  ]

  const stats = [
    { label: 'Upcoming Events', value: '12', icon: Calendar, color: 'from-blue-500 to-blue-600' },
    { label: 'Total Attendees', value: '955', icon: Users, color: 'from-green-500 to-green-600' },
    { label: 'This Month', value: '4', icon: Clock, color: 'from-purple-500 to-purple-600' },
    { label: 'Categories', value: '8', icon: Tag, color: 'from-orange-500 to-orange-600' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-accent-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold gradient-text">Events & Programs</h1>
              </div>
              <p className="text-gray-600 text-lg ml-17">Join, learn, and network with the LPA community</p>
            </div>
            <div className="flex gap-3">
              <button className="btn-secondary flex items-center gap-2 shadow-xl">
                <Filter className="w-5 h-5" />
                <span className="hidden sm:inline">Filter</span>
              </button>
              <button className="btn-primary flex items-center gap-2 shadow-xl">
                <Plus className="w-5 h-5" />
                Create Event
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
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

        {/* View Toggle */}
        <div className="flex gap-2 mb-8 animate-fade-in">
          <button
            onClick={() => setViewMode('upcoming')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              viewMode === 'upcoming'
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setViewMode('past')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              viewMode === 'past'
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div 
              key={index}
              className="card group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-accent-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Featured
                  </div>
                </div>
              )}

              {/* Registration Badge */}
              {event.registered && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ✓ Registered
                  </div>
                </div>
              )}

              {/* Background Pattern */}
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br ${event.gradient} opacity-10`}></div>

              <div className="relative">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 bg-gradient-to-br ${event.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform`}>
                      {event.image}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {event.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-600">
                        {event.type === 'virtual' && <Video className="w-3.5 h-3.5" />}
                        {event.type === 'in-person' && <MapPin className="w-3.5 h-3.5" />}
                        {event.type === 'hybrid' && <Globe className="w-3.5 h-3.5" />}
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-2">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                {/* Event Details */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-4 h-4 text-primary-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Attendees Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="flex items-center gap-1.5 text-gray-700">
                      <Users className="w-4 h-4" />
                      <span className="font-semibold">{event.attendees}</span> / {event.capacity} attendees
                    </span>
                    <span className="text-gray-500">
                      {Math.round((event.attendees / event.capacity) * 100)}% full
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${event.gradient} transition-all duration-500`}
                      style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  {event.registered ? 'View Details' : 'Register Now'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventsPage
