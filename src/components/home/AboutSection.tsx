export default function AboutSection() {
  return (
    <div className="animate-text-section text-3xl flex p-10 flex-col overflow gap-13 lg:w-1/2 z-1">
      <div className="text-gray-200 font-bold text-6xl max-w-[90%] leading-tight">
        Operating beyond conventional limits.
      </div>
      <div className="text-gray-300/80 text-xl font-light tracking-wide max-w-[85%] leading-relaxed">
        Asymptote Creative is the intersection of untethered creativity and surgical engineering. Operating from Addis Ababa, Ethiopia, we hold a single, unwavering doctrine: your infrastructure must be designed to accelerate excellence asymptotically — forever innovating, never plateauing.
        <br />
        <br />
        From striking algorithmic identities to hypersonic web hubs and our proprietary ERP nexus, we engineer integrated combat systems for businesses preparing to dominate international domains.
      </div>
      
      <div className="flex hidden flex-col gap-8 mt-4">
        <div className="text-sm font-semibold tracking-widest uppercase text-gray-500">
          Our Founders
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-light text-gray-200">Kemal Esak</div>
            <div className="text-sm text-gray-400">CEO &middot; Founder</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-light text-gray-200">Kalab</div>
            <div className="text-sm text-gray-400">VP &middot; Co-Founder</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-light text-gray-200">Ketsebot</div>
            <div className="text-sm text-gray-400">Co-Founder</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-light text-gray-200">Israel Abdu</div>
            <div className="text-sm text-gray-400">Co-Founder</div>
          </div>
        </div>
      </div>
    </div>
  );
}
