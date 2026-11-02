import { Award, CheckCircle } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Java Developer Certification",
      category: "PROGRAMMING",
      skills: ["Java", "Object-Oriented Programming", "Software Development"],
      status: "VERIFIED",
    },
    {
      title: "Data Structures and Algorithms using JAVA",
      category: "COMPUTER_SCIENCE",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Java"],
      status: "VERIFIED",
    },
    {
      title: "NPTEL - Introduction to Industry 4.0 and Industrial Internet of Things",
      category: "TECHNOLOGY",
      skills: ["Industry 4.0", "IoT", "Industrial Technology", "Digital Transformation"],
      status: "VERIFIED",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-2">
            <span className="text-red-400">$</span> grep -r "CERTIFIED" ./achievements/
          </h2>
          <div className="h-1 w-20 bg-green-400"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-900/50 border border-green-400/30 rounded-lg overflow-hidden">
              <div className="bg-gray-800/50 px-4 py-3 border-b border-green-400/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-yellow-400" />
                    <span className="text-green-400/60 font-mono text-sm">{cert.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-green-400 font-mono text-xs">{cert.status}</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-green-400 mb-4 leading-tight">{cert.title}</h3>

                <div>
                  <h4 className="text-green-400/60 font-mono mb-3 text-sm">
                    <span className="text-red-400">[</span>SKILLS_COVERED<span className="text-red-400">]</span>
                  </h4>
                  <div className="space-y-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <span className="text-red-400">▶</span>
                        <span className="text-green-400/80 text-sm font-mono">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
