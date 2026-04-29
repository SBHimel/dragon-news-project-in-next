"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`relative px-2 py-1 font-medium transition ${
                isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-500"
            }`}
        >
            {children}

            {/* underline */}
            <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                }`}
            />
        </Link>
    );
};

export default NavLink;