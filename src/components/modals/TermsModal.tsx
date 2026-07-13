import React from "react";

export default function TermsModal() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="text-lg">
          By utilizing our highly specialized software engineering and social media management services, you agree to be bound by the extensive terms detailed below. 
        </p>
        <p>
          These Terms of Service constitute a legally binding agreement between you (the "Client") and Asymptote Creative (the "Agency"). Please read these terms carefully before engaging our services or accessing our proprietary platforms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Section 1: Scope of Software Engineering Services</h2>
        <p>
          Our Software Development Division provides end-to-end engineering solutions, including but not limited to custom web application development, cloud infrastructure architecture, API design and integration, and complex UI/UX implementations. Software development is an inherently complex endeavor. We employ the absolute best industry standards, rigorous automated testing protocols, and modern CI/CD pipelines to ensure product stability. 
        </p>
        <p>
          However, the Client acknowledges that all software may contain latent anomalies. We will diligently address any bugs discovered during the agreed-upon warranty period following final deployment. The Agency is not liable for system failures caused by third-party API deprecations, sudden shifts in browser standards, or unauthorized modifications made by the Client's internal personnel.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Section 2: Social Media Management & Marketing</h2>
        <p>
          For our social media and digital marketing services, Asymptote operates as a strategic partner charged with enhancing brand visibility. We manage content creation, community engagement, influencer outreach, and paid advertising campaigns based on an mutually approved strategic roadmap.
        </p>
        <p>
          The Agency retains creative control over the execution of the marketing strategies while remaining strictly aligned with the Client's brand guidelines. While we leverage data-driven methodologies to maximize engagement and ROI, we cannot guarantee specific follower counts, virality metrics, or absolute conversion rates due to the unpredictable nature of proprietary social networking algorithms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Section 3: Intellectual Property & Source Code Ownership</h2>
        <p>
          Upon full and final payment of all invoices related to a specific project, Asymptote transfers to the Client the operational rights and ownership of the final deliverables (e.g., the compiled application, finalized brand assets). 
        </p>
        <p>
          Notwithstanding the foregoing, Asymptote retains all rights, title, and interest in our underlying proprietary code libraries, boilerplate architectures, frameworks, and bespoke internal tools utilized to construct the Client's product. The Agency grants the Client a non-exclusive, perpetual, royalty-free license to use these underlying tools solely as integrated within the final product.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Section 4: Financial Terms & Invoicing</h2>
        <p>
          All service engagements require a substantial initial deposit prior to the commencement of any engineering or strategic planning phases. Development projects are typically billed upon reaching predefined milestones. Social media management contracts operate on a strict monthly retainer basis, requiring payment on the first of each operational month.
        </p>
        <p>
          Payments are absolutely non-refundable once developmental, architectural, or creative phases have extensively commenced. Any significant deviations ("scope creep") from the original Statement of Work (SOW) will require a mutually signed Change Order and will incur additional proportional fees.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Section 5: Confidentiality & Non-Disclosure</h2>
        <p>
          Both parties agree to maintain absolute confidentiality concerning proprietary technologies, algorithmic strategies, source code structures, marketing databases, and sensitive business intelligence shared during the course of the engagement. This confidentiality obligation remains in full effect indefinitely, surviving the termination of our contractual relationship. We implement stringent internal access controls to ensure your trade secrets never leak outside our operational ecosystem.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Section 6: Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, in no event shall Asymptote, its directors, employees, or partners be liable to the Client for any indirect, incidental, special, consequential, or punitive damages. This includes, without limitation, loss of profits, data corruption, usage deprivation, or loss of goodwill resulting from your access to or inability to use our services, whether based explicitly on warranty, contract, tort (including negligence), or any other legal theory.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Section 7: Termination Protocols</h2>
        <p>
          Either party may terminate the engagement with a formal 30-day written notice. Upon termination, the Client is exclusively responsible for the payment of all work completed and expenses incurred up to the effective date of termination. If the termination occurs mid-sprint, the Client will receive the partially completed software modules "as-is", with no express warranties of functionality.
        </p>
      </div>
    </>
  );
}
