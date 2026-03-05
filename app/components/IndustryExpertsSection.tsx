export default function IndustryExpertsSection() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Coding Assistance",
      description: "Generate Python code in seconds",
      color: "bg-purple-50",
    },
    {
      icon: "🎓",
      title: "No Prior Coding Required",
      description: "Beginner-friendly structured learning",
      color: "bg-blue-50",
    },
    {
      icon: "📊",
      title: "Real-World Case Studies",
      description: "Work on production-style datasets",
      color: "bg-green-50",
    },
    {
      icon: "💼",
      title: "Career-Focused Training",
      description: "Interview prep + Portfolio guidance",
      color: "bg-orange-50",
    },
    {
      icon: "🐞",
      title: "Debugging Python Code",
      description: "NETLAA Tools",
      color: "bg-red-50",
    },
    {
      icon: "🏆",
      title: "Python Interview Quest Practice",
      description: "Real Business Dataset Project",
      color: "bg-yellow-50",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-dark">
            Learn from <span className="text-primary">Industry Experts</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-gray">
            Generate Python code in seconds
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`${feature.color} rounded-2xl p-5 sm:p-6 border border-border hover:shadow-md transition-all hover:-translate-y-1 group`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-text-dark text-sm sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-gray mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <button className="bg-primary hover:bg-primary-dark text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all shadow-lg shadow-primary/30 hover:shadow-xl flex items-center gap-2 mx-auto">
            Reserve Your Seat Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
