import { NextRequest, NextResponse } from "next/server";
import {
  FEED_CATEGORY_URLS,
  type FeedCategory,
} from "@/app/dashboard/constants";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;
  const feedCategory = category as FeedCategory;

  if (!FEED_CATEGORY_URLS[feedCategory]) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  const url = FEED_CATEGORY_URLS[feedCategory];

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; FeedReader/1.0)",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching feed data for ${category}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch feed data" },
      { status: 500 }
    );
  }
}
