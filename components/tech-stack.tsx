import { Badge } from "@/components/ui/badge"

export default function TechStack() {
  const technologies = {
    "Frontend Development": {
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Typescript", "Next.js", "Bootstrap"],
      color: "from-blue-500 to-cyan-500",
    },
    "Backend Development": {
      items: ["Python", "MySQL", "Database Design", "MongoDB"],
      color: "from-green-500 to-emerald-500",
    },
    "Tools & Platforms": {
      items: ["VS Code", "Git","GitHub", "XAMPP", "Canva", "Chrome DevTools", "Claude AI","Google Stitch"],
      color: "from-purple-500 to-pink-500",
    },
    "Currently Learning": {
      items: ["Node.js", "TypeScript", "Next.js","Docker"],
      color: "from-orange-500 to-red-500",
    },
  }

  return (
    <section id="tech-stack" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(technologies).map(([category, { items, color }], index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${color}`}></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {items.map((item, itemIndex) => (
                  <Badge
                    key={itemIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
