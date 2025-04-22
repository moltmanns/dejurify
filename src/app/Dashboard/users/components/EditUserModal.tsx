// app/Dashboard/users/components/EditUserModal.tsx
"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/app/Builder/components/ui/select";

interface EditUserModalProps {
  user: {
    id: string;
    name: string;
    role: string;
    status: string;
  };
  open: boolean;
  onClose: () => void;
  onSave: (updatedUser: any) => void;
}

export default function EditUserModal({ user, open, onClose, onSave }: EditUserModalProps) {
  const [formData, setFormData] = useState(user);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="pb-4">Edit User</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div>
            <Label className="pb-1">Name</Label>
            <Input value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {/* Role Dropdown */}
            <div className="flex-1">
              <Label className="block pb-1">Role</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => handleChange("role", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Member">Member</SelectItem>
                  <SelectItem value="Editor">Editor</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status Dropdown */}
            <div className="flex-1">
              <Label className="block pb-1">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => handleChange("status", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>




          <Button onClick={handleSubmit} className="w-full mt-2">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
