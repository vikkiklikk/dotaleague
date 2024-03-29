// pages/api/uploadVideo.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Your POST logic here
    const { title, url, description, category } = req.body;
    try {
      const video = await prisma.video.create({
        data: {
          title,
          url,
          description,
          categorie:{
            connect: {id: category},
          },
        },
      });
      res.status(200).json(video);
    } catch (error) {
      console.error('Error uploading video', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    // If the request is not a POST, respond with 405 method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
