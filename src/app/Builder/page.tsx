"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { supabase } from "@/app/Builder/integrations/supabase/client";

export default function BuilderLandingRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userId, isSignedIn, isLoaded } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserSite = async () => {
      if (!isLoaded) return;

      if (!isSignedIn || !userId) {
        router.push("/login");
        return;
      }

      const { data: pages, error } = await supabase
        .from("pages")
        .select("id")
        .eq("user_id", userId)
        .limit(1);

      if (error || !pages || pages.length === 0) {
        // No redirect. Let blank /Builder handle that case
        return;
      }

      router.push(`/Builder/page/${pages[0].id}`);
    };

    checkUserSite();
  }, [isLoaded, isSignedIn, userId, router, searchParams]);

  return (
    <div className="p-10 text-center">
      {loading ? "Loading your website..." : "Almost there..."}
    </div>
  );
}
