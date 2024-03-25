import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar-client';

export default function Layout({children,}: {children: React.ReactNode;}) {
  return (
    <div className='min-h-screen w-full'>
      <div className='hidden md:block'>
        <Navbar/>
      </div>
      <main>
        {children}
      </main>
      <div className='block md:hidden'>
        <Footer/>
      </div>
    </div>
  );
}
