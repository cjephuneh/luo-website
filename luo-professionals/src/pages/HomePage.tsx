import { Link } from 'react-router-dom'
import { TrendingUp, DollarSign, Briefcase, ArrowRight, Star, Award, Target, Heart, Building2, GraduationCap, Code, HeartHandshake, UsersRound, FileText, MessageCircle, BriefcaseBusiness, Calendar, Users, Play, ChevronRight } from 'lucide-react'
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
    { icon: UsersRound, label: 'Professionals Connected', value: counts.members.toLocaleString(), color: 'from-blue-500 to-blue-600' },
    { icon: Briefcase, label: 'Active Projects', value: counts.projects, color: 'from-green-500 to-green-600' },
    { icon: DollarSign, label: 'Funds Mobilized', value: `KES ${counts.funds}M`, color: 'from-accent-500 to-yellow-600' },
    { icon: TrendingUp, label: 'Investment Deals', value: `KES ${counts.investments}M`, color: 'from-purple-500 to-purple-600' },
  ]

  const quickLinks = [
    { title: 'Job Opportunities', desc: 'Find your dream career', icon: BriefcaseBusiness, link: '/jobs', color: 'from-blue-500 to-cyan-500' },
    { title: 'Tenders & Bids', desc: 'Government procurement', icon: FileText, link: '/tenders', color: 'from-green-500 to-emerald-500' },
    { title: 'Discussion Forums', desc: 'Connect with peers', icon: MessageCircle, link: '/forums', color: 'from-purple-500 to-pink-500' },
    { title: 'Events Calendar', desc: 'Upcoming gatherings', icon: Calendar, link: '/events', color: 'from-orange-500 to-red-500' },
  ]

  const sectors = [
    { name: 'Healthcare', description: 'Medical professionals driving health initiatives', icon: <Heart className="w-8 h-8" />, gradient: 'from-red-500 to-pink-500' },
    { name: 'Education', description: 'Educators shaping future generations', icon: <GraduationCap className="w-8 h-8" />, gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Business & Finance', description: 'Economic development and entrepreneurship', icon: <Building2 className="w-8 h-8" />, gradient: 'from-green-500 to-emerald-500' },
    { name: 'Technology', description: 'Innovation and digital transformation', icon: <Code className="w-8 h-8" />, gradient: 'from-purple-500 to-indigo-500' },
  ]

  const features = [
    { icon: Star, title: 'Professional Network', desc: 'Connect with accomplished professionals across diverse sectors' },
    { icon: Award, title: 'Achievement Recognition', desc: 'Celebrate excellence and contributions to our community' },
    { icon: Target, title: 'Community Impact', desc: 'Drive meaningful projects that transform lives' },
  ]

  const testimonials = [
    { name: 'Dr. Sarah Ochieng', role: 'Medical Director', quote: 'LPA opened doors to partnerships that transformed our healthcare initiative.' },
    { name: 'Eng. James Omondi', role: 'Tech Entrepreneur', quote: 'The networking opportunities helped scale my startup to new heights.' },
    { name: 'Prof. Grace Akinyi', role: 'University Professor', quote: 'Through LPA, I found collaborators for groundbreaking research projects.' },
  ]

  return (
    <div className="bg-gray-50 pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 text-sm font-medium border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Kenya's Premier Professional Network for Luo Community</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Empowering</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Luo Professionals</span>
              <span className="block mt-4 text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Driving Community Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed font-light">
              Connect with accomplished professionals, discover career opportunities, access tenders, and collaborate on transformative projects that shape Kenya's future.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                to="/register" 
                className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-2 transform flex items-center gap-3 text-lg"
              >
                <span>Join Community</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Link>
              <Link 
                to="/jobs" 
                className="group relative bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white/50 text-lg flex items-center gap-3"
              >
                <BriefcaseBusiness className="w-5 h-5" />
                <span>Browse Jobs</span>
              </Link>
            </div>
            
            {/* Quick Links Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {quickLinks.slice(0, 4).map((link, index) => (
                <Link 
                  key={index}
                  to={link.link}
                  className="group bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-4 transition-all duration-300 border border-white/10 hover:border-white/30"
                >
                  <div className="flex flex-col items-center text-center">
                    <link.icon className="w-8 h-8 text-blue-400 mb-2 group-hover:text-cyan-400 transition-colors" />
                    <div className="text-sm font-semibold text-white">{link.title}</div>
                    <div className="text-xs text-gray-400 mt-1">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Making a Difference Together</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">Our community of dedicated professionals is creating lasting impact across Kenya</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-xl`}>
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
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose LPA?</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">Unlock unprecedented opportunities for professional growth and community impact</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card group hover:scale-105 transition-all duration-300 text-center animate-fade-in bg-white"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 mb-6 transform group-hover:rotate-12 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Member Testimonials</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">Hear from professionals who have transformed their careers through LPA</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card bg-white p-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Diverse Expertise</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">Professionals from various sectors unite for collective impact</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div 
                key={index} 
                className="card group hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden animate-slide-up bg-white"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${sector.gradient} mb-6 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {sector.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">{sector.name}</h3>
                  <p className="text-gray-600">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTQwIDQwaDQwdjQwSDQwVjQweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Ready to Transform Lives?</h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 animate-fade-in">
            Join thousands of accomplished professionals making a lasting impact in communities across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/register" 
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 hover:-translate-y-2 transform text-lg animate-pulse-glow"
            >
              Get Started Today <ArrowRight className="w-6 h-6" />
            </Link>
            <Link 
              to="/events" 
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold py-5 px-12 rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white/50 text-lg"
            >
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
