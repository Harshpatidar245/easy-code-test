interface BonusItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Company {
  name: string;
  logo: React.ReactNode;
}

const bonuses: BonusItem[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect x="2" y="3" width="15" height="18" rx="2" fill="#fff" opacity="0.25" />
        <rect x="2" y="3" width="15" height="18" rx="2" stroke="#fff" strokeWidth="1.5" />
        <path d="M6 8h7M6 12h7M6 16h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="19" cy="18" r="4" fill="#fff" />
        <path d="M17.5 18l1 1 2-2" stroke="#7c5cbf" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Recordings &\nProjects",
    desc: "+ Rewatch sessions anytime",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#fff" opacity="0.25" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Industry\nLevel Capstone",
    desc: "+ Professional Certifications",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="16" rx="2" fill="#fff" opacity="0.25" stroke="#fff" strokeWidth="1.5" />
        <path d="M8 10l2.5 2.5L16 8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Structured\nAssignments",
    desc: "+ Real World Exercises",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 15c4 0 7-1.5 7-4V7c0-2.5-3-4-7-4S5 4.5 5 7v4c0 2.5 3 4 7 4z" fill="#fff" opacity="0.25" stroke="#fff" strokeWidth="1.5" />
        <path d="M5 11v3c0 2.5 3 4 7 4s7-1.5 7-4v-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 19v2M9 21h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "E-Certificate",
    desc: "+ Real Business Capstone Project",
  },
];

const companies: Company[] = [
  {
    name: "amazon",
    logo: (
      <svg viewBox="0 0 80 24" fill="none" className="h-6">
        <text x="0" y="18" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="18" fill="#1a1a2e">amazon</text>
        <path d="M10 20c5 2 15 2 20 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Google",
    logo: (
      <svg viewBox="0 0 60 24" fill="none" className="h-6">
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18">
          <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "TCS",
    logo: (
      <svg viewBox="0 0 40 24" className="h-6">
        <text x="0" y="18" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="18" fill="#1a1a2e">
          <tspan fill="#e63946">t</tspan><tspan fill="#1a1a2e">cs</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "Capgemini",
    logo: (
      <svg viewBox="0 0 110 24" className="h-6">
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="#1a1a2e">Capgemini</text>
        <circle cx="102" cy="11" r="5" fill="#12ABDB" />
      </svg>
    ),
  },
  {
    name: "Infosys",
    logo: (
      <svg viewBox="0 0 75 24" className="h-6">
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#007CC3">infy</text>
        <text x="32" y="18" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="16" fill="#1a1a2e">sys</text>
      </svg>
    ),
  },
  {
    name: "wCOOS",
    logo: (
      <svg viewBox="0 0 70 24" className="h-6">
        <text x="0" y="18" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="16" fill="#e63946">w</text>
        <text x="14" y="18" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="16" fill="#1a1a2e">COOS</text>
      </svg>
    ),
  },
  {
    name: "Cisco",
    logo: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 50 20" className="h-6">
          {[0, 6, 12, 18, 24, 30, 36].map((x, i) => (
            <rect key={i} x={x} y={i === 0 || i === 6 ? 10 : i === 1 || i === 5 ? 6 : i === 2 || i === 4 ? 2 : 0} width="3" height={i === 3 ? 12 : i === 2 || i === 4 ? 10 : i === 1 || i === 5 ? 8 : 6} rx="1" fill="#e63946" />
          ))}
        </svg>
        <span className="font-bold text-gray-800 text-lg">cisco</span>
      </div>
    ),
  },
];

const BonusCard = ({ icon, title, desc }: BonusItem) => (
  <div
    className="flex items-start gap-5 bg-white rounded-3xl px-8 py-10 shadow-sm border border-purple-50 group hover:shadow-xl transition-all duration-500"
  >
    <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center p-3 transform group-hover:scale-110 transition-transform duration-500 shadow-md" style={{ background: "#7c5cbf" }}>
      {icon}
    </div>
    <div className="flex flex-col justify-center">
      <p className="text-xl font-extrabold leading-tight text-gray-900 whitespace-pre-line mb-3 tracking-tight">{title}</p>
      <p className="text-sm text-gray-600 font-semibold leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function BonusesSection() {
  return (
    <section className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="w-full rounded-[3rem] px-8 py-16 sm:px-12 sm:py-24" style={{ background: "linear-gradient(135deg, #fdfcff 0%, #faf9ff 100%)" }}>
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Unlock Bonuses Worth <span className="text-purple-600">Rs. 10,500</span>
            </h2>
            <div className="mt-8 h-1 w-24 bg-purple-600 mx-auto rounded-full opacity-20" />
          </div>

          {/* Bonus cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {bonuses.map((b, i) => (
              <BonusCard key={i} {...b} />
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full mb-12 bg-gradient-to-r from-transparent via-purple-100 to-transparent" />

          {/* Company logos band — static */}
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 px-4">
              {companies.map((c, i) => (
                <div key={i} className="flex items-center justify-center transition-all duration-300 cursor-default opacity-80 hover:opacity-100 transform hover:scale-110">
                  {c.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



