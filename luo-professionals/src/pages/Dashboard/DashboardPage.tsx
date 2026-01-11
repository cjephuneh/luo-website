import { useAppSelector } from '@/store/hooks'
import { Users, Briefcase, Calendar, FileText, TrendingUp, Award, Bell } from 'lucide-react'

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Welcome back, <span className="gradient-text">{user?.name}!</span>
              </h1>
              <p className="text-gray-600 text-lg">Here's what's happening with your membership today.</p>
            </div>
            <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <Bell className="w-5 h-5 text-primary-500" />
              <span className="font-semibold">3 Notifications</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
              <div className="relative">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-3 shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-1 text-gray-800">{stat.value}</div>
                <div className="text-gray-600 font-medium mb-2">{stat.label}</div>
                <div className="flex items-center gap-1 text-sm text-green-600 font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  {stat.trend}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 card animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Recent Activity</h2>
              <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">View All →</button>
            </div>
            <div className="space-y-4">
              {activities.map((activity, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-transparent rounded-xl hover:shadow-md transition-all group cursor-pointer">
                  <div className={`w-10 h-10 ${activity.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">{activity.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-accent-500" />
              <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-left flex items-center gap-3">
                <Users className="w-5 h-5" />
                Update Profile
              </button>
              <button className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-left flex items-center gap-3">
                <Briefcase className="w-5 h-5" />
                Join Forum
              </button>
              <button className="w-full bg-gradient-to-r from-accent-500 to-yellow-500 hover:from-accent-600 hover:to-yellow-600 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-left flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                View Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
