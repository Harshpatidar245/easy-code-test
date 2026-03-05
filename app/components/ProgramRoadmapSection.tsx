interface CardProps {
  icon: string;
  title: string;
  bullets: string[];
}

const CheckBadge = () => (
  <div
    className="absolute -top-1 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-md"
    style={{ background: "#7c5cbf" }}
  >
    <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3">
      <path
        d="M2.5 5l1.8 1.8L7.5 3"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const Card = ({ icon, title, bullets }: CardProps) => (
  <div className="bg-white rounded-3xl px-8 py-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center max-w-[320px] mx-auto w-full group">
    {/* Icon Container */}
    <div className="relative mb-8 transform group-hover:scale-110 transition-transform duration-500">
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-gradient-to-r from-purple-600 to-purple-700 group-hover:from-purple-700 group-hover:to-purple-800 transition-all duration-500 shadow-xl text-white">
        {icon}
      </div>
      <CheckBadge />
    </div>

    {/* Title */}
    <h3 className="text-xl font-extrabold text-gray-900 leading-tight mb-6 min-h-[56px] flex items-center justify-center px-2">
      {title}
    </h3>

    {/* Divider */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />

    {/* Bullets */}
    <ul className="w-full space-y-4">
      {bullets.map((b, i) => (
        <li
          key={i}
          className="flex items-start justify-start gap-3 text-sm text-gray-600 font-semibold leading-relaxed"
        >
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
          <span className="text-left">{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function ProgramRoadmapSection() {
  const cards = [
    {
      icon: "📚",
      title: "Mentor-Led Structured Learning",
      items: [
        "Core & Adv. Modules",
        "Hands-On Mini Projects",
        "Curated Study Resources",
      ],
    },
    {
      icon: "⚙️",
      title: "Practical Skills",
      items: ["Debugging techniques", "Databases", "API integration"],
    },
    {
      icon: "🏭",
      title: "Industry-Level Capstone",
      items: [
        "Deploying techniques",
        "Building real-world apps",
        "Code optimization",
      ],
    },
    {
      icon: "📝",
      title: "Structured Assignments",
      items: ["Practical Exercises", "Portfolio Completion", "Capstone in Real"],
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Program <span className="text-purple-600">Roadmap</span>
          </h2>
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-bold tracking-wide uppercase">
            30-Day Structured Plan
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((c, i) => (
            <Card
              key={i}
              icon={c.icon}
              title={c.title}
              bullets={c.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



