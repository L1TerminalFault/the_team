import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Aliya Construction",
    url: "https://aliyaconstructionpls-eth.com",
    description: "A comprehensive digital presence for a leading construction and engineering firm.",
  },
];

export default function ProjectsModal() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-white">Our Projects</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="text-lg">
          Explore a curated selection of our finest digital works, seamlessly blending stunning visuals with robust engineering architectures.
        </p>

        <div className="flex flex-col gap-8 mt-8">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="group flex flex-col gap-6 rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-100">{p.name}</h2>
                  <p className="text-sm text-gray-400 mt-2">{p.description}</p>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              
              <div className="relative hidden w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#0a0a0a] shadow-2xl flex items-center justify-center group-hover:ring-white/20 transition-all">
                {/* Dynamically loads a snapshot of the URL at runtime */}
                <img 
                  src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(p.url)}?w=1000`} 
                  alt={p.name} 
                  className="size-full object-cover" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
