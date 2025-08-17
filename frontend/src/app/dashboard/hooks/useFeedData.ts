import { useState, useEffect, useCallback } from "react";
import { MOCK_FAVORITE_DATA, FeedItem, FavoriteItem } from "../mock/feedData";
import { type FeedCategory, FEED_CATEGORIES } from "../constants";
import { fetchFeedData } from "../utils/feedApi";
import { FeedItem as ApiFeedItem } from "../types";

export const useFeedData = () => {
  // カテゴリごとのフィードデータを管理
  const [feedDataByCategory, setFeedDataByCategory] = useState<
    Record<FeedCategory, FeedItem[]>
  >({} as Record<FeedCategory, FeedItem[]>);

  const [loadingByCategory, setLoadingByCategory] = useState<
    Record<FeedCategory, boolean>
  >({} as Record<FeedCategory, boolean>);

  const [favoriteData, setFavoriteData] =
    useState<FavoriteItem[]>(MOCK_FAVORITE_DATA);

  // 初期化時に全カテゴリのローディング状態をfalseに設定
  useEffect(() => {
    const initialLoading: Record<string, boolean> = {};
    FEED_CATEGORIES.forEach((category) => {
      initialLoading[category] = false;
    });
    setLoadingByCategory(initialLoading as Record<FeedCategory, boolean>);
  }, []);

  // カテゴリごとのフィードデータを取得
  const loadFeedDataForCategory = useCallback(
    async (category: FeedCategory) => {
      if (loadingByCategory[category] || feedDataByCategory[category]) {
        return; // 既に読み込み中または読み込み済みの場合はスキップ
      }

      setLoadingByCategory((prev) => ({ ...prev, [category]: true }));

      try {
        const feedData = await fetchFeedData(category);

        if (feedData && feedData.items) {
          // APIのFeedItemを内部のFeedItem形式に変換
          const convertedItems: FeedItem[] = feedData.items.map(
            (item: ApiFeedItem) => ({
              id: item.id,
              title: item.title,
              url: item.url,
              favoriteState: false,
              reviewState: 0,
            })
          );

          setFeedDataByCategory((prev) => ({
            ...prev,
            [category]: convertedItems,
          }));
        }
      } catch (error) {
        console.error(`Failed to load feed data for ${category}:`, error);
      } finally {
        setLoadingByCategory((prev) => ({ ...prev, [category]: false }));
      }
    },
    [loadingByCategory, feedDataByCategory]
  );

  const getFeedDataByCategory = (category: FeedCategory): FeedItem[] => {
    return feedDataByCategory[category] || [];
  };

  const isLoadingCategory = (category: FeedCategory): boolean => {
    return loadingByCategory[category] || false;
  };

  const toggleFavorite = (id: string, category: FeedCategory) => {
    setFeedDataByCategory((prev) => ({
      ...prev,
      [category]: prev[category].map((item: FeedItem) =>
        item.id === id ? { ...item, favoriteState: !item.favoriteState } : item
      ),
    }));
  };

  const updateReview = (id: string, rating: number, category: FeedCategory) => {
    setFeedDataByCategory((prev) => ({
      ...prev,
      [category]: prev[category].map((item: FeedItem) =>
        item.id === id ? { ...item, reviewState: rating } : item
      ),
    }));
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
    loadFeedDataForCategory,
    getFeedDataByCategory,
    isLoadingCategory,
    favoriteData,
    toggleFavorite,
    updateReview,
    deleteFavorite,
    archiveFavorite,
  };
};
