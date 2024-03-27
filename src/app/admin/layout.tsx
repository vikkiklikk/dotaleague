import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar-client';

export default function HomeLayout({children,}: {children: React.ReactNode;}) {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <div className='hidden md:block'>
        <Navbar/>
      </div>
      <main className='pb-36 md:pb-0'>
        {children}
      </main>
      <div className='block md:hidden'>
        <Footer/>
      </div>
    </div>
  );
}
