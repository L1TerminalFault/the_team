import React from "react";

export default function FaqModal() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-white">Frequently Asked Questions</h1>
      <div className="prose prose-invert max-w-none text-gray-300 flex flex-col gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-white">What core services do you offer?</h3>
          <p>We provide comprehensive software development and social management services. Our expertise includes full-stack web development, progressive web apps (PWAs), dynamic 3D modeling for the web using Next.js and Three.js, complex database architectures, robust API integrations, UI/UX design, and end-to-end SEO optimization. On the social management front, we handle content creation, community management, influencer outreach, and data-driven ad campaigns.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-white">How long does a typical software project take?</h3>
          <p>Depending on the specifications and the complexity of the desired architecture, most of our bespoke web products take anywhere from 4 to 12 weeks to deliver. Complex enterprise applications, e-commerce integrations, or multifaceted social networking platforms may require a longer, phased approach. We always provide a highly detailed project roadmap during our initial discovery sessions to ensure timeline expectations are perfectly aligned.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 text-white">How do your social management services work?</h3>
          <p>We begin with a comprehensive audit of your current digital presence, analyzing audience demographics and competitor landscapes. From there, we develop a tailored strategy that aligns with your brand voice and business goals. Our team handles everything from graphic design and video editing to proactive community engagement and targeted advertising campaigns. We provide granular monthly analytics reports to track ROI and adjust strategies in real-time.</p>
        </div>

        <div>
           <h3 className="text-2xl font-semibold mb-2 text-white">How do we handle ongoing support and maintenance?</h3>
           <p>Once a project is deployed, our partnership doesn't end. We offer extensive Service Level Agreements (SLAs) tailored to our clients' needs. This includes 24/7 uptime monitoring, critical security patching, performance optimization, database maintenance, and feature scaling. Our dedicated support team is always on standby to ensure that your digital infrastructure remains robust and state-of-the-art. Furthermore, as technology trends evolve, we proactively suggest upgrades and refactoring to keep your platform completely future-proof.</p>
        </div>

        <div>
           <h3 className="text-2xl font-semibold mb-2 text-white">Do you specialize in specific tech stacks?</h3>
           <p>Our core engineering team specializes in modern JavaScript/TypeScript ecosystems. We heavily utilize frameworks such as Next.js, React, Node.js, and Express. For database layers, we are proficient in PostgreSQL, MongoDB, and Redis. For 3D web experiences, we leverage Three.js and React Three Fiber. Our infrastructure is typically deployed on AWS or Vercel, utilizing modern CI/CD pipelines to ensure rapid, safe iterative deployments.</p>
        </div>

        <div>
           <h3 className="text-2xl font-semibold mb-2 text-white">Can you integrate with our existing backend infrastructure?</h3>
           <p>Absolutely. We frequently work alongside established internal teams to modernize legacy systems or build custom frontend architectures that interface securely with your existing databases and APIs. We utilize secure RESTful APIs or GraphQL endpoints to ensure deeply integrated, seamless data flow between legacy systems and our modern web applications.</p>
        </div>

        <div>
           <h3 className="text-2xl font-semibold mb-2 text-white">How do you measure the success of a social media campaign?</h3>
           <p>We track meticulously defined Key Performance Indicators (KPIs) tailored to your campaign objectives. These metrics often include conversion rates, Cost per Acquisition (CPA), Return on Ad Spend (ROAS), engagement velocity, and organic reach growth. Through our proprietary dashboard integrations, you will have transparent access to these metrics, demonstrating exactly how our strategies impact your bottom line.</p>
        </div>

        <div>
           <h3 className="text-2xl font-semibold mb-2 text-white">What is your pricing model?</h3>
           <p>Because every project requires a highly bespoke approach, we do not offer fixed generic pricing packages. Software development projects are typically quoted based on the complexity and estimated hours required to hit specified milestones. Social media management and ongoing SLA maintenance are structured on a monthly retainer basis. We provide full, transparent pricing breakdowns following the initial discovery phase.</p>
        </div>

        <div>
           <h3 className="text-2xl font-semibold mb-2 text-white">Who owns the intellectual property and code post-development?</h3>
           <p>Upon full settlement of our invoices, you own the final product deliverables completely. You receive absolute rights to use the software and the creative brand assets produced. Asymptote does retain rights to our underlying proprietary boilerplate architectures and baseline tools used to build your systems, granting you a perpetual license to use them as integrated in your project.</p>
        </div>

      </div>
    </>
  );
}
