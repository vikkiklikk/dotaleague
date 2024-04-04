import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
      const categories = await db.category.findMany();
      const ageCategories = categories.filter(c => c.type === 'age');
      const themeCategories = categories.filter(c => c.type === 'theme');
      return new NextResponse(JSON.stringify({ageCategories, themeCategories}), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      return new NextResponse(JSON.stringify({ message: "Failed to fetch categories" }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }