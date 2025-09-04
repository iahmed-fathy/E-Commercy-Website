import { auth } from "@/lib/firebase";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function User() {
  const router = useRouter();

  const [isInSession, setIsInSession] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      setIsInSession(true);
    } else {
      setIsInSession(false);
    }
  }, [isInSession]);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("حدث خطأ أثناء تسجيل الخروج:", err);
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="bg-[#DB4444] w-[35px] h-[35px] flex items-center justify-center rounded-full cursor-pointer">
          {!auth.currentUser ? (
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15V13.3333C12 12.4493 11.691 11.6014 11.1408 10.9763C10.5907 10.3512 9.84464 10 9.06667 10H3.93333C3.15536 10 2.40926 10.3512 1.85915 10.9763C1.30905 11.6014 1 12.4493 1 13.3333V15"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 7C8.65685 7 10 5.65685 10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4C4 5.65685 5.34315 7 7 7Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <span className="text-white">
              {auth.currentUser.displayName && auth.currentUser.displayName[0]}
            </span>
          )}
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-black/20 backdrop-blur-2xl text-white w-[250px] h-[250px] rounded-[4px] p-5 me-15 mt-2">
        {isInSession ? (
          <DropdownMenu.Item
            className="flex gap-2 cursor-pointer hover:outline-0"
            onClick={logoutHandler}
          >
            <Image
              src={"/icons/logOutIcon.png"}
              alt="log out icon"
              width={32}
              height={32}
            />
            <span>Sign Out</span>
          </DropdownMenu.Item>
        ) : (
          <DropdownMenu.Item
            className="flex gap-2 cursor-pointer hover:outline-0"
            onClick={() => {
              router.push("/sign-in");
            }}
          >
            <Image
              src={"/icons/logOutIcon.png"}
              alt="log out icon"
              width={32}
              height={32}
            />
            <span>Sign in</span>
          </DropdownMenu.Item>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
