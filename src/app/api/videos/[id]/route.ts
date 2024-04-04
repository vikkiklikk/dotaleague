// pages/api/videos/[videoId].ts

import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function get(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('videoId');

  if (!id) {
    return new NextResponse(JSON.stringify({ error: 'Video ID is required' }), {
      status: 400,
    });
  }

  try {
    const video = await db.video.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!video) {
      return new NextResponse(JSON.stringify({ error: 'Video not found' }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(video), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to fetch video:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
    });
  }
}
