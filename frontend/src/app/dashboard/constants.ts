// フィードカテゴリの定数定義
export const FEED_CATEGORIES = [
  "World News",
  "Japan News",
  "World Develop",
  "Japan Develop",
  "World Design",
  "Japan Design",
  "Psychology",
  "College",
] as const;

export type FeedCategory = (typeof FEED_CATEGORIES)[number];

// 環境変数のマッピング
export const FEED_CATEGORY_URLS: Record<FeedCategory, string> = {
  "World News": process.env.NEXT_PUBLIC_VITE_JSON_WORLD_NEWS || "",
  "Japan News": process.env.NEXT_PUBLIC_VITE_JSON_JAPAN_NEWS || "",
  "World Develop": process.env.NEXT_PUBLIC_VITE_JSON_WORLD_DEVELOP || "",
  "Japan Develop": process.env.NEXT_PUBLIC_VITE_JSON_JAPAN_DEVELOP || "",
  "World Design": process.env.NEXT_PUBLIC_VITE_JSON_WORLD_DESIGN || "",
  "Japan Design": process.env.NEXT_PUBLIC_VITE_JSON_JAPAN_DESIGN || "",
  Psychology: process.env.NEXT_PUBLIC_VITE_JSON_PSYCHOLOGY || "",
  College: process.env.NEXT_PUBLIC_VITE_JSON_COLLEGE || "",
};
