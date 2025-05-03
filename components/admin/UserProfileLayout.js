"use client";
import React from "react";
import { Avatar } from "flowbite-react";
import { useSession } from "next-auth/react";
import { getInitials } from "@/lib/helpers/utils";

const UserProfileComponent = () => {
  const session = useSession();
  const userData = session?.data?.user;
  const userInitials = getInitials(userData?.name) || "N/A";

  return (
    <div className="p-4 sm:p-6">
      <Avatar placeholderInitials={userInitials} rounded size="lg" />
      <form className="pt-8">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="full_name"
            id="floating_full_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            disabled
            value={userData?.name}
          />
          <label
            htmlFor="floating_full_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            disabled
            value={userData?.email}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email Address
          </label>
        </div>
      </form>
    </div>
  );
};

export default UserProfileComponent;
