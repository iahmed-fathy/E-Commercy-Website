import Link from "next/link";
import { useLocale } from "next-intl";

type LogoType = {
  className: string;
};
export default function Logo({ className }: LogoType) {
  const locale = useLocale();
  return (
    <Link href={`/${locale}`}>
      <h1 className={className}>Exclusive</h1>
    </Link>
  );
}
