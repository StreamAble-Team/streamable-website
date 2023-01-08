import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLink = ({ children, href }) => {
  const router = useRouter();

  return (
    <Link href={href} className={router.pathname === href ? "active" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
