import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FavoriteCard from "@/components/my-ui/card/FavoriteCard";

const meta: Meta<typeof FavoriteCard> = {
  title: "My UI/Card/FavoriteCard",
  component: FavoriteCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
お気に入りに登録されたフィードアイテムを表示するカードコンポーネントです。
星評価、キュレーション対象の表示、アーカイブ・削除機能を提供します。

改善案：
1. カードのサイズを可変にして、グリッドレイアウトに対応
2. タグ機能を追加して、カテゴリ分けを可能にする
3. プレビュー画像の表示機能を追加
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
    isCurationTarget: {
      control: "boolean",
      description: "キュレーション対象かどうか",
    },
    reviewState: {
      control: { type: "range", min: 0, max: 5, step: 1 },
      description: "星評価（0-5）",
    },
    onDelete: { action: "deleted" },
    onArchive: { action: "archived" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const { title, url, isCurationTarget, reviewState, onDelete, onArchive } =
      args;

    return React.createElement(
      "div",
      { className: "w-80" },
      React.createElement(FavoriteCard, {
        title,
        url,
        isCurationTarget,
        reviewState,
        onDelete,
        onArchive,
      })
    );
  },
  args: {
    title: "React 18の新機能について詳しく解説した記事",
    url: "https://example.com/react-18-features",
    isCurationTarget: true,
    reviewState: 4,
  },
};

export const WithoutCuration: Story = {
  render: (args) => {
    const { title, url, isCurationTarget, reviewState, onDelete, onArchive } =
      args;

    return React.createElement(
      "div",
      { className: "w-80" },
      React.createElement(FavoriteCard, {
        title,
        url,
        isCurationTarget,
        reviewState,
        onDelete,
        onArchive,
      })
    );
  },
  args: {
    title: "TypeScriptの基本的な使い方",
    url: "https://example.com/typescript-basics",
    isCurationTarget: false,
    reviewState: 3,
  },
};

export const HighRating: Story = {
  render: (args) => {
    const { title, url, isCurationTarget, reviewState, onDelete, onArchive } =
      args;

    return React.createElement(
      "div",
      { className: "w-80" },
      React.createElement(FavoriteCard, {
        title,
        url,
        isCurationTarget,
        reviewState,
        onDelete,
        onArchive,
      })
    );
  },
  args: {
    title: "最高評価の技術記事",
    url: "https://example.com/best-article",
    isCurationTarget: true,
    reviewState: 5,
  },
};

export const LongTitle: Story = {
  render: (args) => {
    const { title, url, isCurationTarget, reviewState, onDelete, onArchive } =
      args;

    return React.createElement(
      "div",
      { className: "w-80" },
      React.createElement(FavoriteCard, {
        title,
        url,
        isCurationTarget,
        reviewState,
        onDelete,
        onArchive,
      })
    );
  },
  args: {
    title:
      "非常に長いタイトルの記事で、複数行にわたって表示される可能性があるコンテンツのテストケース",
    url: "https://example.com/very-long-title-article",
    isCurationTarget: false,
    reviewState: 2,
  },
};
