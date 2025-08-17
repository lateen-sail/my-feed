import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FeedCard from "@/components/my-ui/card/FeedCard";

const meta: Meta<typeof FeedCard> = {
  title: "My UI/Card/FeedCard",
  component: FeedCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
フィードアイテムを表示するカードコンポーネントです。
お気に入り登録、星評価機能を提供し、ユーザーがコンテンツを評価・管理できます。

改善案：
1. カテゴリタグの表示機能を追加
2. 投稿日時の表示機能を追加
3. プレビュー画像やサムネイルの表示機能を追加
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "フィードアイテムのタイトル",
    },
    url: {
      control: "text",
      description: "フィードアイテムのURL",
    },
    favoriteState: {
      control: "boolean",
      description: "お気に入り状態",
    },
    reviewState: {
      control: { type: "range", min: 0, max: 5, step: 1 },
      description: "星評価（0-5）",
    },
    onFavoriteToggle: { action: "favorite-toggled" },
    onReviewChange: { action: "review-changed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const {
      title,
      url,
      favoriteState,
      reviewState,
      onFavoriteToggle,
      onReviewChange,
    } = args;

    return React.createElement(
      "div",
      { className: "w-80" },
      React.createElement(FeedCard, {
        title,
        url,
        favoriteState,
        reviewState,
        onFavoriteToggle,
        onReviewChange,
      })
    );
  },
  args: {
    title: "Next.js 14の新機能とパフォーマンス改善について",
    url: "https://example.com/nextjs-14-features",
    favoriteState: false,
    reviewState: 0,
  },
};

export const Favorited: Story = {
  render: (args) => {
    const {
      title,
      url,
      favoriteState,
      reviewState,
      onFavoriteToggle,
      onReviewChange,
    } = args;

    return React.createElement(
      "div",
      { className: "w-80" },
      React.createElement(FeedCard, {
        title,
        url,
        favoriteState,
        reviewState,
        onFavoriteToggle,
        onReviewChange,
      })
    );
  },
  args: {
    title: "お気に入り登録済みの記事",
    url: "https://example.com/favorited-article",
    favoriteState: true,
    reviewState: 4,
  },
};

export const HighRating: Story = {
  render: (args) => {
    const {
      title,
      url,
      favoriteState,
      reviewState,
      onFavoriteToggle,
      onReviewChange,
    } = args;

    return React.createElement(
      "div",
      { className: "w-80" },
      React.createElement(FeedCard, {
        title,
        url,
        favoriteState,
        reviewState,
        onFavoriteToggle,
        onReviewChange,
      })
    );
  },
  args: {
    title: "最高評価の技術記事",
    url: "https://example.com/best-tech-article",
    favoriteState: true,
    reviewState: 5,
  },
};

export const LongTitle: Story = {
  render: (args) => {
    const {
      title,
      url,
      favoriteState,
      reviewState,
      onFavoriteToggle,
      onReviewChange,
    } = args;

    return React.createElement(
      "div",
      { className: "w-80" },
      React.createElement(FeedCard, {
        title,
        url,
        favoriteState,
        reviewState,
        onFavoriteToggle,
        onReviewChange,
      })
    );
  },
  args: {
    title:
      "非常に長いタイトルの記事で、複数行にわたって表示される可能性があるコンテンツのテストケース",
    url: "https://example.com/very-long-title-article",
    favoriteState: false,
    reviewState: 3,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [favoriteState, setFavoriteState] = React.useState(
      args.favoriteState
    );
    const [reviewState, setReviewState] = React.useState(args.reviewState);

    const handleFavoriteToggle = () => {
      setFavoriteState(!favoriteState);
      args.onFavoriteToggle();
    };

    const handleReviewChange = (rating: number) => {
      setReviewState(rating);
      args.onReviewChange(rating);
    };

    return React.createElement(
      "div",
      { className: "w-80" },
      React.createElement(FeedCard, {
        title: args.title,
        url: args.url,
        favoriteState,
        reviewState,
        onFavoriteToggle: handleFavoriteToggle,
        onReviewChange: handleReviewChange,
      })
    );
  },
  args: {
    title: "インタラクティブなカードのテスト",
    url: "https://example.com/interactive-test",
    favoriteState: false,
    reviewState: 0,
  },
};
