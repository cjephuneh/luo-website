import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-accent-500">LPA</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering Luo professionals for community development and growth through collaboration, innovation, and impact.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-accent-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold text-lg mb-6 text-accent-500">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {['About Us', 'Events', 'Funding', 'Reports'].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-accent-500 transition-colors hover:translate-x-2 inline-block duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold text-lg mb-6 text-accent-500">Sectors</h4>
            <ul className="space-y-3 text-gray-400">
              {['Healthcare', 'Education', 'Business & Finance', 'Technology'].map((sector, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                  {sector}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold text-lg mb-6 text-accent-500">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3 hover:text-accent-500 transition-colors">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>info@luoprofessionals.or.ke</span>
              </li>
              <li className="flex items-start gap-3 hover:text-accent-500 transition-colors">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-start gap-3 hover:text-accent-500 transition-colors">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Luo Professionals Association. All rights reserved. | 
            <Link to="/privacy" className="hover:text-accent-500 transition-colors ml-2">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-accent-500 transition-colors ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
