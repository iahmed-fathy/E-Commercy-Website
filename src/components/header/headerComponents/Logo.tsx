import Link from "next/link";

type LogoType = {
  className: string;
};
export default function Logo({ className }: LogoType) {
  return (
    <Link href={"/"}>
      <h1 className={className}>Exclusive</h1>
    </Link>
  );
}
