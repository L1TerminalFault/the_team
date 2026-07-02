export default function ContactSection() {
  return (
    <div className="animate-text-section text-3xl flex p-10 flex-col overflow gap-8 lg:w-1/2 z-1">
      <div className="text-gray-200 font-bold text-6xl leading-tight">
        Initiate your next phase.
      </div>
      <div className="flex flex-col gap-4 text-gray-300 text-lg">
        <a href="mailto:reach@asymptotecreative.com" className="hover:text-white transition-colors">
          reach@asymptotecreative.com
        </a>
        <a href="tel:+251944806913" className="hover:text-white transition-colors">
          +251 944 806 913
        </a>
        <a href="https://t.me/AsymptoteCreative" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          @AsymptoteCreative
        </a>
      </div>
    </div>
  );
}
