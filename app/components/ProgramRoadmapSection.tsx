export default function ProgramRoadmapSection() {
  const phases = [
    {
      icon: "📚",
      title: "Mentor-Led Structured Learning",
      color: "bg-purple-50 border-purple-200",
      items: [
        "Core & Adv. Modules",
        "Hands-On Mini Projects",
        "Curated Study Resources",
      ],
    },
    {
      icon: "⚙️",
      title: "Practical Skills",
      subtitle: "Functions & Modules",
      color: "bg-blue-50 border-blue-200",
      items: [
        "Debugging techniques",
        "Databases",
        "API integration",
      ],
    },
    {
      icon: "🏭",
      title: "Industry-Level Capstone",
      color: "bg-green-50 border-green-200",
      items: [
        "Deploying techniques",
        "Building real-world apps",
        "Code optimization",
      ],
    },
    {
      icon: "📝",
      title: "Structured Assignments",
      color: "bg-orange-50 border-orange-200",
      items: [
        "Practical Exercises",
        "Portfolio Completion",
        "Capstone in Real",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-dark">
            Program <span className="text-primary">Roadmap</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-text-gray">
            (30-Day Structured Plan)
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {/* Connecting line - visible on lg screens */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-linear-to-r from-purple-300 via-blue-300 to-green-300" />

          {phases.map((phase, idx) => (
            <div
              key={idx}
              className={`${phase.color} rounded-2xl p-5 sm:p-6 border hover:shadow-lg transition-all relative`}
            >
              {/* Step indicator */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm border border-border mx-auto lg:mx-0">
                {phase.icon}
              </div>

              <h3 className="mt-3 sm:mt-4 font-bold text-text-dark text-sm sm:text-base text-center lg:text-left">
                {phase.title}
              </h3>
              {phase.subtitle && (
                <p className="text-xs text-text-gray text-center lg:text-left">
                  {phase.subtitle}
                </p>
              )}

              <ul className="mt-3 space-y-2">
                {phase.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs sm:text-sm text-text-dark"
                  >
                    <span className="text-primary mt-0.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
