"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

type BreadcrumbType = { productName?: string };
type Locale = (typeof routing.locales)[number];

export default function Breadcrumb({ productName }: BreadcrumbType) {
  const t = useTranslations("headers");
  const locale = useLocale();
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    let paths = pathname.split("/").filter(Boolean);
    if (paths.length > 0 && routing.locales.includes(paths[0] as Locale)) {
      paths = paths.slice(1);
    }

    const items: { label: string; href?: string }[] = [
      { label: t("HOME"), href: `/${locale}/` },
    ];

    for (let i = 0; i < paths.length; i++) {
      const current = paths[i];

      if (current === "product" && paths[i + 1]) {
        const href = `/${locale}/` + paths.slice(0, i + 2).join("/");
        if (productName) {
          items.push({
            label: productName.toUpperCase(),
            href,
          });
        } else {
          items.push({ label: "404 ERROR" });
        }
        i++;
      } else if (current === "category" && paths[i + 1]) {
        const href = `/${locale}/` + paths.slice(0, i + 2).join("/");
        if (productName) {
          items.push({
            label: productName.toUpperCase(),
            href,
          });
        } else {
          items.push({ label: "404 ERROR" });
        }
        i++;
      } else if (current === "sub-category" && paths[i + 1]) {
        const href = `/${locale}/`;
        if (productName) {
          const key = productName.toUpperCase();
          const label = t.has(key) ? t(key) : productName;
          items.push({
            label: label,
            href,
          });
        } else {
          items.push({ label: "404 ERROR" });
        }
        i += 2;
      } else {
        const key = current.replace(/-/g, " ").toUpperCase();
        const label = t.has(key) ? t(key) : current;
        const href = `/${locale}/` + paths.slice(0, i + 1).join("/");
        items.push({
          label,
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
