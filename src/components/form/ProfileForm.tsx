import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '@/components/ui/form';
  import { Input } from '@/components/ui/input';
  import { Button } from '@/components/ui/button';

const FormSchema = z.object({
    profileName: z.string().min(1, "Profile name is required").max(40),
    ageCategoryIds: z.array(z.number()),
  });

  interface Category {
    id: number;
    name: string;
    type: 'age';
  }

  interface FormValues {
    profileName: string;
    ageCategoryIds: number[];
  }

  const ProfileForm = () => {
    const [ageCategories, setAgeCategories] = useState<Category[]>([]);
    const router = useRouter();
    const form = useForm<FormValues>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        profileName: "",
        ageCategoryIds: [],
      },
    });

    // Fetch categories
    useEffect (() => {
        const fetchCategories = async () => {
          const res = await fetch('/api/categories');
          const data = await res.json();
          setAgeCategories(data.ageCategories);
        };
    
        fetchCategories().catch(console.error);
      }, []);

    const onSubmit = async (values: FormValues) => {
        console.log(values);

        const submitData = { 
            profileName: values.profileName,
            ageCategotyIds: values.ageCategoryIds,
        }
        try {
            // we need to change the api to user
            const response = await fetch ('/api/admin', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },
                body: JSON.stringify(submitData),
            });
            if (response.ok) {
                router.push('/choose-interests');
            } else {
                throw new Error('Failed to update profile information');
            };

            const data = await response.json();
            console.log('Profile updated', data);
        } catch (error) {
            console.error('Failed to update profile information', error);
        }
    };

        // Function to navigate to /home, only using it now for the presentation because it's not working
    const navigateHome = () => {
        router.push('/home');
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
                <div className='space-y-2'>
                    <FormField
                        control={form.control}
                        name='profileName'
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-md">Choose a profile name</FormLabel>
                            <FormControl className="border-custom-purple">
                            <Input placeholder='Profile name' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Controller
                        name="ageCategoryIds"
                        control={form.control}
                        render={({ field: {onChange, value, ref} }) => (
                        <FormControl className="border-custom-purple">
                            <>
                            <FormLabel className="text-md">Select Age</FormLabel>
                            <select 
                                ref={ref} 
                                multiple 
                                value={value.map(String)}
                                onChange={(e) => {
                                const selectedOptions = Array.from(e.target.selectedOptions, option => parseInt(option.value, 10));
                                onChange(selectedOptions);
                                }} 
                                aria-label="Age Categories"
                                className='form-multiselect border border-custom-purple rounded-md'
                            >
                                {ageCategories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                                ))}
                            </select>
                            </>
                        </FormControl>
                        )}
                    />
                    <div className="relative flex justify-center items-center h-[70px] w-[212px] ml-7 mt-[250px]">
                        <img src="/CustomButton.svg" alt="Button" className="absolute inset-0 w-full h-full "/>
                        <Button className="w-full relative z-10 bg-transparent text-black-text text-xl font-bold py-2 px-4 border-none hover:bg-transparent" onClick={navigateHome}>
                            Next
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
  };

  export default ProfileForm;