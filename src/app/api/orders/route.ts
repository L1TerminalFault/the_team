import { auth } from "@clerk/nextjs/server";
import { dbConnect, Order } from "@/db/models";

export async function GET() {
	try {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  const isAdmin =
    (sessionClaims?.publicMetadata as Record<string, unknown>)?.role === "admin";

  const orders = isAdmin
    ? await Order.find({}).lean()
    : await Order.find({ clerkId: userId }).lean();

    console.log("metadata: ", sessionClaims.publicMetadata, "\nOrders: ", orders);
  return Response.json(orders);
	} catch (err) {
		console.error("Error: ", err);
    return Response.json({ error: err }, { status: 500 });
	}
}

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { fullName, type, detail } = body;

    await dbConnect();

    const newOrder = await Order.create({
      clerkId: userId,
      fullName,
      type,
      detail,
    });

    return Response.json(newOrder, { status: 201 });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
