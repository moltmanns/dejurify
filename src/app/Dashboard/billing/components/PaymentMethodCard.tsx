import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiCreditCard } from "react-icons/fi";

export default function PaymentMethodCard() {
  return (
    <Card className="bg-muted text-foreground">
      <CardHeader className="flex items-center justify-between">
        <h5 className="font-semibold">Primary Payment Method</h5>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-3">
        <div className="flex items-center gap-2">
          <FiCreditCard className="text-xl" />
          Visa ending in 1234 — Expires 12/26
        </div>
        <Button variant="outline" size="sm" className="cursor-pointer">Update Card</Button>
      </CardContent>
    </Card>
  );
}
