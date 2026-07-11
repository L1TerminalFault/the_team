export default function HeroSection() {
  return (
    <div className="animate-text-section text-3xl flex p-10 flex-col overflow gap-13 lg:w-1/2 z-1">
      <div className="text-sm font-semibold tracking-widest uppercase text-gray-500">
        Asymptote Creative — Digital Excellence
      </div>
      <div className="text-gray-200 font-bold text-5xl max-w-2xl leading-tight">
        Always approaching perfection.
      </div>
      <div className="text-gray-300/80 text-base /font-light /tracking-wide max-w-[85%] /leading-relaxed">
        We build brands, manage digital presence, and deliver the ERP System — a complete framework for performance, reach, and results.
      </div>
      <div className="flex gap-4 mt-2">
        <a href="#services" className="hidden bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors text-base">
          Explore Services
        </a>
        <a href="#about" className="hidden border border-white/20 text-gray-300 font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-base">
          Our story
        </a>
      </div>
    </div>
  );
}
