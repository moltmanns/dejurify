'use client'

import { useState } from 'react';
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
import { SignOutButton, useUser } from "@clerk/nextjs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/Builder/components/ui/alert-dialog";

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
  const { user, isLoaded } = useUser();
  const [showSignOutDialog, setShowSignOutDialog] = useState(false);

  if (!isLoaded) {
    return (
      <aside className="w-64 h-screen bg-background text-foreground border-r border-border p-6 flex flex-col justify-between">
        {/* Loading skeleton */}
        <div>
          <div className="mb-10 h-8 w-32 bg-muted rounded animate-pulse"></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="rounded-full bg-muted h-12 w-12 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-24 animate-pulse" />
              <div className="h-3 bg-muted rounded w-32 animate-pulse" />
            </div>
          </div>
        </div>
      </aside>
    );
  }

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

        {/* Profile - Clerk Integrated */}
        <div className="flex items-center gap-2 mb-6">
          <div className="relative h-12 w-12">
            {/* Updated Image component with unoptimized prop */}
            <Image
              src={user?.imageUrl || "https://placehold.co/48x48"}
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full border border-muted object-cover"
              unoptimized={true} // Add this for Clerk images
            />
          </div>
          <div>
            <p className="font-semibold text-sm">
              {user?.fullName || "Admin Account"}
            </p>
            <p className="text-xs text-muted-foreground">
              {user?.primaryEmailAddress?.emailAddress || "Admin"}
            </p>
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

      {/* Sign Out with Confirmation Dialog */}
      <div className="pt-6">
        <AlertDialog open={showSignOutDialog} onOpenChange={setShowSignOutDialog}>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full flex items-center gap-2 justify-center cursor-pointer"
            >
              <FiLogOut />
              Sign out
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure you want to sign out?</AlertDialogTitle>
              <AlertDialogDescription>
                You'll need to sign in again to access your dashboard.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className='cursor-pointer'>Cancel</AlertDialogCancel>
              <SignOutButton signOutOptions={{ redirectUrl: "/" }}>
                <AlertDialogAction asChild>
                  <Button variant="destructive" className='cursor-pointer'>Sign Out</Button>
                </AlertDialogAction>
              </SignOutButton>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </aside>
  );
}