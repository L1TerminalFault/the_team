export default function AboutSection() {
  return (
    <div className="animate-text-section text-3xl flex p-10 flex-col overflow gap-13 lg:w-1/2 z-1">
      <div className="text-sm font-semibold tracking-widest uppercase text-gray-500">
        About Asymptote Creative
      </div>
      <div className="text-gray-200 font-bold text-6xl max-w-[90%] leading-tight">
        We grow businesses beyond limits.
      </div>
      <div className="text-gray-300/80 text-md font-light /tracking-wide max-w-[85%] /leading-relaxed">
        Asymptote Creative is a full-service digital agency based in Addis Ababa, Ethiopia, built on a single belief: your business should always be moving closer to its full potential — approaching excellence asymptotically, always improving, never settling.
        <br />
        <br />
        From bold brand identities to high-performance websites, from social media growth to our proprietary ERP System, we deliver integrated solutions that position our clients for lasting international success.
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        <div className="flex flex-col items-center gap-1">
          <div className="text-gray-200 text-2xl font-bold">50+</div>
          <div className="text-gray-500 text-xs font-medium tracking-wide uppercase">Clients Served</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-gray-200 text-2xl font-bold">6</div>
          <div className="text-gray-500 text-xs font-medium tracking-wide uppercase">Core Services</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-gray-200 text-2xl font-bold">24/7</div>
          <div className="text-gray-500 text-xs font-medium tracking-wide uppercase">Client Support</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-gray-200 text-2xl font-bold">∞</div>
          <div className="text-gray-500 text-xs font-medium tracking-wide uppercase">Growth Potential</div>
        </div>
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
