"use client";

import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { setAuth, setJid } from "../store/slices/authSlice";
import { usePathname, useRouter } from "next/navigation";

// https://nextjs.org/docs/messages/react-hydration-error

export default function MainNavbar() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [isAuth]);

  const handleLogout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await fetch("http://localhost:3002/auth/logout", {
      credentials: "include",
      mode: "cors",
    });
    const inAuthPage = pathname.startsWith("/account");
    if (inAuthPage) {
      router.push("/login");
    }
    dispatch(setJid(""));
    dispatch(setAuth(false));
  };

  return (
    <nav className="flex content-between justify-between w-full h-full px-5 text-white">
      <div className="w-2/3 h-full flex">
        <Link href={"/"} className="my-auto font-bold text-4xl">
          Test App
        </Link>
      </div>

      <div className="flex justify-end w-1/3">
        {isAuthenticated && (
          <>
            <Link className="m-auto" href={"/account"}>
              Account
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
        {isAuthenticated === false && (
          <div className="flex">
            <Link href={"/login"} className="m-auto">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
