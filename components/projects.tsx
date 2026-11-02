import { ExternalLink, Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "A comprehensive inventory management system with multi-role approval workflow. Handles status changes from day scholar to hostel with three-level approval system involving Class Adviser, HOD, and Principal.",
      image: "/Inventory.jpg?height=300&width=500",
      technologies: ["HTML5", "CSS3", "JavaScript", "Form Handling"],
      features: ["Multi-role System", "Workflow Management", "Role-based UI", "Form Validation"],
      liveUrl: "https://daytohost-portal-demo.com", // Replace with your actual live URL
      githubUrl: "https://github.com/tharun-mr/Inventory-Management-System", // Replace with your actual GitHub URL
      category: "Web Application",
    },
    {
      title: "@MysteryClueBot",
      description:
        "An interactive Telegram bot for treasure hunt events. Features progressive difficulty levels, clue-based progression, and real-time event management for engaging company events.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Telegram API", "Bot Framework"],
      features: ["Interactive Experience", "Progressive Difficulty", "Real-time Updates", "Event Management"],
      liveUrl: "https://t.me/MysteryClueBot", // Replace with your actual bot URL
      githubUrl: "https://github.com/tharun-mr/Telegram_BOT_treasurehunt", // Replace with your actual GitHub URL
      category: "Bot Development",
    },
  ]

  return (
    <section id="projects" className="py-12 lg:py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 lg:h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-3">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 w-full"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 w-full"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-4 lg:space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="text-blue-600 border-blue-600 text-xs lg:text-sm">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-3 lg:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-lg">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm lg:text-base">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs lg:text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm lg:text-base">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm lg:text-base"
                      >
                        <Code className="h-3 w-3 lg:h-4 lg:w-4 text-blue-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="bg-transparent w-full">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
