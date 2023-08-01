"use client";

import { useAppDispatch } from "@/app/store";
import { setAuth, setJid } from "@/app/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";

// client side to add interactivity using state
export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ username: "", password: "" });
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3002/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        credentials: "include",
        mode: "cors",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      dispatch(setJid(data.access_token));
      dispatch(setAuth(true));
      router.push("/account");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="username">Username</label>
        </div>
        <input
          name="username"
          id="username"
          type="text"
          className="w-full border-2 border-gray-900"
          onChange={handleChange}
          value={values.username}
        />
      </div>
      <br />
      <div>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <input
          name="password"
          type="password"
          className="w-full border-2 border-gray-900"
          onChange={handleChange}
          value={values.password}
        />
      </div>
      <br />
      <div>
        <button type="submit" className="bg-blue-700 p-2 text-white font-bold">
          Login
        </button>
      </div>
    </form>
  );
}
