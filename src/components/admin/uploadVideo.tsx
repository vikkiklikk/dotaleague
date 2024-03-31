'use client';
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
import Link from 'next/link';
import { useState } from 'react';

const FormSchema = z.object({
  url: z.string().min(1, 'URL is required').max(100),
  title: z.string().min(1, 'Title is required').max(100),
  description: z.string().min(1, 'Description is required'),
  categoryIds: z.array(z.number()), 
});

interface Category {
  id: number;
  name: string;
}

const UploadVideo = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      url: '',
      title: '',
      description: '',
      categoryIds: [],
    },
  });

  const [categories, setCategories] = useState([]); // Fetch and set this from your API

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isError, setIsError] = useState (false);

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log(values);

    setIsError(false);
    setFeedbackMessage('');

    try {
        const response = await fetch ('/api/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
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
  name="categoryIds"
  control={form.control}
  render={({ field: { onChange, value, ref, ...field } }) => (
    <select {...field} multiple>
      <option value="1">Category 1</option>
      {/* Add options statically for testing */}
    </select>
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
