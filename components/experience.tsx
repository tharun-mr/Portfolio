"use client"

import { useState } from "react"
import { GraduationCap, Award, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CertificationsModal from "./certifications-modal"

export default function Experience() {
  const [showCertifications, setShowCertifications] = useState(false)

  const education = [
    {
      degree: "B.E - Computer Science and Engineering",
      institution: "K S Rangasamy College of Technology, Tiruchengode",
      duration: "Completed",
      cgpa: "7.28",
      status: "Completed",
      description: "Focusing on software development, data structures, algorithms, and web technologies.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Shri Vidhyabharathi Matric Higher Secondary School",
      duration: "Completed",
      cgpa: "67.67%",
      status: "Completed",
      description: "Strong foundation in mathematics and computer science fundamentals.",
    },
  ]

  const certifications = [
    {
      title: "Java Developer Certification",
      issuer: "Professional Certification",
      skills: ["Java", "OOP", "Software Development"],
      description: "Comprehensive certification covering Java programming and object-oriented principles.",
    },
    {
      title: "Data Structures and Algorithms using JAVA",
      issuer: "Technical Certification",
      skills: ["DSA", "Problem Solving", "Java"],
      description: "Advanced certification focusing on data structures and algorithms implementation.",
    },
    {
      title: "NPTEL - Industry 4.0 and IoT",
      issuer: "NPTEL",
      skills: ["Industry 4.0", "IoT", "Digital Transformation"],
      description: "Comprehensive course on Industry 4.0 concepts and IoT technologies.",
    },
  ]

  return (
    <>
      <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Education &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My academic journey and professional certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{edu.degree}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.description}</p>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === "Current"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        }`}
                      >
                        {edu.status}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        {edu.duration}
                      </div>
                      <div className="font-semibold text-blue-600 dark:text-blue-400">{edu.cgpa}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Award className="h-6 w-6 text-purple-600" />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{cert.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{cert.issuer}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{cert.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* View More Button */}
                <div className="text-center pt-4">
                  <Button
                    onClick={() => setShowCertifications(true)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Award className="h-5 w-5 mr-2" />
                    View More Certifications
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    Click to see detailed certificates with verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Modal */}
      <CertificationsModal isOpen={showCertifications} onClose={() => setShowCertifications(false)} />
    </>
  )
}
