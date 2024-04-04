import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getVideoById(videoId: string) {
  const id = parseInt(videoId, 10); // Convert string ID to number, as your Prisma schema expects an integer ID for videos.
  try {
    const video = await prisma.video.findUnique({
      where: {
        id: id,
      },
      include: {
        categories: true, // Assuming you want to include related categories
      },
    });

    return video;
  } catch (error) {
    console.error("Failed to fetch video:", error);
    throw new Error('Failed to fetch video');
  }
}
