import React from "react";

export default function CookieModal() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-white">Cookie Policy</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="text-lg">
          At The Team, we utilize advanced web technologies to ensure that your experience on our platform is as seamless, secure, and personalized as our bespoke software solutions. This comprehensive Cookie Policy explains how and why we use cookies and similar tracking technologies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. What Are Cookies?</h2>
        <p>
          Cookies are small, encrypted text files stored directly within your browser environment or on your device when you visit our website. As a leading software and social management firm, we deploy both session cookies (which expire once you close your browser) and persistent cookies (which remain on your device until they expire or you delete them). These files allow our web servers to recognize your device, remember your preferences, and track your interactions with our complex interfaces.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Categories of Cookies We Use</h2>
        <h3 className="text-xl font-medium mt-4 text-white">A. Essential Authentication & Security Cookies</h3>
        <p>
          These cookies are fundamentally necessary for the core functionality of our platforms. They ensure absolute platform security, authentication integrity, and secure access to client dashboards. Without these strictly necessary cookies, essential services such as secure logins, session management, and server-side request verification cannot be provided. Because they are essential, they do not require your prior consent.
        </p>

        <h3 className="text-xl font-medium mt-4 text-white">B. Performance & Analytics Cookies</h3>
        <p>
          To maintain the ultra-high performance of our 3D integrations and heavy WebGL applications, we utilize performance cookies to gather anonymized data regarding traffic flow, interaction latency, and rendering speeds. These cookies help us understand how users navigate through our complex UI/UX components. By identifying friction points and measuring page load times, our engineering teams can constantly refactor and optimize the overarching application architecture. We use industry-leading analytics providers to process this telemetry data in a fully anonymized format.
        </p>

        <h3 className="text-xl font-medium mt-4 text-white">C. Functionality & Preference Cookies</h3>
        <p>
          Functional cookies allow our applications to remember the choices you make—such as your language preference, timezone, or customized dashboard layouts. When you interact with our advanced components, such as setting specific parameters for your social media management campaigns or configuring your software development pipeline within our client portal, these cookies ensure that your preferences persist across sessions, significantly enhancing your user experience.
        </p>

        <h3 className="text-xl font-medium mt-4 text-white">D. Targeting & Advertising Cookies</h3>
        <p>
          In our capacity as a sophisticated social media management and marketing agency, we leverage third-party targeting cookies to inform our advertising campaigns. By closely monitoring cross-device interactions, conversion rates, and demographic segmentation, we formulate hyper-targeted advertising strategies. These cookies track your browsing habits across different websites to build a profile of your interests, ensuring that the marketing content you see is highly relevant to your corporate needs. Our targeting mechanisms are highly sophisticated but adhere strictly to global regulatory frameworks, relying upon deliberate user consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Third-Party Integrations</h2>
        <p>
          Our platform integrates with several third-party service providers—including analytics platforms, CRM systems, and social media networks—who may also set cookies on your device. These third parties utilize their own tracking technologies over which we have no direct control. We strongly recommend reviewing the privacy and cookie policies of these respective third-party platforms to understand their data processing practices.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Managing Your Cookie Preferences</h2>
        <p>
          You have granular control over your cookie preferences. Upon your initial visit, you were presented with a consent management banner allowing you to accept or reject non-essential cookies. You can alter these preferences at any time through our Privacy Center. Furthermore, most modern web browsers allow you to configure settings to block or delete all cookies. Please be aware, however, that disabling essential or functional cookies will significantly impair your ability to interface with our secure client portals and interactive 3D components.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Cookie Lifespans and Retention Strategy</h2>
        <p>
          We employ a strict data retention strategy for our cookies. Session cookies are purged instantly upon closure of your browser. Persistent analytics and targeting cookies are configured with a maximum lifespan of 13 months, in accordance with best practices and stringent global data protection laws. After this period, you will be prompted to renew your consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Updates to This Cookie Policy</h2>
        <p>
          As our software architecture evolves and as we roll out new social management platforms, we may update this Cookie Policy to reflect changes in our tracking methodologies or compliance requirements. We will notify our active clients of any substantial changes via email or prominent notices within our client dashboard prior to the changes taking effect. 
        </p>
      </div>
    </>
  );
}
