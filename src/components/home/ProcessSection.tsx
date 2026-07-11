export default function ProcessSection() {
  const steps = [
    { title: "Discovery", desc: "We learn your business, audience, and goals inside out before touching a single pixel." },
    { title: "Strategy", desc: "A tailored roadmap built around your unique competitive position and growth targets." },
    { title: "Creation", desc: "Our team designs, builds, and crafts every deliverable to the highest standard." },
    { title: "Launch", desc: "We deploy and activate with precision, ensuring every element performs from day one." },
    { title: "Optimise", desc: "Ongoing monitoring and iteration — always moving your results closer to perfect." }
  ];

  return (
    <div className="animate-text-section flex p-10 flex-col overflow gap-8 lg:w-1/2 z-1 h-full justify-center">
      <div className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-2">How we work</div>
      <div className="text-gray-200 font-bold text-5xl mb-4">Our Process</div>
      <div className="flex flex-col gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="text-white bg-white/10 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
              {idx + 1}
            </div>
            <div className="flex flex-col">
              <div className="text-gray-200 text-xl font-bold">{step.title}</div>
              <div className="text-gray-400 text-sm mt-1">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
