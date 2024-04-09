'use client'
import ProfileForm from '@/components/form/ProfileForm';

const page = () => {
 
  return (
    <div className='w-full min-h-screen justify-center'>
      <h1 className='text-3xl font-semibold'>Create a profile</h1>
      <div className='mt-8'>
        <img src="/LogoWithText.svg" alt="Intellect isle logo" />
      </div>
      <div className='mt-8'>
        <ProfileForm />
      </div>
    </div>
  );
};

export default page;
