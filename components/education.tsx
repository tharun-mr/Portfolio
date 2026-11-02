import { GraduationCap, Calendar, Award } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "B.E - Computer Science and Engineering",
      institution: "K S Rangasamy College of Technology, Tiruchengode",
      duration: "May 2026 - Completed ",
      cgpa: "7.28",
      status: "COMPLETED",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Shri Vidhyabharathi Matric Higher Secondary School, Sakkarampalayam",
      duration: "Completed",
      cgpa: "67.67%",
      status: "COMPLETED",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gray-900/20">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-2">
            <span className="text-red-400">$</span> cat /etc/education.log
          </h2>
          <div className="h-1 w-20 bg-green-400"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900/50 border border-green-400/30 rounded-lg overflow-hidden">
              <div className="bg-gray-800/50 px-6 py-3 border-b border-green-400/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-green-400" />
                    <span className="text-green-400/60 font-mono">EDUCATION_RECORD_{index + 1}</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded text-xs font-mono ${
                      edu.status === "IN_PROGRESS"
                        ? "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                        : "bg-green-400/20 text-green-400 border border-green-400/30"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-green-400 mb-2">{edu.degree}</h3>
                    <p className="text-green-400/80 mb-4">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-green-400/60">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono text-sm">{edu.duration}</span>
                    </div>
                  </div>

                  <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-green-400/60 mb-2">
                      <Award className="h-4 w-4" />
                      <span className="font-mono text-sm">SCORE</span>
                    </div>
                    <div className="text-2xl font-bold text-green-400 font-mono">{edu.cgpa}</div>
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
