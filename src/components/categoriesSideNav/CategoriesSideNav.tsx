import Dropdown from "./Dropdown";

export default function CategoriesSideNav() {
  return (
    <ul className="flex sm:flex-col pt-4 gap-1 border-e-1 sm:border-black/40 w-[250px] h-fit max-sm:overflow-x-scroll hide-scrollbar max-sm:w-screen max-sm:gap-[1px]">
      <li>
        <Dropdown
          Trigger="Woman’s Fashion"
          categories={[
            { categoryName: "All", categoryPageUrl: "https://www.google.com/" },
          ]}
        />
      </li>
      <li>
        <Dropdown
          Trigger="Men’s Fashion"
          categories={[{ categoryName: "All", categoryPageUrl: "#" }]}
        />
      </li>
      <li>
        <Dropdown Trigger="Electronics" triggerLink="#" />
      </li>
      <li>
        <Dropdown Trigger="Home & Lifestyle" triggerLink="#" />
      </li>
      <li>
        <Dropdown Trigger="Medicine" triggerLink="#" />
      </li>
      <li>
        <Dropdown Trigger="Sports & Outdoor" triggerLink="#" />
      </li>
      <li>
        <Dropdown Trigger="Baby’s & Toys" triggerLink="#" />
      </li>
      <li>
        <Dropdown Trigger="Groceries & Pets" triggerLink="#" />
      </li>
      <li>
        <Dropdown Trigger="Health & Beauty" triggerLink="#" />
      </li>
    </ul>
  );
}
