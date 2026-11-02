"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Phone, ExternalLink, Download, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import CertificationsModal from "./certifications-modal"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCertifications, setShowCertifications] = useState(false)

  const codeSnippet = `const developer = {
  name: "Tharun M R",
  role: "Web Developer",
  skills: ["JavaScript", "Python", "React.js", "TypeScript"],
  passion: "Building amazing web experiences",
  status: "Available for opportunities"
};

console.log(developer.passion);`

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < codeSnippet.length) {
          setDisplayText(codeSnippet.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          // Reset for loop after a pause
          setTimeout(() => {
            setDisplayText("")
            setCurrentIndex(0)
          }, 2000) // 2 second pause before restarting
        }
      },
      currentIndex < codeSnippet.length ? 50 : 0,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, codeSnippet])

  const handleDirectDownload = () => {
    // Direct download without modal
    const resumeUrl = "resume.pdf" 
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Tharun_MR_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Desktop and Mobile */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                  👋 Hello, I'm a Web Developer and Designer
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Tharun M R
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light">
                  Computer Science Student & Web Developer
                </p>

                <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Passionate about creating beautiful, functional, and user-friendly web applications. Specializing in
                  modern JavaScript frameworks and responsive design.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 min-h-[48px]"
                >
                  <a href="#projects" className="flex items-center justify-center gap-2">
                    View My Work
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="min-h-[48px] bg-transparent">
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    Get In Touch
                  </a>
                </Button>
              </div>

              {/* Additional Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="min-h-[48px] bg-transparent w-full sm:w-auto"
                  onClick={handleDirectDownload}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="min-h-[48px] bg-transparent w-full sm:w-auto"
                  onClick={() => setShowCertifications(true)}
                >
                  <Award className="h-4 w-4 mr-2" />
                  View Certifications
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <span className="text-gray-500 dark:text-gray-400 text-sm lg:text-base">Connect with me:</span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/tharun-mr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tharunmyilsamy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:tharunmr007@gmail.com"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href="tel:+918015758735"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Code Editor */}
            <div className="relative order-1 lg:order-2">
              <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700 max-w-lg mx-auto lg:max-w-none">
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono">developer.js</div>
                  <div className="w-6"></div>
                </div>

                {/* Code Content */}
                <div className="p-4 lg:p-6 font-mono text-xs lg:text-sm">
                  <pre className="text-gray-300 leading-relaxed overflow-x-auto">
                    <code>
                      {displayText}
                      <span className="animate-pulse bg-blue-400 w-2 h-4 lg:h-5 inline-block ml-1"></span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* Floating Elements - Hidden on mobile */}
              <div className="hidden lg:block absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="hidden lg:block absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <CertificationsModal isOpen={showCertifications} onClose={() => setShowCertifications(false)} />
    </>
  )
}
