import PlanCard from "./components/PlanSummaryCard";
import PaymentMethodCard from "./components/PaymentMethodCard";
import BillingSummary from "./components/BillingHistoryTable";
import ManageSubscriptionModal from "./components/ChangePlanModal";
import SecureActionNotice from "./components/SecureActionNotice";

export default function BillingPage() {
  return (
    <div className="p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Billing & Subscription</h3>
        <ManageSubscriptionModal />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PlanCard
          plan="Pro Plan"
          price="$49/month"
          features={[
            "Unlimited websites",
            "Priority support",
            "Advanced analytics",
          ]}
        />
        <PaymentMethodCard />
        <BillingSummary />
      </div>
      <SecureActionNotice />
    </div>
  );
}
