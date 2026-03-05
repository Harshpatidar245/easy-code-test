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

    {/* The certificate card rendered as a visual */}
    <div
      className="relative rounded-2xl overflow-hidden w-full max-w-[560px]"
      style={{
        width: "min(100%, 560px)",
        background: "#fff",
        border: "2.5px solid #c4b5e8",
        boxShadow: "0 10px 36px rgba(124,92,191,0.20)",
      }}
    >
      {/* Top purple strip */}
      <div style={{ height: 6, background: "linear-gradient(90deg, #7c5cbf, #a78bda)" }} />

      <div className="px-5 py-4">
        {/* Header row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#7c5cbf" }}>
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                <rect x="3" y="4" width="5" height="7" rx="1" fill="#fff" opacity="0.85"/>
                <rect x="10" y="4" width="5" height="7" rx="1" fill="#fff" opacity="0.5"/>
                <rect x="3" y="13" width="12" height="2" rx="1" fill="#fff" opacity="0.6"/>
              </svg>
            </div>
            <div>
              <p className="font-black leading-none text-xs" style={{ color: "#7c5cbf" }}>EasyCode</p>
              <p className="leading-none font-light text-gray-400" style={{ fontSize: 9 }}>academy</p>
            </div>
          </div>
          {/* Seal */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #7c5cbf, #a78bda)", boxShadow: "0 2px 8px rgba(124,92,191,0.35)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 2l2 6h6l-5 3.5 2 6L12 14l-5 3.5 2-6L4 8h6z" fill="#fff" opacity="0.9"/>
            </svg>
          </div>
        </div>

        {/* Title */}
        <p className="text-center tracking-widest uppercase font-semibold text-gray-400 mb-2" style={{ fontSize: 7.5 }}>
          Certificate of Completion
        </p>

        {/* Decorative line */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #c4b5e8, transparent)", marginBottom: 10 }} />

        {/* Recipient */}
        <div className="text-center mb-3">
          <p className="text-gray-400 mb-1" style={{ fontSize: 8 }}>This is proudly presented to</p>
          <p
            className="font-bold text-gray-800"
            style={{ fontSize: 20, fontFamily: "Georgia, serif", fontStyle: "italic", letterSpacing: "-0.3px" }}
          >
            John Doe
          </p>
          <div className="w-20 h-0.5 mx-auto mt-1.5 rounded" style={{ background: "linear-gradient(90deg, #7c5cbf, #a78bda)" }} />
        </div>

        {/* Body text */}
        <p className="text-center text-gray-500 mb-1" style={{ fontSize: 7.5 }}>
          For successfully completing the course
        </p>
        <p className="text-center font-bold mb-4" style={{ fontSize: 9, color: "#7c5cbf" }}>
          Full Stack Web Development
        </p>

        {/* Signatures */}
        <div className="flex items-end justify-between px-1">
          {[{ role: "Director" }, { role: "Instructor" }].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <svg viewBox="0 0 50 18" className="w-12 h-3.5">
                <path
                  d={i === 0 ? "M4 13 Q14 2 24 9 Q34 16 44 4" : "M4 10 Q12 2 20 10 Q28 18 36 6 Q42 1 46 8"}
                  stroke="#555" strokeWidth="1.1" fill="none" strokeLinecap="round"
                />
              </svg>
              <div className="w-12 h-px bg-gray-200" />
              <p className="text-gray-400" style={{ fontSize: 6.5 }}>{s.role}</p>
            </div>
          ))}
          {/* QR */}
          <div>
            <div
              className="w-8 h-8 rounded"
              style={{ background: "#f0ebff", border: "1px solid #c4b5e8", padding: 3 }}
            >
              <svg viewBox="0 0 26 26" className="w-full h-full">
                <rect x="1" y="1" width="8" height="8" rx="1" fill="#7c5cbf" opacity="0.6"/>
                <rect x="2.5" y="2.5" width="5" height="5" fill="#fff"/>
                <rect x="3.5" y="3.5" width="3" height="3" fill="#7c5cbf" opacity="0.7"/>
                <rect x="17" y="1" width="8" height="8" rx="1" fill="#7c5cbf" opacity="0.6"/>
                <rect x="18.5" y="2.5" width="5" height="5" fill="#fff"/>
                <rect x="19.5" y="3.5" width="3" height="3" fill="#7c5cbf" opacity="0.7"/>
                <rect x="1" y="17" width="8" height="8" rx="1" fill="#7c5cbf" opacity="0.6"/>
                <rect x="2.5" y="18.5" width="5" height="5" fill="#fff"/>
                <rect x="3.5" y="19.5" width="3" height="3" fill="#7c5cbf" opacity="0.7"/>
                <rect x="11" y="1" width="3" height="3" fill="#7c5cbf" opacity="0.4"/>
                <rect x="11" y="11" width="3" height="3" fill="#7c5cbf" opacity="0.4"/>
                <rect x="17" y="11" width="3" height="3" fill="#7c5cbf" opacity="0.4"/>
                <rect x="17" y="17" width="3" height="3" fill="#7c5cbf" opacity="0.4"/>
                <rect x="22" y="17" width="3" height="3" fill="#7c5cbf" opacity="0.4"/>
                <rect x="11" y="17" width="3" height="3" fill="#7c5cbf" opacity="0.4"/>
                <rect x="11" y="22" width="3" height="3" fill="#7c5cbf" opacity="0.4"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ height: 4, background: "linear-gradient(90deg, #7c5cbf, #a78bda)" }} />
    </div>

    {/* Verified badge */}
    <div
      className="absolute -bottom-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-semibold"
      style={{ background: "#7c5cbf", boxShadow: "0 4px 14px rgba(124,92,191,0.45)", fontSize: 10 }}
    >
      <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
        <path d="M8 1l1.6 4.9H15l-4.1 3 1.6 4.9L8 11l-4.5 2.8 1.6-4.9L1 6h5.4z" fill="#fff"/>
      </svg>
      Verified Cert
    </div>
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