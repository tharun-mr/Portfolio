"use client"
import { X, Download, FileText, Calendar, MapPin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumeData = {
    name: "Tharun M R",
    title: "Computer Science Student & Web Developer",
    email: "tharunmr007@gmail.com",
    phone: "+91 8015758735",
    location: "Tiruchengode, Tamil Nadu, India",
    summary:
      "Passionate Computer Science student with strong foundation in web development, programming, and problem-solving. Experienced in modern web technologies and committed to continuous learning.",

    education: [
      {
        degree: "B.E - Computer Science and Engineering",
        institution: "K S Rangasamy College of Technology, Tiruchengode",
        duration: "Dec 2024 - Present",
        cgpa: "6.81 CGPA (till 5th Semester)",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Shri Vidhyabharathi Matric Higher Secondary School",
        duration: "Completed",
        percentage: "67.67%",
      },
    ],

    skills: {
      Frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
      Backend: ["Python", "Java", "PHP", "MySQL"],
      Tools: ["VS Code", "Git", "XAMPP", "Chrome DevTools"],
      Design: ["Canva", "Responsive Design", "UI/UX Principles"],
    },

    projects: [
      {
        name: "Portfolio Website",
        description: "Responsive portfolio with modern design, contact form, and database integration",
        technologies: ["HTML5", "CSS3", "JavaScript", "Database"],
      },
      {
        name: "DaytoHost Portal",
        description: "Student management system with multi-role approval workflow",
        technologies: ["HTML5", "CSS3", "JavaScript", "Form Handling"],
      },
      {
        name: "@MysteryClueBot",
        description: "Interactive Telegram bot for treasure hunt events",
        technologies: ["Python", "Telegram API", "Bot Framework"],
      },
    ],

    certifications: [
      "Java Developer Certification",
      "Data Structures and Algorithms using JAVA",
      "NPTEL - Introduction to Industry 4.0 and Industrial Internet of Things",
    ],
  }

  const handleDownload = () => {
    // Replace 'resume.pdf' with your actual resume file path
    const resumeUrl = "/resume.pdf" // Put your resume.pdf file in the public folder
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Tharun_MR_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600">
          <div>
            <h2 className="text-2xl font-bold text-white">Resume Preview</h2>
            <p className="text-blue-100">Tharun M R - Computer Science Student & Web Developer</p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={handleDownload} className="bg-white/20 hover:bg-white/30 text-white border-white/20">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Personal Info */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{resumeData.name}</h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">{resumeData.title}</p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{resumeData.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{resumeData.phone}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{resumeData.location}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Professional Summary</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{resumeData.summary}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Education */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Education
                </h3>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-blue-600 pl-4">
                      <h4 className="font-semibold text-gray-800 dark:text-white">{edu.degree}</h4>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1">
                        <Calendar className="h-3 w-3" />
                        <span>{edu.duration}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{edu.cgpa || edu.percentage}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Technical Skills</h3>
                <div className="space-y-3">
                  {Object.entries(resumeData.skills).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm mb-2">{category}:</h4>
                      <div className="flex flex-wrap gap-1">
                        {skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Projects */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h3>
                <div className="space-y-4">
                  {resumeData.projects.map((project, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-800 dark:text-white">{project.name}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Certifications</h3>
                <div className="space-y-2">
                  {resumeData.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="mt-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Download Full Resume</h3>
            <p className="mb-4">Get the complete PDF version with all details</p>
            <Button onClick={handleDownload} className="bg-white text-blue-600 hover:bg-gray-100">
              <Download className="h-4 w-4 mr-2" />
              Download PDF Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
