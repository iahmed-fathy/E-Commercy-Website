import CenteredText from "./CenteredText";
import LanguageSelector from "./LanguageSelector";

export default function AnnouncementBar() {
  return (
    <div className="grid grid-cols-[9fr_1fr] max-sm:grid-cols-1 max-sm:gap-4 place-items-center px-20 max-sm:px-10 py-5 items-center bg-black">
      <CenteredText />
      <LanguageSelector />
    </div>
  );
}
