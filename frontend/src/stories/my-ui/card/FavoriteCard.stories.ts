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
        component: `お気に入りに登録されたフィードアイテムを表示する`,
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
