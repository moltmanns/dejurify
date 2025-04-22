"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import EditUserModal from "./EditUserModal";
import { User } from "../page";

type UserTableProps = {
  users: User[];
  onEdit?: (user: User) => void;
  onRemove?: (id: string) => void;
};

export default function UserTable({ users, onEdit, onRemove }: UserTableProps) {
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [localUsers, setLocalUsers] = useState<User[]>(users);

  const handleSave = (updatedUser: User) => {
    const updatedList = localUsers.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );
    setLocalUsers(updatedList);
    setEditingUser(null);
    onEdit?.(updatedUser); // Optional callback to parent
  };

  const handleRemove = (id: string) => {
    setLocalUsers((prev) => prev.filter((user) => user.id !== id));
    onRemove?.(id); // Optional callback to parent
  };

  return (
    <>
      <div className="bg-background rounded-lg shadow-sm p-4 border border-border">
        <table className="w-full text-sm">
          <thead className="text-muted-foreground text-left">
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Role</th>
              <th className="py-2">Status</th>
              <th className="py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {localUsers.map((user) => (
              <tr key={user.id} className="border-t border-border">
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2">{user.role}</td>
                <td className="py-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : user.status === "Invited"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-2 text-right space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingUser(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemove(user.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingUser && (
        <EditUserModal
          user={editingUser}
          open={!!editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSave}
        />
      )}
    </>
  );
}
