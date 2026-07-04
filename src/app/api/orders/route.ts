import { auth } from "@clerk/nextjs/server";
import { dbConnect, Order } from "@/db/models";

export async function GET() {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  const isAdmin =
    (sessionClaims?.metadata as Record<string, unknown>)?.role === "admin";

  const orders = isAdmin
    ? await Order.find({}).lean()
    : await Order.find({ clerkId: userId }).lean();

  return Response.json(orders);
}
