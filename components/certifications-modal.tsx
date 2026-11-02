"use client"
import { X, Award, ExternalLink, Download, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CertificationsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CertificationsModal({ isOpen, onClose }: CertificationsModalProps) {
  const certifications = [
    {
      title: "Java Developer Certification",
      issuer: "Professional Certification Authority",
      date: "2024",
      description:
        "Comprehensive certification covering Java programming, object-oriented programming principles, and software development best practices.",
      skills: ["Java Programming", "Object-Oriented Programming", "Software Development", "Problem Solving"],
      credentialId: "JDC-2024-001",
      image: "/placeholder.svg?height=200&width=300",
      verifyUrl: "https://verify.certification-authority.com/JDC-2024-001", // Replace with actual verification URL
      downloadUrl: "https://certificates.example.com/java-developer-cert.pdf", // Replace with actual download URL
      status: "Verified",
    },
    {
      title: "Data Structures and Algorithms using JAVA",
      issuer: "Technical Education Institute",
      date: "2024",
      description:
        "Advanced certification focusing on data structures, algorithms, and their implementation in Java for efficient problem-solving.",
      skills: ["Data Structures", "Algorithms", "Java Implementation", "Problem Solving", "Time Complexity"],
      credentialId: "DSA-JAVA-2024-002",
      image: "/placeholder.svg?height=200&width=300",
      verifyUrl: "https://verify.tech-institute.com/DSA-JAVA-2024-002", // Replace with actual verification URL
      downloadUrl: "https://certificates.example.com/dsa-java-cert.pdf", // Replace with actual download URL
      status: "Verified",
    },
    {
      title: "NPTEL - Introduction to Industry 4.0 and Industrial Internet of Things",
      issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
      date: "2024",
      description:
        "Comprehensive course covering Industry 4.0 concepts, IoT technologies, and their applications in modern industrial systems.",
      skills: [
        "Industry 4.0",
        "Internet of Things (IoT)",
        "Industrial Technology",
        "Digital Transformation",
        "Smart Manufacturing",
      ],
      credentialId: "NPTEL-IOT-2024-003",
      image: "/placeholder.svg?height=200&width=300",
      verifyUrl: "https://nptel.ac.in/verify/NPTEL-IOT-2024-003", // Replace with actual NPTEL verification URL
      downloadUrl: "https://certificates.nptel.ac.in/industry-4.0-iot-cert.pdf", // Replace with actual download URL
      status: "Verified",
    },
    {
      title: "Frontend Web Development",
      issuer: "Web Development Institute",
      date: "2023",
      description:
        "Comprehensive certification in modern frontend development covering HTML5, CSS3, JavaScript, and React.js frameworks.",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "Web APIs"],
      credentialId: "FWD-2023-004",
      image: "/placeholder.svg?height=200&width=300",
      verifyUrl: "https://verify.webdev-institute.com/FWD-2023-004", // Replace with actual verification URL
      downloadUrl: "https://certificates.example.com/frontend-web-dev-cert.pdf", // Replace with actual download URL
      status: "Verified",
    },
    {
      title: "Python Programming Fundamentals",
      issuer: "Programming Academy",
      date: "2023",
      description:
        "Foundation certification in Python programming covering syntax, data structures, and application development.",
      skills: ["Python Programming", "Data Structures", "File Handling", "Web Scraping", "API Integration"],
      credentialId: "PPF-2023-005",
      image: "/placeholder.svg?height=200&width=300",
      verifyUrl: "https://verify.programming-academy.com/PPF-2023-005", // Replace with actual verification URL
      downloadUrl: "https://certificates.example.com/python-fundamentals-cert.pdf", // Replace with actual download URL
      status: "Verified",
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-600 to-pink-600">
          <div>
            <h2 className="text-2xl font-bold text-white">My Professional Certifications</h2>
            <p className="text-purple-100">Verified credentials and achievements</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Certificate Image */}
                  <div className="md:col-span-1">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        className="w-full h-32 object-cover rounded"
                      />
                      <div className="mt-4 text-center">
                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 mb-2">
                          <CheckCircle className="h-4 w-4" />
                          <span className="text-sm font-medium">{cert.status}</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">ID: {cert.credentialId}</p>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{cert.title}</h3>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">{cert.issuer}</p>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{cert.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{cert.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Skills & Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify Certificate
                        </Button>
                      </a>
                      <a href={cert.downloadUrl} target="_blank" rel="noopener noreferrer" download>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{certifications.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Total Certifications</div>
            </div>
            <div className="text-center bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">2024</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Latest Year</div>
            </div>
            <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Skills Covered</div>
            </div>
            <div className="text-center bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Verified</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
            <p className="mb-4">I'm always expanding my skills and earning new certifications</p>
            <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              <Award className="h-4 w-4 mr-2" />
              View Latest Updates
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
