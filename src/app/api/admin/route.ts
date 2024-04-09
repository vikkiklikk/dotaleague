
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from 'zod';

// Defining the schema for video data validation using Zod library
const videoSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  url: z.string().min(1, 'URL is required'),
  thumbnailUrl: z.string().min(1, 'URL is required'),
  description: z.string().min(1, 'Description is required'),
  categoryIds: z.array(z.number()), 
});

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parsing the request body
    console.log('Recieved data:', body);
    const validatedData = videoSchema.parse(body);// Validating the data against the video schema

    // Creating a new video in the database with the validated data
    const newVideo = await db.video.create({
      data: {
        title: validatedData.title,
        url: validatedData.url,
        thumbnailUrl: validatedData.thumbnailUrl,
        description: validatedData.description,
        // Connecting the video with categories by their IDs
        categories: {
          connect: validatedData.categoryIds.map(id => ({id})),
        }, 
      },
    });

    // Returning a successful response and handling errors
    return NextResponse.json({ video: newVideo, message: "Video uploaded successfully" }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Input validation error", errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
