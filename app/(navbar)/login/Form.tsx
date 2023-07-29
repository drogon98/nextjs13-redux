"use client";

import { useAppDispatch } from "@/app/store";
import { setAuth } from "@/app/store/slices/authSlice";

export default function LoginForm() {
  const dispatch = useAppDispatch();

  dispatch(setAuth(true));
  return (
    <form>
      <div>
        <div>
          <label htmlFor="username">Username</label>
        </div>
        <input
          name="username"
          id="username"
          type="text"
          className="w-full border-2 border-gray-900"
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
