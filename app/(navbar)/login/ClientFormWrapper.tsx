"use client";

import ReduxProvider from "@/app/store/ReduxProvider";
import LoginForm from "./Form";

export default function ClientLoginFormWrapper() {
  return (
    <ReduxProvider>
      <LoginForm />
    </ReduxProvider>
  );
}
