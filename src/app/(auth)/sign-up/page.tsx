'use client'
import SignUpForm from '@/components/form/SignUpForm';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';

const page = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return (
    <div className='w-full '>
      <FaChevronLeft onClick={handleBackClick} size={24}/>
      <div className='mt-6'>
        <img src="/LogoWithText.svg" alt="Intellect isle logo" />
      </div>
      <div className='mt-8'>
        <SignUpForm />
      </div>
    </div>
  );
};

export default page;
