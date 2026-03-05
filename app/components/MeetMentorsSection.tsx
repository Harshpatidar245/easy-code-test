export default function MeetMentorsSection() {
  const mentors = [
    {
      name: "Nikita Rai",
      role: "Senior Software Engineer & Career Mentor",
      specialization: "Full Stack & AI Applications",
      initials: "NR",
      color: "bg-blue-100",
      highlights: [
        "5+ years in product-based companies",
        "Guided 1,000+ students",
        "Expert in real-world system design",
      ],
    },
    {
      name: "Mariyam Khatoon",
      role: "Data & AI Specialist | Career Strategist",
      specialization: "AI & Data Analytics expert",
      initials: "MK",
      color: "bg-purple-100",
      highlights: [
        "AI & Data Analytics expert",
        "Mentored working professionals",
        "Specializes portfolio building & interview prep",
      ],
    },
  ];

  const stats = [
    { value: "15+", label: "In-Demand Courses" },
    { value: "200+", label: "Learners Trained" },
    { value: "500+", label: "Doubts Solved" },
    { value: "50+", label: "Real Projects Built" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-b from-primary-light/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-dark">
            Meet Your <span className="text-primary">Mentors</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-text-gray">
            Senior Software Engineer & Career Mentor Program
          </p>
          <p className="text-xs sm:text-sm text-text-light">
            With Real-World Projects & Career Support
          </p>
        </div>

        {/* Mentor Cards */}
        <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-border hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 ${mentor.color} rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-primary border-4 border-primary/20`}
                >
                  {mentor.initials}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-dark">
                    {mentor.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-gray">{mentor.role}</p>
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

        {/* Stats */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm border border-border hover:border-primary/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-text-gray mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
