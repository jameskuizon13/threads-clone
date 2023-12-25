"use client";

import { sidebarLinks } from "@/constants";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// For mobile navigation
const BottomBar = () => {
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map(({ imgURL, label, route }) => {
          const isActive =
            pathname === route ||
            (pathname.includes(route) && route.length > 1);
          return (
            <Link
              href={route}
              key={label}
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
            >
              <Image src={imgURL} alt="label" width={24} height={24} />

              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BottomBar;
