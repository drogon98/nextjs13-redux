"use client";

import Link from "next/link";
import { useAppSelector } from "../store";

export default function MainNavbar() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return (
    <nav className="flex content-between justify-between w-full h-full px-5 text-white">
      <div className="w-1/3 h-full">
        <Link href={"/"} className="m-auto">
          Home
        </Link>
      </div>

      <div className="flex justify-end w-1/3">
        {isAuth ? (
          <>
            <Link className="w-16 m-auto" href={"/account"}>
              Account
            </Link>
            <button>Logout</button>
          </>
        ) : (
          <Link href={"/login"} className="w-16 m-auto">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
