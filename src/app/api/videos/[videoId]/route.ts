// File: /app/api/videos/[videoId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getVideoById } from '@/lib/data'; // Ensure the path matches your project structure

// Named export for the GET method
export async function GET(req: NextRequest) {
  // Extract the videoId from the URL
  const videoId = req.nextUrl.pathname.split('/').pop();

  if (!videoId) {
    return new Response(JSON.stringify({ message: 'Video ID is required' }), { status: 400, headers: { 'Content-Type': 'application/json' }});
  }

  try {
    const video = await getVideoById(videoId);

    if (!video) {
      return new Response(JSON.stringify({ message: 'Video not found' }), { status: 404, headers: { 'Content-Type': 'application/json' }});
    }

    return new Response(JSON.stringify(video), { status: 200, headers: { 'Content-Type': 'application/json' }});
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to fetch video' }), { status: 500, headers: { 'Content-Type': 'application/json' }});
  }
}
