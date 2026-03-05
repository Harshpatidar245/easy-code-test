export default function WhyLearnSection() {
  const mentors = [
    {
      name: "Nikita Rai",
      role: "Senior Software Engineer & Career Mentor",
      specialization: "Full Stack & AI Applications",
      image: "NR",
      color: "bg-blue-100",
      highlights: [
        "6+ Years Experience",
        "Mentored 800+ Learners",
        "Expert in System Design & Python Optimization",
      ],
    },
    {
      name: "Mariyam Khatoon",
      role: "Data & AI Specialist | Career Strategist",
      specialization: "AI & Data Analytics expert",
      image: "MK",
      color: "bg-purple-100",
      highlights: [
        "AI & Data Analytics expert",
        "Specialized in AI & Data Pipelines",
        "Specializes portfolio building & interview prep",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-text-dark">
          Why Learn Python Using AI at{" "}
          <span className="text-primary">EasyCode Academy?</span>
        </h2>

        <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="bg-bg-light rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 ${mentor.color} rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-primary border-3 border-primary/30`}
                >
                  {mentor.image}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-dark">
                    {mentor.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-gray">
                    {mentor.role}
                  </p>
                  <p className="text-xs text-primary font-medium mt-1">
                    {mentor.specialization}
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {mentor.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 shrink-0">✓</span>
                    <span className="text-sm text-text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="bg-linear-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-xl">
            Register Now at ₹99{" "}
            <span className="line-through text-white/60 text-sm">₹999</span>
          </button>
        </div>
      </div>
    </section>
  );
}
