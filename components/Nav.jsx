"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
    const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link href={link.path} key={index} className={`${
            link.path === pathname 
              ? "text-yellow-400 bg-gradient-to-r from-purple-600 to-yellow-400 bg-clip-text text-transparent" 
              : "text-purple-300"
            } capitalize font-medium hover:text-yellow-400 hover:scale-105 transition-all duration-300`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;