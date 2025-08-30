import AnnouncementBar from "./headerComponents/announcementBar/AnnouncementBar";
import Logo from "./headerComponents/Logo";
import NavigationMenu from "./headerComponents/NavigationMenu";
import UserActions from "./headerComponents/UserActions";

export default function Header() {
  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-10 bg-white border-black/40 border-b-[.5px] grid grid-cols-[1fr_2fr_2fr] max-sm:place-items-center max-sm:grid-cols-1 gap-2 items-center pt-6 pb-2 w-screen px-15 max-sm:px-5 max-sm:pt-2">
        <Logo className="font-bold text-[24px] max-sm:text-start" />
        <NavigationMenu className="flex justify-around max-sm:hidden" />
        <UserActions />
      </header>
    </>
  );
}
