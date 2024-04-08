'use client'
import SignInForm from '@/components/form/SignInForm';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';

const page = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className='w-full min-h-screen'>
      <FaChevronLeft onClick={handleBackClick} size={24}/>
      <div className='mt-8'>
        <img src="/LogoWithText.svg" alt="Intellect isle logo" />
      </div>
      <div className='mt-8'>
        <SignInForm />
      </div>
    </div>
  );
};

export default page;
