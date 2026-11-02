import { Code, Palette, Zap, Users } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful and intuitive user interfaces with attention to detail.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and excellent user experience.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science student and web developer who loves creating digital experiences that make
            a difference. Currently pursuing my B.E in Computer Science Engineering while building real-world projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I started my journey in web development with a curiosity about how websites work. What began as simple
                HTML pages has evolved into a passion for creating full-stack applications using modern technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently, I'm enhancing my problem-solving skills by learning data structures and algorithms while
                building projects that solve real-world problems. I believe in continuous learning and staying updated
                with the latest web technologies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">7.81</div>
            <div className="text-gray-600 dark:text-gray-400">Current CGPA</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Built</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-400">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  )
}
