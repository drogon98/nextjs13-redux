"use client";

import ReduxProvider from "../store/ReduxProvider";
import MainNavbar from "./Navbar";

export default function MainNavbarClientWrapper() {
  return (
    <ReduxProvider>
      <MainNavbar />
    </ReduxProvider>
  );
}
