export default function ProcessSection() {
  const steps = [
    { title: "Discovery Protocol", desc: "We extract raw metrics, dissect market forces, and unveil hidden potential before writing a single line of code." },
    { title: "Strategic Architecture", desc: "A mathematically rigid, hyper-tailored roadmap built around your unique algorithmic advantages and aggressive growth targets." },
    { title: "Execution Engine", desc: "Our tactical unit engineers, designs, and forges every deliverable to an absurd standard of quality." },
    { title: "Hyper-Launch", desc: "We deploy and activate with surgical precision, ensuring every system performs ruthlessly from day one." },
    { title: "Continuous Evolution", desc: "Relentless monitoring and algorithmic iteration — forever moving your results asymptotically closer to absolute perfection." }
  ];

  return (
    <div className="animate-text-section flex p-10 flex-col overflow gap-8 lg:w-1/2 z-1 h-full justify-center">
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
