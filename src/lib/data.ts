import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getVideos() {
  try {
    const videos = await prisma.video.findMany ({
      include: {
        categories: true,
      },
    });
    return videos;
  } catch (error) {
    console.error("Failed to fetch videos", error);
    throw new Error('Failed to fetch videos');
  }
}

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

export async function GetCategories() {
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (error) {
    console.error("Failed to fetch categories", error);
    throw new Error('Failed to fetch categories');
  }
}