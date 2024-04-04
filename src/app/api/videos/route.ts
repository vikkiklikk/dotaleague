import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
      const videos = await db.video.findMany({
        include: {
          categories: true, 
        },
      });
      
      return new NextResponse(JSON.stringify(videos), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error("Failed to fetch videos:", error);
      return new NextResponse(JSON.stringify({ message: "Failed to fetch videos" }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
}
