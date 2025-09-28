"use client"
import React, { useState, useEffect, useRef } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import { assets, CartIcon } from "@/assets/assets";
import { useRouter } from "next/navigation";

const UserButton = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
 

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null; // Hide if user not logged in

  return (
    <div className="relative z-50" ref={dropdownRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border border-gray-300 hover:shadow-md transition"
      >
        {user.profileImageUrl ? (
          <Image src={user.profileImageUrl} alt="User Avatar" width={40} height={40} />
        ) : (
          <Image src={assets.user_icon} alt="User Icon" width={40} height={40} />
        )}
      </button>

      {/* Dropdown Overlay */}
      <div
        className={`fixed top-[70px] right-8 w-56 bg-white shadow-2xl rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 origin-top-right z-[100] ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* User Info */}
        <div className="px-4 py-3 border-b border-gray-200">
          <p className="text-sm text-gray-700 font-medium">Hello, {user.firstName || "User"}</p>
          <p className="text-xs text-gray-500">{user.emailAddresses[0]?.emailAddress}</p>
        </div>

        {/* Menu Items */}
        <button
          onClick={() => { setOpen(false); router.push("/account"); }}
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Manage Account
        </button>

        <button
          onClick={() => { setOpen(false); router.push("/my-orders"); }}
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          My Orders
        </button>

        <button
          onClick={() => { setOpen(false); router.push("/cart"); }}
          className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <CartIcon className="w-4 h-4" /> Cart
        </button>

        <button
          onClick={() => { setOpen(false); signOut(); }}
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserButton;

