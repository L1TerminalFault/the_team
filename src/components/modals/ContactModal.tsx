import React from "react";

export default function ContactModal() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>
      <div className="prose prose-invert max-w-none text-gray-300">
        <p className="text-lg mb-6">Have a project in mind? Looking to scale your web infrastructure or skyrocket your social media presence? Reach out to our team of experts.</p>
        <div className="flex flex-col gap-6 w-full max-w-md">
          <input className="w-full bg-white/10 p-4 rounded-xl outline-none focus:ring-2 focus:ring-white/20 text-white" placeholder="Your Name" />
          <input className="w-full bg-white/10 p-4 rounded-xl outline-none focus:ring-2 focus:ring-white/20 text-white" placeholder="Your Email" />
          <input className="w-full bg-white/10 p-4 rounded-xl outline-none focus:ring-2 focus:ring-white/20 text-white" placeholder="Project Type (e.g. Web App, Social Media, Full Stack)" />
          <textarea className="w-full bg-white/10 p-4 rounded-xl outline-none focus:ring-2 focus:ring-white/20 text-white" rows={5} placeholder="Describe your vision..."></textarea>
          <button className="bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition">Initiate Contact</button>
        </div>
      </div>
    </>
  );
}
