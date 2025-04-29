"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiBell, FiSettings, FiMoon, FiSun, FiUser, FiLogOut, FiUsers, FiCreditCard } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/app/Builder/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Dropdown menu components
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/app/Builder/components/ui/dropdown-menu";

export default function AdminNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((seg) => seg.replace(/-/g, " "));

  return (
    <header className="h-16 px-6 flex items-center justify-between bg-white dark:bg-[#0A0A0A] border-b border-gray-200 dark:border-gray-800">
      {/* Left: Breadcrumbs */}
      <div className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2">
        {segments.map((seg, idx) => (
          <span
            key={idx}
            className={cn(idx === segments.length - 1 && "text-black dark:text-white font-semibold")}
          >
            {seg.charAt(0).toUpperCase() + seg.slice(1)}
            {idx < segments.length - 1 && <span className="mx-1">/</span>}
          </span>
        ))}
      </div>

      {/* Right Side: Actions */}
      <div className="flex items-center gap-4">
        {/* Theme Switch */}
        {mounted && (
          <div className="flex items-center gap-2 pr-4">
            <FiSun className="text-muted-foreground" />
            <Switch
              id="theme-toggle"
              className="cursor-pointer"
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
            <FiMoon className="text-muted-foreground" />
          </div>
        )}

        {/* Settings Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <FiSettings className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Dashboard Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/profile")} className=" cursor-pointer">
              <FiUser className="mr-2 h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/billing")} className=" cursor-pointer">
              <FiCreditCard className="mr-2 h-4 w-4" /> Billing
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/users")} className=" cursor-pointer">
              <FiUsers className="mr-2 h-4 w-4" /> Manage Users
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-500 cursor-pointer"
              onClick={() => router.push("/logout")}
            >
              <FiLogOut className="mr-2 h-4 w-4" /> Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* CTA */}
        <Button
          asChild
          size="sm"
          variant="default"
          className="rounded-md px-4 py-2 text-sm font-medium bg-black text-white hover:bg-gray-900"
        >
          <Link href="/Builder">+ Create Website</Link>
        </Button>
      </div>
    </header>
  );
}
