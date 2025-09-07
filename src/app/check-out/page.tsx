import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import BillingDetails from "@/components/checkOut/BillingDetails";
import PaymentSection from "@/components/checkOut/PaymentSection";

export default function CheckOutPage() {
  return (
    <div className="flex flex-col gap-10 px-40 max-lg:px-5">
      <Breadcrumb />
      <section className="flex gap-10 max-lg:flex-col">
        <BillingDetails />
        <PaymentSection />
      </section>
    </div>
  );
}
