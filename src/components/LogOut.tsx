"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";

const LogOut = () => {
  return (
    <Button
      onClick={() => {
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/`,
        });
      }}
    >
      Log Out
    </Button>
  );
};

export default LogOut;
