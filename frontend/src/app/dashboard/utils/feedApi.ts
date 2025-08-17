import { Feed } from "../types";
import { FeedCategory } from "../constants";

export const fetchFeedData = async (
  category: FeedCategory
): Promise<Feed | null> => {
  try {
    const response = await fetch(`/api/feed/${encodeURIComponent(category)}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Feed = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching feed data for ${category}:`, error);
    return null;
  }
};
