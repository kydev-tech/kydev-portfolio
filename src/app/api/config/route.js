// app/api/config/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get NameKey, Name, and Paragraf from environment variables
    const nameKey = process.env.NameKey || 'AI Assistant';
    const name = process.env.Name || 'Your Name';
    const paragraf = process.env.Paragraf || 'Passionate about creating beautiful, functional, and user-centered digital experiences that make a difference.';
    
    return NextResponse.json({
      nameKey: nameKey,
      name: name,
      paragraf: paragraf
    });
  } catch (error) {
    console.error('Error reading environment variables:', error);
    return NextResponse.json(
      {
        error: 'Failed to load configuration',
        nameKey: 'AI Assistant', // Fallback
        name: 'Your Name', // Fallback
        paragraf: 'Passionate about creating beautiful, functional, and user-centered digital experiences that make a difference.' // Fallback
      },
      { status: 500 }
    );
  }
}