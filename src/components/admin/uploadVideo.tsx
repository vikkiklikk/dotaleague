'use client';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const FormSchema = z.object({
  url: z.string().min(1, 'URL is required').max(100),
  title: z.string().min(1, 'Title is required').max(100),
  description: z.string().min(1, 'Description is required'),
  ageCategoryIds: z.array(z.number()), 
  themeCategoryIds: z.array(z.number()),
});

interface Category {
  id: number;
  name: string;
  type: 'age' | 'theme';
}

const UploadVideo = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      url: '',
      title: '',
      description: '',
      ageCategoryIds: [],
      themeCategoryIds: [],
    },
  });

  const [ageCategories, setAgeCategories] = useState<Category[]>([]);
  const [themeCategories, setThemeCategories] = useState<Category[]>([]);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  useEffect (() => {
    const fetchCategories = async () => {
      const res = await fetch('/api/categories');
      const data = await res.json();
      setAgeCategories(data.ageCategories);
      setThemeCategories(data.themeCategories);
    };

    fetchCategories().catch(console.error);
  }, []);

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log(values);

    setIsError(false);
    setFeedbackMessage('');

  // Destructure ageCategoryIds and themeCategoryIds from values and capture the rest under otherData
  const { ageCategoryIds, themeCategoryIds, ...otherData } = values;

  // Merge ageCategoryIds and themeCategoryIds
  const categoryIds = [...ageCategoryIds, ...themeCategoryIds];

  // Construct the final data object to be sent, including the merged categoryIds
  const submitData = {
    ...otherData, // This contains url, title, description
    categoryIds,  // The merged array of category IDs
  };

    try {
        const response = await fetch ('/api/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submitData),
        });

        if (!response.ok) {
            throw new Error('Failed to upload the video');
        }

        const data = await response.json();
        setFeedbackMessage('Video uploaded successfully');
        console.log('Video uploaded successfully', data);
    } catch (error) {
      setIsError(true);
      setFeedbackMessage('Failed to upload video');
        console.error('Failed to upload video', error);
    }
  };

  // I have to add a function to change the normal youtube url to an embed url
  // so in stead of https://www.youtube.com/watch?v=OVKRBGzH8aM
  // it would be https://www.youtube.com/embed/OVKRBGzH8aM
  // same with the thumbnail image, I need to add the option to upload a special url that changes the youtube url to the thumbnail image
  //https://img.youtube.com/vi/[youtube video ID]/maxresdefault.jpg

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='space-y-2'>
          <FormField
            control={form.control}
            name='url'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video URL</FormLabel>
                <FormControl>
                  <Input placeholder='Paste the video URL' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='Type in the video title' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder='Type in a video description' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Controller
            name="ageCategoryIds"
            control={form.control}
            render={({ field: {onChange, value, ref} }) => (
              <FormControl>
                <>
                  <FormLabel>Age groups</FormLabel>
                  <select 
                    ref={ref} 
                    multiple 
                    value={value.map(String)}
                    onChange={(e) => {
                      const selectedOptions = Array.from(e.target.selectedOptions, option => parseInt(option.value, 10));
                      onChange(selectedOptions);
                    }} 
                    aria-label="Age Categories"
                    className='form-multiselect'
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
          <Controller
            name="themeCategoryIds"
            control={form.control}
            render={({ field: { onChange, value, ref } }) => (
              <FormControl>
                <>
                  <FormLabel>Theme select</FormLabel>
                  <select 
                    ref={ref} 
                    multiple value={value.map(String)} 
                    onChange={(e) => {
                      const val = Array.from(e.target.selectedOptions, option => parseInt(option.value, 10));
                      onChange(val);
                    }} 
                    aria-label="Theme Categories"
                    className='form-multiselect'>
                    {themeCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </>
              </FormControl>
            )}
          />
        </div>
        <Button className='w-full mt-6' type='submit'>
          Upload video
        </Button>
        {feedbackMessage && (
          <div className={isError ? 'text-red-500' : 'text-green-500'}>
            {feedbackMessage}
          </div>
        )}
      </form>
    </Form>
  );
};

export default UploadVideo;
