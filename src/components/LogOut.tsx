"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";

const LogOut = () => {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
    >
      <Link href="/">Log Out</Link>
    </Button>
  );
};

export default LogOut;
