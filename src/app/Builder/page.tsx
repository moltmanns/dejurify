"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { supabase } from "@/app/Builder/integrations/supabase/client";

export default function BuilderLandingRedirect() {
  const router = useRouter();
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
        router.push("/Builder/ChooseTemplate");
      } else {
        router.push(`/Builder/${pages[0].id}`);
      }
    };

    checkUserSite();
  }, [isLoaded, isSignedIn, userId, router]);

  return (
    <div className="p-10 text-center">
      {loading ? "Loading your website..." : "Almost there..."}
    </div>
  );
}
