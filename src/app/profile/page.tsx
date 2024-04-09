import HomeLayout from "../../components/HomeLayout";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import LogOut from "@/components/LogOut";
import { Button } from "@/components/ui/button";

const page = async () => {
  // Get the user information, who is logged in?
  const session = await getServerSession(authOptions);
  console.log(session);

  const singOutHandler = () => {};

  // returns the profile but only if signed in
  return (
    <>
      {session?.user ? (
        <HomeLayout>
          <div>
            <div className="h-[560px] flex flex-col justify-center items-center space-y-6">
              <h1 className="text-4xl">My Profile</h1>
              <h1 className="text-2xl">{session?.user.username}</h1>
              <Image
                src="/Timon right.jpg"
                width={100}
                height={100}
                alt="Pug avatar profile picture"
                className="rounded-full"
              ></Image>
              <LogOut />
            </div>
          </div>
        </HomeLayout>
      ) : (
        <>
        <div className='mt-6'>
        <img src="/LogoWithText.svg" alt="Intellect isle logo" />
      </div>
        <h1 className="text-2xl">Please Sign In To See Profile!</h1>
        </>
      )}
    </>
  );
};

export default page;
