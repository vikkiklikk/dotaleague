
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from 'zod';

const videoSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  url: z.string().min(1, 'URL is required'),
  description: z.string().min(1, 'Description is required'),
  categoryIds: z.array(z.number()), 
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = videoSchema.parse(body);

    const newVideo = await db.video.create({
      data: {
        title: validatedData.title,
        url: validatedData.url,
        description: validatedData.description,
        categories: {
          connect: validatedData.categoryIds.map(id => ({id})),
        }, 
      },
    });

    
    return NextResponse.json({ video: newVideo, message: "Video uploaded successfully" }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Input validation error", errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
