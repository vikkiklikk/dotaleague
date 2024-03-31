// Assuming db is set up similarly to your user creation route
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from 'zod';

const videoSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  url: z.string().min(1, 'URL is required'),
  description: z.string().min(1, 'Description is required'),
  categoryIds: z.array(z.number()), //expecting an array of numbers for categoryIds
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = videoSchema.parse(body);

    // Here you might want to add additional checks similar to the user creation,
    // For example, checking if the video URL already exists, etc.

    const newVideo = await db.video.create({
      data: {
        title: validatedData.title,
        url: validatedData.url,
        description: validatedData.description,
        categories: {
          connect: validatedData.categoryIds.map(id => ({id})),
        }, // Adjust according to your actual db schema and relationships
      },
    });

    // Exclude any fields from the response you don't want to expose
    return NextResponse.json({ video: newVideo, message: "Video uploaded successfully" }, { status: 201 });
  } catch (error) {
    // If it's a ZodError, you might want to handle it differently to provide detailed input validation feedback
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Input validation error", errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
