import AnnouncementBar from "./headerComponents/announcementBar/AnnouncementBar";
import Logo from "./headerComponents/Logo";
import NavigationMenu from "./headerComponents/NavigationMenu";
import UserActions from "./headerComponents/UserActions";

export default function Header() {
  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-10 bg-white border-black/40 border-b-[.5px] grid grid-cols-[1fr_2fr_2fr] max-lg:place-items-center max-lg:grid-cols-1 gap-2 items-center pt-6 pb-2 w-screen px-15 max-lg:px-5 max-lg:pt-2">
        <Logo className="font-bold text-[28px] w-fit max-lg:text-start" />
        <NavigationMenu className="flex justify-around max-lg:hidden" />
        <UserActions />
      </header>
    </>
  );
}
