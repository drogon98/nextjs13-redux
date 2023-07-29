import Link from "next/link";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="w-full h-16 bg-black">
        <nav className="flex content-between justify-between w-full h-full px-5 text-white">
          <div className="w-1/3 h-full">
            <Link href={"/"} className="m-auto">
              Home
            </Link>
          </div>

          <div className="flex justify-end w-1/3">
            <Link href={"/login"} className="w-16 m-auto">
              Login
            </Link>
            <Link className="w-16 m-auto" href={"/account"}>
              Account
            </Link>
            <button>Logout</button>
          </div>
        </nav>
      </div>
      {children}
    </main>
  );
}
