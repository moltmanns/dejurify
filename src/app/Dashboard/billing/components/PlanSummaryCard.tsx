import { Card, CardHeader, CardContent } from "@/components/ui/card";

type PlanCardProps = {
  plan: string;
  price: string;
  features: string[];
};

export default function PlanCard({ plan, price, features }: PlanCardProps) {
  return (
    <Card className="bg-muted border-border text-foreground">
      <CardHeader>
        <h5 className="font-semibold">{plan}</h5>
        <p className="text-sm text-muted-foreground">{price}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {features.map((feature, i) => (
            <li key={i}>✓ {feature}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
