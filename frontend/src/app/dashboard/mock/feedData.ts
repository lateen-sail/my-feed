export type FeedItem = {
  id: string;
  title: string;
  url: string;
  favoriteState: boolean;
  reviewState: number;
};

export type FavoriteItem = {
  id: string;
  title: string;
  url: string;
  isCurationTarget: boolean;
  reviewState: number;
};

export const MOCK_FEED_DATA: FeedItem[] = [
  {
    id: "world-news-1",
    title:
      "Global Economic Summit Addresses Climate Change and Trade Relations",
    url: "https://www.inoreader.com/stream/user/1005116457/tag/World-News/item/1",
    favoriteState: true,
    reviewState: 4,
  },
  {
    id: "japan-news-1",
    title: "日本の新しい技術政策が発表、AI分野への投資を強化",
    url: "https://www.inoreader.com/stream/user/1005116457/tag/Japan-News/item/1",
    favoriteState: false,
    reviewState: 3,
  },
  {
    id: "world-develop-1",
    title: "Revolutionary Web Framework Promises 10x Performance Improvement",
    url: "https://www.inoreader.com/stream/user/1005116457/tag/World-Develop/item/1",
    favoriteState: true,
    reviewState: 5,
  },
  {
    id: "japan-develop-1",
    title: "日本発のオープンソースプロジェクトが世界的注目を集める",
    url: "https://www.inoreader.com/stream/user/1005116457/tag/Japan-Develop/item/1",
    favoriteState: false,
    reviewState: 4,
  },
  {
    id: "world-design-1",
    title: "Minimalist Design Trends Shaping the Future of User Interfaces",
    url: "https://www.inoreader.com/stream/user/1005116457/tag/World-Design/item/1",
    favoriteState: true,
    reviewState: 3,
  },
  {
    id: "japan-design-1",
    title: "日本のデザイン哲学「間」がデジタルデザインに与える影響",
    url: "https://www.inoreader.com/stream/user/1005116457/tag/Japan-Design/item/1",
    favoriteState: false,
    reviewState: 5,
  },
  {
    id: "psychology-1",
    title:
      "The Psychology of User Experience: How Cognitive Biases Shape Design",
    url: "https://www.inoreader.com/stream/user/1005116457/tag/Psychology/item/1",
    favoriteState: true,
    reviewState: 4,
  },
  {
    id: "college-1",
    title:
      "Universities Embrace Remote Learning Technologies for Enhanced Education",
    url: "https://www.inoreader.com/stream/user/1005116457/tag/College/item/1",
    favoriteState: false,
    reviewState: 2,
  },
];

export const MOCK_FAVORITE_DATA: FavoriteItem[] = [
  {
    id: "f1",
    title:
      "React 18の新機能について詳しく解説します。Concurrent Featuresの使い方",
    url: "https://example.com/react-18-features",
    isCurationTarget: true,
    reviewState: 4,
  },
  {
    id: "f2",
    title: "Next.js 14の新機能とパフォーマンス改善について",
    url: "https://example.com/nextjs-14-updates",
    isCurationTarget: false,
    reviewState: 5,
  },
  {
    id: "f3",
    title: "GraphQLとREST APIの比較：どちらを選ぶべきか",
    url: "https://example.com/graphql-vs-rest",
    isCurationTarget: true,
    reviewState: 3,
  },
];
