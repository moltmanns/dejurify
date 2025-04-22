"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ManageSubscriptionModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">Manage Subscription</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-base">Manage Subscription</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground space-y-4">
          <p>You can switch to a different plan or cancel if needed.</p>
          <Button variant="default" className="w-full">Change Plan</Button>
          <Button variant="ghost" className="w-full text-red-500">Cancel Subscription</Button>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
