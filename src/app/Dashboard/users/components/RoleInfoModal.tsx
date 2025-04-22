import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RoleInfoModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RoleInfoModal({ open, onClose }: RoleInfoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Role Capabilities</DialogTitle>
        </DialogHeader>
        <div className="text-sm space-y-3">
          <p><strong>Admin:</strong> Full access to settings, billing, and content.</p>
          <p><strong>Editor:</strong> Can manage content but not billing or settings.</p>
          <p><strong>Member:</strong> View-only access to dashboards and data.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
