import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function BillingSummary() {
  return (
    <Card className="bg-muted text-foreground">
      <CardHeader>
        <h5 className="font-semibold">Billing Summary</h5>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-1">
        <p>Status: <span className="text-green-600 font-medium">Active</span></p>
        <p>Next Renewal: <strong>April 15, 2025</strong></p>
        <p>Plan: <strong>Pro (Monthly)</strong></p>
      </CardContent>
    </Card>
  );
}
