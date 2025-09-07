import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import AccountSideNave from "@/components/myAccount/accountSideNave";
import EditPtofileForm from "@/components/myAccount/EditPtofileForm";
import Welcome from "@/components/myAccount/Welcome";

export default function AccountPage() {
  return (
    <section className="flex flex-col gap-15">
      <div className="flex justify-between max-sm:flex-col gap-5">
        <Breadcrumb />
        <Welcome />
      </div>
      <div className="flex gap-20 max-sm:flex-col m-auto">
        <AccountSideNave />
        <EditPtofileForm />
      </div>
    </section>
  );
}
