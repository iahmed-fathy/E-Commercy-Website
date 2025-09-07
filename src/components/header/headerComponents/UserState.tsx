import { auth } from "@/lib/firebase";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserState() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      router.push("/");
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 7C8.65685 7 10 5.65685 10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4C4 5.65685 5.34315 7 7 7Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <span className="text-white">
              {auth.currentUser.displayName && auth.currentUser.displayName[0]}
            </span>
          )}
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-black/20 backdrop-blur-2xl text-white w-fit h-fit rounded-[4px] p-5 me-15 mt-2 flex flex-col gap-4">
        {user ? (
          <>
            <DropdownMenu.Item
              className="flex gap-2 cursor-pointer hover:outline-0"
              onClick={() => router.push("/my-account")}
            >
              <Image
                src={"/icons/manageMyAccount.png"}
                alt="log out icon"
                width={35}
                height={35}
              />
              <span>Manage My Account</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="flex gap-2 cursor-pointer hover:outline-0"
              onClick={() => router.push("/")}
            >
              <Image
                src={"/icons/myOrder.png"}
                alt="log out icon"
                width={32}
                height={32}
              />
              <span>My Order</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="flex gap-2 cursor-pointer hover:outline-0"
              onClick={() => router.push("/")}
            >
              <Image
                src={"/icons/myCancellations.png"}
                alt="log out icon"
                width={32}
                height={32}
              />
              <span>My Cancellations</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="flex gap-2 cursor-pointer hover:outline-0"
              onClick={() => router.push("/")}
            >
              <Image
                src={"/icons/myReviews.png"}
                alt="log out icon"
                width={32}
                height={32}
              />
              <span>My Reviews</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="flex gap-2 cursor-pointer hover:outline-0"
              onClick={logoutHandler}
            >
              <Image
                src={"/icons/logOutIcon.png"}
                alt="log out icon"
                width={25}
                height={25}
              />
              <span>Sign Out</span>
            </DropdownMenu.Item>
          </>
        ) : (
          <>
            <DropdownMenu.Item
              className="flex gap-2 cursor-pointer hover:outline-0"
              onClick={() => {
                router.push("/sign-in");
              }}
            >
              <Image
                src={"/icons/signInIcon.png"}
                alt="log out icon"
                width={32}
                height={32}
              />
              <span>Sign in</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="flex gap-2 cursor-pointer hover:outline-0"
              onClick={() => {
                router.push("/sign-up");
              }}
            >
              <Image
                src={"/icons/signUpIcon.png"}
                alt="log out icon"
                width={32}
                height={32}
              />
              <span>Sign Up</span>
            </DropdownMenu.Item>
          </>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
