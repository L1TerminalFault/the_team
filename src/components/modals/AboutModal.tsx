import React from "react";

export default function AboutModal() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-white">About Us</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="text-lg">
          Welcome to <strong>The Team</strong>, the nexus where high-performance software engineering meets dynamic social media strategy. We are an avant-garde digital agency steadfastly committed to elevating your brand far beyond the ordinary.
        </p>

      <div className="flex flex-col gap-8 mt-4">
        <div className="text-sm font-semibold tracking-widest uppercase text-gray-500">
          Our Founders
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-light text-gray-200">Kemal Esak</div>
            <div className="text-sm text-gray-400">CEO &middot; Founder</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-light text-gray-200">Israel Abdu</div>
            <div className="text-sm text-gray-400">VP &middot; Co-Founder</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-light text-gray-200">Ketsebot</div>
            <div className="text-sm text-gray-400">Co-Founder</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-light text-gray-200">Kalab</div>
            <div className="text-sm text-gray-400">Co-Founder</div>
          </div>
        </div>
      </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Our Heritage</h2>
        <p>
          Founded on the principle that modern digital experiences require both breathtaking aesthetics and highly robust functional architectures, our agency emerged as a response to the siloed nature of traditional tech providers. From our inception, we realized that an exceptional website is merely a vessel without an engaged audience, just as viral social media campaigns can falter without a scalable infrastructure to capture the resulting traffic. By converging innovative technology with refined artistry and data-driven marketing, we set out to redefine the digital landscape.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Our Expertise</h2>
        <p>
          Over the years, we have mastered a comprehensive suite of digital disciplines. Our software development division specializes in full-stack web architectures, progressive web applications (PWAs), dynamic 3D WebGL experiences built on tools like Three.js and React Three Fiber, intuitive UI/UX design, and scalable, highly concurrent backend systems utilizing modern frameworks such as Next.js, Node.js, and advanced database architectures.
        </p>
        <p>
          We build systems designed to withstand the stress of rapid scaling while maintaining sub-second latency and an impeccable user experience. Whether it is a bespoke e-commerce platform handling millions of daily transactions, an interactive enterprise dashboards utilizing complex data visualization, or an immersive 3D promotional site, our engineering teams possess the exact capabilities to construct it from the ground up.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Strategic Social Management</h2>
        <p>
          In tandem with our software solutions, our social management services are engineered to amplify your brand's digital resonance. The Team is composed of veteran creative directors, data scientists, and community architects who understand that social media is a fluid, ever-evolving ecosystem. We don’t just post content; we orchestrate highly targeted digital narratives.
        </p>
        <p>
          Our methodologies rely on advanced analytics to decode audience behavior, allowing us to pivot strategies in real time and maximize return on ad spend (ROAS). From producing high-fidelity video campaigns and crafting viral organic content to managing intricate influencer networks and executing comprehensive crisis communication strategies, our social division acts as an extension of your brand's core identity.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Our Philosophy</h2>
        <p>
          We operate under a simple directive: "Good enough" isn't. In an era where digital noise is deafening, true distinction requires an uncompromising dedication to excellence. Our collaborative framework ensures that our industry-leading software engineers, creative media experts, UI/UX designers, and marketing strategists work in absolute unison.
        </p>
        <p>
          By thoroughly understanding our clients' objectives, target demographics, and market dynamics, we formulate strategies that yield tangible, measurable, and explosive growth. We view transparency not as a buzzword, but as the cornerstone of any successful partnership, providing our clients with continuous, granular insight into both development sprints and marketing analytics.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Looking to the horizon</h2>
        <p>
          Furthermore, our commitment to excellence drives us to constantly innovate. As the tech landscape shifts towards Artificial Intelligence integrations, Web3 infrastructure, and spatial computing, our R&D departments are already charting the course to integrate these tools organically into our clients' tech stacks. Whether you are a promising startup looking to establish your digital footprint or a multinational corporation aiming to modernize legacy systems, The Team is ready to catalyze your success.
        </p>

      </div>
    </>
  );
}
