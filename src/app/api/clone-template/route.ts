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

  // Step 1: Verify the template exists
  const { data: template, error: templateError } = await supabase
    .from("templates")
    .select("id, name")
    .eq("id", templateId)
    .single();

  if (templateError || !template) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  // Step 2: Fetch all pages from template_pages
  const { data: templatePages, error: pagesError } = await supabase
    .from("template_pages")
    .select("*")
    .eq("template_id", templateId);

  if (pagesError || !templatePages?.length) {
    return NextResponse.json({ error: "No template pages found" }, { status: 404 });
  }

  // Step 3: Create new site entry (if you have a `user_sites` table)
  const newSiteId = uuidv4();

  const { error: siteInsertError } = await supabase
    .from("user_sites")
    .insert({
      id: newSiteId,
      user_id: userId,
      template_id: templateId,
      name: `${template.name} (Cloned)`,
      created_at: new Date().toISOString(),
    });

  if (siteInsertError) {
    console.error(siteInsertError);
    return NextResponse.json({ error: "Failed to create site" }, { status: 500 });
  }

  // Step 4: Insert all pages into user_site_pages
  const pageInserts = templatePages.map((page) => ({
    id: uuidv4(),
    site_id: newSiteId,
    page_name: page.page_name,
    page_slug: page.page_slug,
    html: page.html,
    js: page.js || "",
    page_order: page.page_order,
    created_at: new Date().toISOString(),
  }));

  const { error: insertPagesError } = await supabase
    .from("user_site_pages")
    .insert(pageInserts);

  if (insertPagesError) {
    console.error(insertPagesError);
    return NextResponse.json({ error: "Failed to create site pages" }, { status: 500 });
  }

  return NextResponse.json({ siteId: newSiteId });
}
