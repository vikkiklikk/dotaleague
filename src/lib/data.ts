import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getVideoById(videoId: string) {
  const id = parseInt(videoId, 10); 
  try {
    const video = await prisma.video.findUnique({
      where: {
        id: id,
      },
      include: {
        categories: true, 
      },
    });

    return video;
  } catch (error) {
    console.error("Failed to fetch video:", error);
    throw new Error('Failed to fetch video');
  }
}
