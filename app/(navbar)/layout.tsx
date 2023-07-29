import MainNavbarClientWrapper from "./NavbarClientWrapper";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="w-full h-16 bg-black">
        <MainNavbarClientWrapper />
      </div>
      {children}
    </main>
  );
}
