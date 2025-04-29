import { getAuth } from "@clerk/nextjs/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { templateId } = await req.json();

  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: template, error: templateError } = await supabase
    .from("templates")
    .select("default_site_data")
    .eq("id", templateId)
    .single();

  if (templateError || !template) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  const newSiteId = uuidv4();

  const { error: insertError } = await supabase
    .from("pages")
    .insert({
      id: newSiteId,
      user_id: userId,
      name: "New Website",
      slug: "/",
      components: template.default_site_data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      tenant_id: null,
    });

  if (insertError) {
    console.error(insertError);
    return NextResponse.json({ error: "Failed to create site" }, { status: 500 });
  }

  return NextResponse.json({ siteId: newSiteId });
}
