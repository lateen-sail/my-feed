import { useState } from "react";
import {
  MOCK_FEED_DATA,
  MOCK_FAVORITE_DATA,
  FeedItem,
  FavoriteItem,
} from "../mock/feedData";

export const useFeedData = () => {
  const [feedData, setFeedData] = useState<FeedItem[]>(MOCK_FEED_DATA);
  const [favoriteData, setFavoriteData] =
    useState<FavoriteItem[]>(MOCK_FAVORITE_DATA);

  const toggleFavorite = (id: string) => {
    setFeedData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, favoriteState: !item.favoriteState } : item
      )
    );
  };

  const updateReview = (id: string, rating: number) => {
    setFeedData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, reviewState: rating } : item
      )
    );
  };

  const deleteFavorite = (id: string) => {
    setFavoriteData((prev) => prev.filter((item) => item.id !== id));
  };

  const archiveFavorite = (id: string) => {
    // 実際の実装では、アーカイブ状態を管理する必要があります
    console.log(`アーカイブ: ${id}`);
    // 今回はモックなので削除と同じ動作にします
    setFavoriteData((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    feedData,
    favoriteData,
    toggleFavorite,
    updateReview,
    deleteFavorite,
    archiveFavorite,
  };
};
