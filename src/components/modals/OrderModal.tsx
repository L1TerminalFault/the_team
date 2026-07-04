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
  const { isSignedIn, isLoaded } = useUser();
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [isSignedIn, isLoaded]);

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
      ) : orders.length === 0 ? (
        <div className="mt-6 p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
          <p className="text-gray-400 text-lg">
            No active orders. Your contracts and project milestones will appear
            here.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 mt-4">
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
    </>
  );
}
