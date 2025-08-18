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
        component: `フィードアイテムを表示する`,
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
    onFavoriteToggle: { action: "favorite-toggled" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const { title, url, favoriteState, onFavoriteToggle } = args;

    return React.createElement(
      "div",
      { className: "w-80" },
      React.createElement(FeedCard, {
        title,
        url,
        favoriteState,
        onFavoriteToggle,
      })
    );
  },
  args: {
    title: "Next.js 14の新機能とパフォーマンス改善について",
    url: "https://example.com/nextjs-14-features",
    favoriteState: false,
  },
};
