"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                {/* Required for accessibility */}
                <SheetTitle className="sr-only">Menu</SheetTitle>

                <Link href={"/"}>
                    <h1 className="text-2xl font-semibold">
                        Manji <span className="text-accent">.</span>
                    </h1>
                </Link>

                <div className="flex flex-col justify-centeer items-center gap-8">
                    {links.map((link, index) => (
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                        text-xl capitalize hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
