export default function BonusesSection() {
  const bonuses = [
    {
      icon: "🎬",
      title: "Recordings & Projects",
      description: "Premium on-demand access",
    },
    {
      icon: "🏭",
      title: "Industry Level Capstone",
      description: "Production Certifications",
    },
    {
      icon: "📋",
      title: "Structured Assignments",
      description: "Real-World Exercises",
    },
    {
      icon: "📜",
      title: "E-Certificate",
      description: "Real Business Dataset Project",
    },
  ];

  const companies = [
    "amazon",
    "Google",
    "TCS",
    "Capgemini",
    "Infosys",
    "wCOOS",
    "cisco",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-text-dark">
          Unlock Bonuses Worth{" "}
          <span className="text-primary">Rs. 10,500</span>
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mx-auto group-hover:scale-110 transition-transform">
                {bonus.icon}
              </div>
              <h3 className="mt-3 sm:mt-4 font-bold text-text-dark text-sm sm:text-base">
                {bonus.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-text-gray">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company logos */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-6 border-t border-b border-border">
          {companies.map((company) => (
            <span
              key={company}
              className="text-text-light font-bold text-lg sm:text-xl tracking-wider hover:text-primary transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
