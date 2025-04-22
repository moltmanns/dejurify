'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  FiHome,
  FiUsers,
  FiGlobe,
  FiLayout,
  FiFolder,
  FiLogOut,
  FiCreditCard,
} from "react-icons/fi";

const navItems = [
  { name: "Dashboard", path: "/Dashboard", icon: <FiHome /> },
  { name: "Users", path: "/Dashboard/users", icon: <FiUsers /> },
  { name: "Sites", path: "/Dashboard/websites", icon: <FiGlobe /> },
  { name: "Templates", path: "/Dashboard/templates", icon: <FiFolder /> },
  { name: "Domains", path: "/Dashboard/domains", icon: <FiLayout /> },
  { name: "Billing", path: "/Dashboard/billing", icon: <FiCreditCard /> },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-background text-foreground border-r border-border p-6 flex flex-col justify-between">
      {/* Top section */}
      <div>
        {/* Logo */}
        <div className="mb-10">
          <Link href="/">
            <Image
              src="/assets/main-dark 1.png"
              alt="Dejurify Logo"
              width={140}
              height={40}
              className="h-6 w-auto"
            />
          </Link>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-4 mb-6">
          <Image
            src="https://placehold.co/48x48"
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full border border-muted"
          />
          <div>
            <p className="font-semibold text-sm">Smith & Law Group</p>
            <p className="text-xs text-muted-foreground">Admin Account</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-border mb-6" />

        {/* Navigation */}
        <nav className="space-y-2 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition
                  ${
                    isActive
                      ? "bg-muted text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sign Out */}
      <div className="pt-6">
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 justify-center cursor-pointer"
        >
          <FiLogOut />
          Sign out
        </Button>
      </div>
    </aside>
  );
}
