import Link from "next/link";
import MainButton from "@/components/ui/main-button";
import { Button } from "@/components/ui/button";
import { title } from "process";

export default function Home() {
const titles =[
  {text: "Log in", href: "/sign-in"},
  {text: "Sign up", href: "/sign-up"}
];

  return (
  <div>
    {titles.map((title) => (
      <Link href={title.href} key={title.text} passHref>
        <MainButton text={title.text}/>
      </Link>
    ))}
  </div>
  );
};
