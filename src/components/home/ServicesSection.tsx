export default function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "Social Media Management",
      desc: "Strategic content creation, scheduling, and community management across all major platforms to grow your audience and brand presence.",
    },
    {
      num: "02",
      title: "Website Development",
      desc: "Modern, fast, and beautiful websites built for international audiences with a focus on conversion, performance, and user experience.",
    },
    {
      num: "03",
      title: "ERP System",
      desc: "Our proprietary enterprise resource planning solution — a unified system that connects your operations, data, and teams to scale your business systematically and sustainably.",
    },
    {
      num: "04",
      title: "Logo & Brand Design",
      desc: "Distinctive visual identities that communicate your values and position your business for international recognition and recall.",
    },
    {
      num: "05",
      title: "Digital Strategy",
      desc: "Data-driven strategy sessions that map your competitive landscape and chart the clearest, fastest path to measurable growth.",
    },
    {
      num: "06",
      title: "Growth & Finance Advisory",
      desc: "Smart financial guidance and business development advisory to help you scale confidently and profitably.",
    },
  ];

  return (
    <div className="animate-text-section flex p-10 flex-col overflow gap-8 lg:w-1/2 z-1 h-full justify-center">
      <div className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-2">What we do</div>
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
