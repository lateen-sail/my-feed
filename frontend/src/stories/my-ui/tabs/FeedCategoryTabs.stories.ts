import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FeedCategoryTabs from "@/components/my-ui/tabs/FeedCategoryTabs";

const meta: Meta<typeof FeedCategoryTabs> = {
  title: "My UI/Tabs/FeedCategoryTabs",
  component: FeedCategoryTabs,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
フィードのカテゴリタブを表示するコンポーネントです。
複数のカテゴリ間の切り替えと、各カテゴリのコンテンツ表示を管理します。

改善案：
1. タブの並び順をドラッグ&ドロップで変更可能にする
2. お気に入りカテゴリの固定表示機能を追加
3. カテゴリごとの未読件数表示機能を追加
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    categories: {
      control: "object",
      description: "カテゴリの配列",
    },
    activeCategory: {
      control: "text",
      description: "現在アクティブなカテゴリ",
    },
    onCategoryChange: { action: "category-changed" },
    children: {
      control: false,
      description: "各カテゴリのコンテンツを返す関数",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SAMPLE_CATEGORIES = [
  "技術",
  "ビジネス",
  "デザイン",
  "ライフスタイル",
] as const;

// Default
export const Default: Story = {
  render: (args) => {
    const { categories, activeCategory, onCategoryChange } = args;

    const renderContent = (category: string) =>
      React.createElement(
        "div",
        { className: "p-4 bg-gray-50 rounded-lg" },
        React.createElement(
          "h3",
          { className: "text-lg font-semibold mb-2" },
          `${category}のコンテンツ`
        ),
        React.createElement(
          "p",
          { className: "text-gray-600" },
          `${category}カテゴリに関連するフィードアイテムがここに表示されます。`
        )
      );

    return React.createElement(FeedCategoryTabs, {
      categories,
      activeCategory,
      onCategoryChange,
    });
  },
  args: {
    categories: SAMPLE_CATEGORIES,
    activeCategory: "技術",
  },
};
