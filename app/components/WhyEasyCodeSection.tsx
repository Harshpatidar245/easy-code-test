export default function WhyEasyCodeSection() {
  const features = [
    { icon: "♾️", text: "Lifetime Access" },
    { icon: "🏭", text: "Industry-Level Capstone" },
    { icon: "📝", text: "Structured Assignments" },
    { icon: "❓", text: "Doubt-Solving Support" },
    { icon: "💼", text: "Career Preparation Toolkit" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-text-dark">
          Why <span className="text-primary">EasyCode Academy?</span>
        </h2>

        <div className="mt-10 sm:mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Features list */}
          <div className="space-y-4 sm:space-y-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 sm:gap-4 bg-bg-light rounded-xl p-4 sm:p-5 border border-border hover:border-primary/30 transition-all hover:shadow-sm"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-lg shrink-0">
                  {feature.icon}
                </div>
                <span className="text-sm sm:text-base font-medium text-text-dark">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Certificate Preview */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl p-6 sm:p-8 border-2 border-primary/20 shadow-lg">
              <div className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-sm">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">&lt;/&gt;</span>
                  </div>
                  <span className="text-sm font-bold text-primary">EasyCode</span>
                </div>
                <p className="text-[10px] sm:text-xs text-text-gray uppercase tracking-wider">
                  Certificate of Completion
                </p>
                <div className="mt-4 sm:mt-6">
                  <p className="text-2xl sm:text-3xl font-script text-text-dark italic">
                    John Doe
                  </p>
                </div>
                <div className="mt-4 w-20 h-[1px] bg-primary/30 mx-auto" />
                <p className="mt-2 text-[10px] text-text-light">
                  has successfully completed the Python + AI Mastery Program
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
