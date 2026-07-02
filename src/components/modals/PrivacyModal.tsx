import React from "react";

export default function PrivacyModal() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="text-lg">
          At The Team, we consider the privacy and security of your corporate and personal data to be an uncompromisable foundation of our digital operations. Our infrastructure is designed from the ground up prioritizing zero-trust architecture, rigorous encryption, and absolute compliance with global data protection frameworks.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Information We Collect</h2>
        <p>
          We collect various types of information to provide and improve our services to you:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Client & Corporate Data:</strong> When you engage our services, we collect comprehensive organizational details, API keys, intellectual property, brand assets, and marketing analytics necessary to execute our software development and social management strategies.</li>
          <li><strong>Personal Information:</strong> Includes names, professional email addresses, billing information, and contact details of the stakeholders interacting directly with our teams.</li>
          <li><strong>Technical Telemetry:</strong> When you utilize our bespoke web applications or client portals, our servers automatically record IP addresses, browser types, operating systems, and detailed interaction logs to debug bottlenecks and maximize platform efficacy.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. How We Use Your Information</h2>
        <p>
          The data we collect is utilized strictly to facilitate the services outlined in our Statement of Work (SOW). Specifically, we use your information to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Architect, deploy, and maintain custom software solutions and web platforms.</li>
          <li>Formulate, execute, and analyze targeted social media and marketing campaigns.</li>
          <li>Process financial transactions securely and maintain accurate billing records.</li>
          <li>Detect, prevent, and address technical issues, security vulnerabilities, or fraudulent activity within our digital ecosystem.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Data Compliance & Safeguarding Standards</h2>
        <p>
          Your personal and corporate data, including source code repositories and financial ledgers, are strictly protected. We implement Advanced Encryption Standard (AES-256) for data at rest and Transport Layer Security (TLS 1.3) for all data in transit. 
        </p>
        <p>
          We operate strictly within international privacy regulations, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). We unequivocally do not sell your data to third-party data brokers. Access to sensitive corporate datasets is governed by stringent Role-Based Access Control (RBAC) protocols, ensuring that only necessary engineering and marketing teams have access to specific client silos.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Data Sharing & Third-Party Processors</h2>
        <p>
          We may share anonymized, aggregated data with trusted third-party service providers who assist us in operating our infrastructure (e.g., AWS, Vercel, Google Cloud) or conducting our marketing analytics. These vendors are legally bound by strict Data Processing Agreements (DPAs) which compel them to safeguard your data with the identical rigor that we employ internally.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Data Retention & Purging Protocols</h2>
        <p>
          We retain your data only for as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements. If our operational partnership ceases, automated data purging protocols initiate within 30 days. We permanently wipe proprietary source code and sensitive databases belonging to the Client from our systems, unless explicitly requested to maintain backups via a separate archival agreement.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Your Rights & Options</h2>
        <p>
          Subject to applicable laws, you possess the right to access, correct, update, or request deletion of your personal data. You may also object to the processing of your data or request data portability. To exercise these rights, please contact our Data Protection Officer (DPO) via the specific communication channels outlined in your onboarding documentation. We promise to address all inquiries transparently and within statutory timeframes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Security Breach Notification</h2>
        <p>
          In the highly unlikely event of a security breach that genuinely threatens the confidentiality of your data, The Team follows a rapid incident response protocol. We guarantee to notify affected clients within 72 hours of confirming such an event, detailing the scope of the breach and the immediate remedial actions taken by our cybersecurity teams.
        </p>
      </div>
    </>
  );
}
