import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col">
      <Breadcrumb />
      <div className="text-center">
        <h1 className="font-medium text-[110px]">404 Not Found</h1>
        <p className="text-[16px]">
          Your visited page not found. You may go home page.
        </p>
      </div>
      <Link
        href={"/"}
        className="bg-[#DB4444] text-white text-[16px] font-semibold flex justify-center items-center h-[56px] w-[254px] rounded-[4px] cursor-pointer hover:animate-pulse animate-infinite animate-delay-500 animate-ease-in-out hover:-translate-y-1 self-center mt-15"
      >
        Back to home page
      </Link>
    </div>
  );
}
