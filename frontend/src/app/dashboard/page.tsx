"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { logOut } from "@/lib/auth";
import UserHeader from "@/components/my-ui/layout/UserHeader";
import FeedCard from "@/components/my-ui/card/FeedCard";
import FavoriteCard from "@/components/my-ui/card/FavoriteCard";
import FeedCategoryTabs from "@/components/my-ui/tabs/FeedCategoryTabs";
import { useFeedData } from "./hooks/useFeedData";
import { FEED_CATEGORIES, type FeedCategory } from "./constants";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<FeedCategory>(
    FEED_CATEGORIES[0]
  );
  const {
    loadFeedDataForCategory,
    getFeedDataByCategory,
    isLoadingCategory,
    favoriteData,
    toggleFavorite,
    updateReview,
    deleteFavorite,
    archiveFavorite,
  } = useFeedData();

  // カテゴリが変更されたときにデータを読み込む
  useEffect(() => {
    loadFeedDataForCategory(activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/auth");
    } catch (error) {
      console.error("ログアウトエラー:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">読み込み中...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <UserHeader
        user={{ email: user.email || "", uid: user.uid }}
        title="ダッシュボード"
        onLogout={handleLogout}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <FeedCategoryTabs
          categories={FEED_CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={(category) =>
            setActiveCategory(category as FeedCategory)
          }
        >
          {(category) => (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 本日のフィード */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category} - 本日のフィード
                </h2>
                <div className="space-y-4">
                  {isLoadingCategory(category as FeedCategory) ? (
                    <div className="flex items-center justify-center py-8">
                      <div className="text-lg text-gray-600">
                        {category}のフィードを読み込み中...
                      </div>
                    </div>
                  ) : getFeedDataByCategory(category as FeedCategory).length ===
                    0 ? (
                    <div className="flex items-center justify-center py-8">
                      <div className="text-lg text-gray-600">
                        {category}のフィードデータがありません
                      </div>
                    </div>
                  ) : (
                    getFeedDataByCategory(category as FeedCategory).map(
                      (item) => (
                        <FeedCard
                          key={item.id}
                          title={item.title}
                          url={item.url}
                          favoriteState={item.favoriteState}
                          reviewState={item.reviewState}
                          onFavoriteToggle={() =>
                            toggleFavorite(item.id, category as FeedCategory)
                          }
                          onReviewChange={(rating) =>
                            updateReview(
                              item.id,
                              rating,
                              category as FeedCategory
                            )
                          }
                        />
                      )
                    )
                  )}
                </div>
              </div>

              {/* お気に入り中のフィード */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  お気に入り中のフィード
                </h2>
                <div className="space-y-4">
                  {favoriteData.map((item) => (
                    <FavoriteCard
                      key={item.id}
                      title={item.title}
                      url={item.url}
                      isCurationTarget={item.isCurationTarget}
                      reviewState={item.reviewState}
                      onDelete={() => deleteFavorite(item.id)}
                      onArchive={() => archiveFavorite(item.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </FeedCategoryTabs>
      </div>
    </div>
  );
}
