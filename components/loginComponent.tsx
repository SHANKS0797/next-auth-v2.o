"use client";
import { FormEvent, useState } from "react";
import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginComponent() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    })
      .then((res) => {
        if (!res?.error) {
          router.push("/protected-route");
        } else {
          console.log("Invalid credentials", res);
          alert("Invalid Credentials");
        }
      })
      .catch((err) => {
        console.log("Login Page Error", err);
        alert("Something went wrong");
      });
  };
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen px-6 lg:px-0">
      <form
        className="flex flex-col justify-start items-start gap-3 w-full lg:w-2/5 px-3 py-2 rounded shadow-xl bg-slate-50 dark:bg-gray-700"
        onSubmit={handleLoginSubmit}
      >
        {/* -------------------- TITLE -------------------- */}
        <span className="flex w-full justify-center text-lg font-semibold text-navy-blue dark:text-soft-lavender">
          LOGIN
        </span>
        {/* -------------------- EMAIL CONTAINER -------------------- */}
        <div className="flex flex-col justify-start items-start w-full gap-1">
          <label
            className="font-medium text-dark-gray dark:text-soft-white"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            placeholder="johndoe@gmail.com"
            className="w-full px-2 py-1.5 rounded shadow-sm outline-none focus-within:outline-none text-[#181818]"
          />
        </div>
        {/* -------------------- PASSWORD CONTAINER -------------------- */}
        <div className="flex flex-col justify-start items-start w-full gap-1">
          <label
            className="font-medium text-dark-gray dark:text-soft-white"
            htmlFor="password"
          >
            Email
          </label>
          <input
            type="password"
            id="password"
            required
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            placeholder="Enter Password"
            className="w-full px-2 py-1.5 rounded shadow-sm outline-none focus-within:outline-none text-[#181818]"
          />
        </div>
        {/* -------------------- SUBMIT BUTTON -------------------- */}
        <div className="flex justify-center items-center w-full px-4 py-3">
          <Button type="submit" fullWidth color="secondary">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
