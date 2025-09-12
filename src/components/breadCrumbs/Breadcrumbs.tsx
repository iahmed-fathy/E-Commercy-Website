"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

type BreadcrumbType = { productName?: string };
export default function Breadcrumb({ productName }: BreadcrumbType) {
  const t = useTranslations("headers");

  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean);
    const items: { label: string; href?: string }[] = [
      { label: t("HOME"), href: "/" },
    ];

    for (let i = 0; i < paths.length; i++) {
      const current = paths[i];

      if (current === "product" && paths[i + 1]) {
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
      } else if (current === "category" && paths[i + 1]) {
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
      } else if (current === "sub-category" && paths[i + 1]) {
        const href = "/";
        if (productName) {
          items.push({
            label: t(`${productName?.toUpperCase()}`),
            href,
          });
        } else {
          items.push({ label: "404 ERROR" });
        }
        i++;
      } else if (current === "en" || current === "es" || current === "ar") {
        continue;
      } else {
        const href = "/" + paths.slice(0, i + 1).join("/");
        items.push({
          label: t(current.replace(/-/g, " ").toUpperCase()),
          href,
        });
      }
    }

    return items;
  };

  const breadcrumbItems = generateBreadcrumbs();

  return (
    <nav aria-label="breadcrumb" className="text-[18px] max-sm:text-[14px]">
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
