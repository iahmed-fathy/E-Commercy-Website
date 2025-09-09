import Dropdown from "./Dropdown";

export default function CategoriesSideNav() {
  type category = {
    categoryName: string;
    categoryPageUrl: string;
  };

  type subCategory = {
    Trigger: string;
    categories?: category[];
    triggerLink?: string;
  };
  const subCategories: subCategory[] = [
    {
      Trigger: "Woman's Fashion",
      categories: [
        {
          categoryName: "All",
          categoryPageUrl: "/sub-category/Woman's-Fashion",
        },
      ],
    },
    {
      Trigger: "Men's Fashion",
      categories: [
        {
          categoryName: "All",
          categoryPageUrl: "/sub-category/Men's-Fashion",
        },
      ],
    },
    {
      Trigger: "Electronics",
      triggerLink: "/sub-category/Electronics",
    },
    {
      Trigger: "Home & Lifestyle",
      triggerLink: "/sub-category/Lifestyle",
    },
    {
      Trigger: "Medicine",
      triggerLink: "/sub-category/Medicine",
    },
    {
      Trigger: "Sports & Outdoor",
      triggerLink: "/sub-category/Sports",
    },
    {
      Trigger: "Baby's & Toys",
      triggerLink: "/sub-category/Kids",
    },
    {
      Trigger: "Groceries & Pets",
      triggerLink: "/sub-category/Groceries",
    },
    {
      Trigger: "Health & Beauty",
      triggerLink: "/sub-category/Health",
    },
  ];

  return (
    <ul className="flex sm:flex-col pt-4 gap-1 sm:border-r-1 sm:border-black/40 w-[250px] h-fit max-sm:overflow-x-scroll hide-scrollbar max-sm:w-full max-sm:gap-[1px]">
      {subCategories.map((subCat, index) => (
        <li key={index}>
          <Dropdown
            Trigger={subCat.Trigger}
            categories={subCat.categories}
            triggerLink={subCat.triggerLink}
          />
        </li>
      ))}
    </ul>
  );
}
