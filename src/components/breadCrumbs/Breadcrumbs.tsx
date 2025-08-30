"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type BreadcrumbType = { productName?: string };
export default function Breadcrumb({ productName }: BreadcrumbType) {
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean);
    const items: { label: string; href?: string }[] = [
      { label: "HOME", href: "/" },
    ];

    for (let i = 0; i < paths.length; i++) {
      const current = paths[i];

      if (current === "product-details" && paths[i + 1]) {
        const href = "/" + paths.slice(0, i + 2).join("/");
        if (productName) {
          items.push({
            label: `${productName?.toUpperCase()}`,
            href,
          });
        } else {
          items.push({ label: "404 ERROR" });
        }
        i++;
      } else {
        const href = "/" + paths.slice(0, i + 1).join("/");
        items.push({
          label: current.replace(/-/g, " ").toUpperCase(),
          href,
        });
      }
    }

    return items;
  };

  const breadcrumbItems = generateBreadcrumbs();

  return (
    <nav aria-label="breadcrumb" className="text-sm">
      <ol className="flex items-center">
        {breadcrumbItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center  text-black/40 last:text-black"
          >
            {index > 0 && <span className="mx-2 text-black/40">/</span>}
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span className="font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
