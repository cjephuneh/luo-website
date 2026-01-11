import { Link } from 'react-router-dom'
import { Users, TrendingUp, DollarSign, Briefcase, ArrowRight, Star, Award, Target } from 'lucide-react'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const [counts, setCounts] = useState({ members: 0, projects: 0, funds: 0, investments: 0 })

  useEffect(() => {
    // Animated counters
    const targets = { members: 5234, projects: 47, funds: 45, investments: 120 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounts({
        members: Math.floor((targets.members * step) / steps),
        projects: Math.floor((targets.projects * step) / steps),
        funds: Math.floor((targets.funds * step) / steps),
        investments: Math.floor((targets.investments * step) / steps),
      })
      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    { icon: Users, label: 'Registered Members', value: counts.members.toLocaleString(), color: 'from-blue-500 to-blue-600' },
    { icon: Briefcase, label: 'Active Projects', value: counts.projects, color: 'from-green-500 to-green-600' },
    { icon: DollarSign, label: 'Funds Raised', value: `KES ${counts.funds}M`, color: 'from-accent-500 to-yellow-600' },
    { icon: TrendingUp, label: 'Investments', value: `KES ${counts.investments}M`, color: 'from-purple-500 to-purple-600' },
  ]

  const sectors = [
    { name: 'Healthcare', description: 'Medical professionals driving health initiatives', icon: '🏥', gradient: 'from-red-500 to-pink-500' },
    { name: 'Education', description: 'Educators shaping future generations', icon: '📚', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Business & Finance', description: 'Economic development and entrepreneurship', icon: '💼', gradient: 'from-green-500 to-emerald-500' },
    { name: 'Technology', description: 'Innovation and digital transformation', icon: '💻', gradient: 'from-purple-500 to-indigo-500' },
  ]

  const features = [
    { icon: Star, title: 'Expert Network', desc: 'Connect with professionals across sectors' },
    { icon: Award, title: 'Recognition', desc: 'Celebrate achievements and contributions' },
    { icon: Target, title: 'Impact Projects', desc: 'Drive meaningful community change' },
  ]

  return (
    <div className="bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNk0yNCA0NGMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDYiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
              Empowering Luo Professionals for{' '}
              <span className="text-accent-500 animate-pulse-glow inline-block">Community Growth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100">
              Join Kenya's premier network of Luo professionals driving development, innovation, and positive change across all sectors.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                to="/register" 
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 hover:-translate-y-1 transform flex items-center gap-2 text-lg"
              >
                Become a Member <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/about" 
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white/50 text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Why Join LPA?</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Unlock opportunities and make a difference</p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card group hover:scale-105 transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 mb-4 transform group-hover:rotate-12 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Key Sectors</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Diverse expertise driving collective impact</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div 
                key={index} 
                className="card group hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform duration-300">{sector.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">{sector.name}</h3>
                <p className="text-gray-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTQwIDQwaDQwdjQwSDQwVjQweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Ready to Make an Impact?</h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 animate-fade-in">
            Join thousands of professionals contributing to community development and growth.
          </p>
          <Link 
            to="/register" 
            className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 hover:-translate-y-2 transform text-lg animate-pulse-glow"
          >
            Register Now <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
