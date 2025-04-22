// app/Dashboard/users/page.tsx
"use client";

import { useState } from "react";
import InviteUserForm from "./components/InviteUserForm";
import UserTable from "./components/UserTable";
import RoleInfoModal from "./components/RoleInfoModal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Member";
  status: "Active" | "Invited" | "Pending";
};

export default function UsersPage() {
  const [open, setOpen] = useState(false);

  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "John Smith",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Editor",
      status: "Invited",
    },
  ]);

  const handleInvite = (email: string, role: string) => {
    const newUser: User = {
      id: Date.now().toString(),
      name: email.split("@")[0],
      email,
      role: role as User["role"],
      status: "Invited",
    };
    setUsers((prev) => [...prev, newUser]);
    toast.success("Invite sent");
  };

  const handleRemove = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    toast.success("User removed");
  };

  const handleEdit = (user: User) => {
    toast("Edit feature coming soon", {
      description: `${user.name} (${user.role})`,
    });
    // You can later open a modal to edit the user details.
  };

  return (
    <div className="space-y-6 p-6 bg-muted rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Team Members</h3>
        <Button variant="outline" onClick={() => setOpen(true)}>
          View Roles
        </Button>
      </div>

      <RoleInfoModal open={open} onClose={() => setOpen(false)} />

      <InviteUserForm onInvite={handleInvite} />

      <UserTable users={users} onEdit={handleEdit} onRemove={handleRemove} />
    </div>
  );
}
