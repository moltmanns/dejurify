import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { buffer } from "micro";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);


const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const payload = await req.text();
  const svix_id = headers().get("svix-id")!;
  const svix_timestamp = headers().get("svix-timestamp")!;
  const svix_signature = headers().get("svix-signature")!;

  const wh = new Webhook(CLERK_WEBHOOK_SECRET);

  let evt;
  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return NextResponse.json({ error: "Invalid webhook" }, { status: 400 });
  }

  const eventType = evt.type;
  const user = evt.data;

  if (eventType === "user.updated") {
    const userId = user.id;
    const subscriptionPlan = user.public_metadata.subscription_plan || "starter";

    const { error } = await supabase
      .from("profiles")
      .update({ subscription_plan })
      .eq("id", userId);

    if (error) {
      console.error("Failed to update subscription plan:", error);
      return NextResponse.json({ error: "DB update failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  }

  return NextResponse.json({ ignored: true }, { status: 200 });
}
