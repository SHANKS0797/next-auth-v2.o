"use client";
import Link from "next/link";
import { Switch } from "@nextui-org/switch";
import SunIcon from "@/icons/sunIcon";
import MoonIcon from "@/icons/moonIcon";

export default function TopNavbar() {
  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <nav className="sticky top-0 inset-x-0 flex flex-row justify-between items-center w-full px-4 py-2.5 bg-gradient-to-r from-[#A1C4FD] to-[#C2E9FB] dark:from-[#6A0572] dark:to-[#FF5F6D] text-[#1D3557] dark:text-white dark:bg-emerald-400">
      <Link href="/" className="text-xl font-semibold">
        I am being tested!
      </Link>
      <ul className="flex flex-row justify-end items-center gap-3 list-none text-base font-medium">
        <li>
          <Link href="/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/protected-route">Protected Route</Link>
        </li>
        <li>
          <Switch
            defaultSelected
            size="lg"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            onClick={handleClick}
          ></Switch>
        </li>
      </ul>
    </nav>
  );
}
