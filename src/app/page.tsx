import Link from "next/link";
import CustomButton from "@/components/ui/customButton";
import { title } from "process";

export default function Home() {
  const titles =[
    {text: "Log in", href: "/sign-in"},
    {text: "Sign up", href: "/sign-up"}
  ];

  return (
  <div>
    <img src="/LogoWithText.svg" alt="Intellect Isle logo" className="pb-8"/>
    <div className="pl-8 ">
      {titles.map((title) => (
        <Link href={title.href} key={title.text} passHref>
          <CustomButton text={title.text}/>
        </Link>
      ))}
    </div>
  </div>
  );
};
