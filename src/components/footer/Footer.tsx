import AccountSection from "./footerComponents/AccountSection";
import ContactSection from "./footerComponents/ContactSection";
import DownloadSection from "./footerComponents/DownloadSection";
import QuickLinkSection from "./footerComponents/QuickLinkSection";
import SubscribeSection from "./footerComponents/SubscribeSection";

export default function Footer() {
  return (
    <footer className="text-white bg-black w-screen">
      <div className="p-15">
        <div className="flex gap-20 flex-wrap justify-center max-sm:flex-col">
          <SubscribeSection />
          <ContactSection />
          <AccountSection />
          <QuickLinkSection />
          <DownloadSection />
        </div>
      </div>

      <div className="flex gap-2 items-center justify-center py-7 border-t-1 border-white/40 w-full">
        <svg
          className="stroke-white/40"
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.49984 18.3332C14.1022 18.3332 17.8332 14.6022 17.8332 9.99984C17.8332 5.39746 14.1022 1.6665 9.49984 1.6665C4.89746 1.6665 1.1665 5.39746 1.1665 9.99984C1.1665 14.6022 4.89746 18.3332 9.49984 18.3332Z"
            stroke=""
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.9998 8.14799C11.9998 8.14799 10.9704 6.6665 9.25474 6.6665C7.53905 6.6665 6.1665 8.14799 6.1665 9.99984C6.1665 11.8517 7.53905 13.3332 9.25474 13.3332C10.9704 13.3332 11.9998 11.8517 11.9998 11.8517"
            stroke=""
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-[20px] text-white/40 max-sm:text-[12px]">
          Copyright Ahmed Fathy 2025. All right reserved
        </p>
      </div>
    </footer>
  );
}
