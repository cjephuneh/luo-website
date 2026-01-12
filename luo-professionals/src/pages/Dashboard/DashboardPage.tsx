import { useAppSelector } from '@/store/hooks'
import { Users, Briefcase, Calendar, FileText, TrendingUp, Award, Bell, MapPin, Heart, Target, Activity } from 'lucide-react'

const DashboardPage = () => {
  const { user } = useAppSelector((state) => state.auth)

  const stats = [
    { icon: Users, label: 'My Network', value: '234', color: 'from-blue-500 to-blue-600', trend: '+12%' },
    { icon: Briefcase, label: 'My Projects', value: '12', color: 'from-green-500 to-green-600', trend: '+3' },
    { icon: Calendar, label: 'Upcoming Events', value: '5', color: 'from-purple-500 to-purple-600', trend: 'This week' },
    { icon: FileText, label: 'Documents', value: '8', color: 'from-orange-500 to-orange-600', trend: '2 new' },
  ]

  const activities = [
    { type: 'forum', title: 'Forum post in Technology', time: '2 hours ago', color: 'bg-blue-500' },
    { type: 'document', title: 'New policy document uploaded', time: '5 hours ago', color: 'bg-green-500' },
    { type: 'event', title: 'Registered for AGM event', time: '1 day ago', color: 'bg-purple-500' }
  ]

  const quickActions = [
    { icon: Users, title: 'Update Profile', color: 'from-primary-500 to-primary-600' },
    { icon: Activity, title: 'Join Forum', color: 'from-secondary-500 to-secondary-600' },
    { icon: Calendar, title: 'View Events', color: 'from-accent-500 to-yellow-500' },
    { icon: Target, title: 'Start Project', color: 'from-green-500 to-emerald-500' },
    { icon: Heart, title: 'Donate', color: 'from-red-500 to-pink-500' },
    { icon: MapPin, title: 'Find Members', color: 'from-indigo-500 to-purple-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <div className="mb-10 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Welcome back, <span className="gradient-text">{user?.name}!</span>
              </h1>
              <p className="text-gray-600 text-lg">Here's what's happening with your membership today.</p>
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {user?.county}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Online
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Bell className="w-5 h-5 text-primary-500" />
                <span className="font-semibold">3 Notifications</span>
                <span className="w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center ml-2">3</span>
              </button>
              <button className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Achievements</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden animate-slide-up bg-white shadow-lg border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
              <div className="relative p-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2 text-gray-800">{stat.value}</div>
                <div className="text-gray-600 font-semibold mb-3">{stat.label}</div>
                <div className="flex items-center gap-2 text-sm text-green-600 font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 card animate-fade-in bg-white shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-8 p-6 pb-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <Activity className="w-7 h-7 text-primary-500" />
                Recent Activity
              </h2>
              <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2">
                View All <span className="text-sm">→</span>
              </button>
            </div>
            <div className="space-y-4 px-6 pb-6">
              {activities.map((activity, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-transparent rounded-xl hover:shadow-md transition-all group cursor-pointer border border-gray-100">
                  <div className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">{activity.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                  </div>
                  <button className="text-gray-400 hover:text-primary-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="card animate-fade-in bg-white shadow-lg border border-gray-100" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6 p-6 pb-4">
                <Award className="w-7 h-7 text-accent-500" />
                <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
              </div>
              <div className="space-y-4 px-6 pb-6">
                {quickActions.map((action, index) => (
                  <button 
                    key={index}
                    className={`w-full bg-gradient-to-r ${action.color} hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-4 px-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-1 text-left flex items-center gap-4`}
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <action.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{action.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Member Spotlight */}
            <div className="card animate-fade-in bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 shadow-lg" style={{ animationDelay: '0.3s' }}>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-500" />
                  Member Spotlight
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{user?.name || 'User'}</h4>
                    <p className="text-sm text-gray-600">{user?.sector}</p>
                    <div className="flex gap-1 mt-2">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-4 h-4 rounded-full bg-yellow-400"></div>
                      ))}
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-4 rounded-xl border-2 border-primary-200 transition-all text-sm">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
