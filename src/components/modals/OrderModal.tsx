"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

interface OrderItem {
  _id: string;
  clerkId: string;
  fullName: string;
  type: string;
  detail: string;
  __more?: string;
}

export default function OrderModal() {
  const { user, isSignedIn, isLoaded } = useUser();
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [orderType, setOrderType] = useState("Web App");
  const [orderDetail, setOrderDetail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isAdmin = user?.publicMetadata?.role === "admin";

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      setLoading(false);
      return;
    }

    fetch("/api/orders")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch orders");
        return res.json();
      })
      .then((data) => {
        setOrders(data);
	console.log("Data: ", data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
	console.log("Error: ", err);
        setLoading(false);
      });
  }, [isSignedIn, isLoaded]);

  const handleCreateOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderDetail.trim()) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: user?.fullName || "Anonymous",
          type: orderType,
          detail: orderDetail,
        }),
      });

      if (!res.ok) throw new Error("Failed to create order");

      const newOrder = await res.json();
      setOrders([newOrder, ...orders]);
      setShowForm(false);
      setOrderDetail("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-white">Orders</h1>

      {!isLoaded || loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      ) : !isSignedIn ? (
        <div className="mt-6 p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
          <p className="text-gray-400 text-lg">
            Sign in to view your orders and project milestones.
          </p>
        </div>
      ) : error ? (
        <div className="mt-6 p-8 bg-red-500/10 rounded-2xl border border-red-500/20 text-center">
          <p className="text-red-400">{error}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6 mt-4">
          {!isAdmin && (
            <div className="flex justify-end">
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-white text-black font-semibold py-2 px-4 rounded-xl hover:bg-gray-200 transition"
              >
                {showForm ? "Cancel" : "New Order"}
              </button>
            </div>
          )}

          {showForm && !isAdmin && (
            <form
              onSubmit={handleCreateOrder}
              className="p-6 bg-white/10 rounded-2xl border border-white/20 flex flex-col gap-4"
            >
              <h2 className="text-xl font-semibold text-white">Place a New Order</h2>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                className="w-full bg-white/10 p-3 rounded-xl outline-none focus:ring-2 focus:ring-white/20 text-white appearance-none"
              >
                <option value="Web App" className="text-black">Web App</option>
                <option value="Social Media" className="text-black">Social Media</option>
                <option value="Full Stack" className="text-black">Full Stack</option>
                <option value="Other" className="text-black">Other</option>
              </select>
              <textarea
                value={orderDetail}
                onChange={(e) => setOrderDetail(e.target.value)}
                rows={4}
                placeholder="Describe your project requirements..."
                className="w-full bg-white/10 p-4 rounded-xl outline-none focus:ring-2 focus:ring-white/20 text-white resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={submitting}
                className="bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Order"}
              </button>
            </form>
          )}

          {orders.length === 0 && !showForm ? (
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
              <p className="text-gray-400 text-lg">
                No active orders. Your contracts and project milestones will appear here.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {orders.map((order) => (
            <div
              key={order._id}
              className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/[0.07] transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {order.type}
                </h3>
                <span className="text-xs font-medium tracking-wider uppercase text-gray-500 bg-white/5 px-3 py-1 rounded-full shrink-0">
                  {order.fullName}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {order.detail}
              </p>
              {order.__more && (
                <p className="text-gray-500 text-xs mt-2">{order.__more}</p>
              )}
            </div>
          ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
