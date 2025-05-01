import { NextResponse } from "next/server";
import Stripe from "stripe";
import { buffer } from "micro";
import { clerkClient } from "@clerk/nextjs/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});

// Disable Next.js body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  const rawBody = await buffer(req);
  const signature = req.headers.get("stripe-signature")!;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);
  } catch (err) {
    console.error("Webhook signature verification failed.", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "invoice.paid"
  ) {
    const session = event.data.object as Stripe.Checkout.Session;

    const clerkUserId = session.metadata?.clerkUserId;

    if (!clerkUserId) {
      console.warn("Missing clerkUserId in metadata");
      return NextResponse.json({ received: true });
    }

    // 🧠 Clerk user is updated here
    await clerkClient.users.updateUser(clerkUserId, {
      publicMetadata: {
        subscription_plan: "pro",
      },
    });

    console.log(`✅ Clerk user ${clerkUserId} upgraded to Pro`);
  }

  return NextResponse.json({ received: true });
}
