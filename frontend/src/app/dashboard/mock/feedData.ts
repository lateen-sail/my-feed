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
    id: "1",
    title:
      "React 18の新機能について詳しく解説します。Concurrent Featuresの使い方",
    url: "https://example.com/react-18-features",
    favoriteState: true,
    reviewState: 4,
  },
  {
    id: "2",
    title: "TypeScriptでより良いコードを書くためのベストプラクティス集",
    url: "https://example.com/typescript-best-practices",
    favoriteState: false,
    reviewState: 3,
  },
  {
    id: "3",
    title: "Next.js 14の新機能とパフォーマンス改善について",
    url: "https://example.com/nextjs-14-updates",
    favoriteState: true,
    reviewState: 5,
  },
  {
    id: "4",
    title: "モダンCSS設計手法：BEMからCSS-in-JSまで",
    url: "https://example.com/modern-css-design",
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
