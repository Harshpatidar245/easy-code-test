const features = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <rect x="2" y="3" width="12" height="14" rx="2" fill="#7c5cbf" opacity="0.2" stroke="#7c5cbf" strokeWidth="1.4"/>
        <path d="M5 7h6M5 10h6M5 13h3" stroke="#7c5cbf" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M15 13l1.5 1.5L19 11" stroke="#7c5cbf" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Lifetime Access",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <circle cx="10" cy="7" r="4" fill="#7c5cbf" opacity="0.2" stroke="#7c5cbf" strokeWidth="1.4"/>
        <path d="M4 17c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#7c5cbf" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    label: "Industry-Level Capstone",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <rect x="2" y="4" width="16" height="13" rx="2" fill="#7c5cbf" opacity="0.2" stroke="#7c5cbf" strokeWidth="1.4"/>
        <path d="M6 9l2.5 2.5L14 7" stroke="#7c5cbf" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Structured Assignments",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <path d="M10 2a8 8 0 100 16A8 8 0 0010 2z" fill="#7c5cbf" opacity="0.2" stroke="#7c5cbf" strokeWidth="1.4"/>
        <path d="M10 6v4l2.5 2.5" stroke="#7c5cbf" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Doubt-Solving Support",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <path d="M10 17s-7-4-7-9a7 7 0 1114 0c0 5-7 9-7 9z" fill="#7c5cbf" opacity="0.2" stroke="#7c5cbf" strokeWidth="1.4"/>
        <path d="M10 10a2 2 0 100-4 2 2 0 000 4z" fill="#7c5cbf"/>
      </svg>
    ),
    label: "Career Preparation Toolkit",
  },
];

const CertificateImage = () => (
  <div className="relative w-full flex justify-center">
    {/* Purple glow */}
    <div
      className="absolute rounded-2xl blur-2xl"
      style={{
        inset: 0,
        background: "rgba(124,92,191,0.20)",
        transform: "scale(0.9) translateY(10px)",
      }}
    />

  <img
  src="/certificate.jpg"
  alt="Certificate"
  className="w-full max-w-xl rounded-2xl shadow-xl"
/>

  </div>
);

export default function WhySection() {
  return (
    <div
      className="w-full py-20 sm:py-32"
      style={{ background: "linear-gradient(135deg, #f3f0ff 0%, #faf9ff 100%)" }}
    >
      <div className="max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

        {/* Left — Features */}
        <div className="w-full min-w-0">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-10 tracking-tight leading-tight">
            Why <span style={{ color: "#7c5cbf" }}>EasyCode Academy?</span>
          </h2>

          <ul className="space-y-5">
            {features.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-purple-100 shadow-sm"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 [&>svg]:w-5 [&>svg]:h-5"
                  style={{ background: "#f0ebff", border: "1px solid #e2d9f7" }}
                >
                  {f.icon}
                </div>
                <span className="text-lg sm:text-xl font-semibold text-gray-700">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Certificate */}
        <div className="w-full flex items-center justify-center">
          <CertificateImage />
        </div>

      </div>
    </div>
  );
}