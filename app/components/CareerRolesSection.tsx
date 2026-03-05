export default function CareerRolesSection() {
  const roles = [
    { icon: "📊", title: "Data Analyst" },
    { icon: "🤖", title: "AI-Optimized Data Analysis" },
    { icon: "📈", title: "Data Visualization & Dashboards" },
    { icon: "💼", title: "Futures in Pilates" },
    { icon: "📄", title: "Resume via Visa or hr" },
    { icon: "📱", title: "WhatsApp | +91 XXXXXXXXXX" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-text-dark">
          Career Roles After{" "}
          <span className="text-primary">Python + AI Mastery</span>
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-bg-light rounded-xl p-4 sm:p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-lg shrink-0">
                {role.icon}
              </div>
              <span className="text-sm sm:text-base font-medium text-text-dark">
                {role.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
