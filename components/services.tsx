import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and responsive design principles.",
      features: ["Responsive Design", "SEO Optimization", "Performance Focused", "Cross-browser Compatible"],
    },
    {
      icon: Smartphone,
      title: "Frontend Development",
      description:
        "Creating beautiful, interactive user interfaces with HTML5, CSS3, JavaScript, and modern frameworks.",
      features: ["React.js", "Tailwind CSS", "Interactive UI", "Mobile-first Design"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Server-side development with Python, Java, PHP, and database integration for robust applications.",
      features: ["API Development", "Database Design", "Server Configuration", "Data Management"],
    },
    {
      icon: Code,
      title: "Bot Development",
      description: "Custom chatbots and automation solutions for businesses and events using Python and various APIs.",
      features: ["Telegram Bots", "Interactive Features", "Event Management", "Real-time Updates"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design approach focusing on creating intuitive and visually appealing interfaces.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing websites and applications for speed, accessibility, and search engine rankings.",
      features: ["Speed Optimization", "SEO Enhancement", "Accessibility", "Core Web Vitals"],
    },
  ]

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            Services I{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive web development and design services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{service.description}</p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
