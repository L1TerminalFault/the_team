import React from "react";

export default function OrderModal() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-white">Order Details</h1>
      <div className="prose prose-invert max-w-none text-gray-300">
        <p className="text-lg">Manage your custom software contracts, web hosting subscriptions, and social media retainer analytics here.</p>
        <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 text-center text-white">
          <p>You have no active orders inside the client portal. Sign in to view your billing history and project milestones.</p>
        </div>
      </div>
    </>
  );
}
