export default function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "Algorithmic Social Vitality",
      desc: "Surgically targeted content architecture and community omnipresence on pivotal platforms to dramatically scale your digital resonance.",
    },
    {
      num: "02",
      title: "Spatial Web Systems",
      desc: "Next-generation, hypersonic digital environments crafted for blistering performance, international conversion, and visceral user experiences.",
    },
    {
      num: "03",
      title: "Enterprise Resource Flow",
      desc: "Our proprietary AI-augmented ERP infrastructure—seamlessly bridging operations, data, and human capital to scale your empire systematically.",
    },
    {
      num: "04",
      title: "High-Fidelity Branding",
      desc: "Distinctive, uncompromising visual paradigms that instantly telegraph your intrinsic value and cement your position as an industry apex.",
    },
    {
      num: "05",
      title: "Strategic Aggression",
      desc: "Cold, calculated, highly mathematical strategy sessions mapping competitive weaknesses and charting the most vicious paths to sustained growth.",
    },
    {
      num: "06",
      title: "Financial Aerodynamics",
      desc: "Institutional-grade financial guidance and rapid business development advisory ensuring your scale is aggressively profitable.",
    },
  ];

  return (
    <div className="animate-text-section flex p-10 flex-col overflow gap-8 lg:w-1/2 z-1 h-full justify-center">
      <div className="text-gray-200 font-bold text-5xl mb-4">Our Services</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="text-gray-400 text-sm font-semibold">{s.num}</div>
            <div className="text-gray-200 text-xl font-bold">{s.title}</div>
            <div className="text-gray-400 text-sm">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
