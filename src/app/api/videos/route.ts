import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
      // Retrieving a list of videos from the database.
      // The 'include' option specifies that related 'categories' data should also be fetched along with videos
      const videos = await db.video.findMany({
        include: {
          categories: true, 
        },
      });
      
      // If the retrieval is successful, return a NextResponse object containing the videos as JSON.
      // The status is set to 200, indicating a successful operation, and the 'Content-Type' header is set to 'application/json'
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
