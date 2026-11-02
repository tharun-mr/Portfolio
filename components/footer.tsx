import { Code2, Heart, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Bot Development",
    "UI/UX Design",
    "Performance Optimization",
  ]

  return (
    <footer className="bg-gray-900 text-white py-16 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">Tharun M R</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm lg:text-base">
              Computer Science student and web developer passionate about creating amazing digital experiences and
              solving real-world problems through technology.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/tharun-mr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/tharunmyilsamy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm lg:text-base"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center gap-2 text-sm lg:text-base">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs lg:text-sm font-medium">Email</p>
                  <a
                    href="mailto:tharunmr007@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors text-sm lg:text-base break-all"
                  >
                    tharunmr007@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs lg:text-sm font-medium">Phone</p>
                  <a
                    href="tel:+918015758735"
                    className="text-white hover:text-green-400 transition-colors text-sm lg:text-base"
                  >
                    +91 8015758735
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs lg:text-sm font-medium">Location</p>
                  <p className="text-white text-sm lg:text-base">Tiruchengode, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 flex items-center gap-2 text-center md:text-left text-sm lg:text-base">
              © {currentYear} Tharun M R. Built with <Heart className="h-4 w-4 text-red-500" /> using Next.js & Tailwind
              CSS
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
