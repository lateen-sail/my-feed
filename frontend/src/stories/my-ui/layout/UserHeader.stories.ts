import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import UserHeader from "@/components/my-ui/layout/UserHeader";

const meta: Meta<typeof UserHeader> = {
  title: "My UI/Layout/UserHeader",
  component: UserHeader,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
アプリケーションのヘッダーコンポーネントです。
ユーザー情報の表示、ページタイトル、ログアウト機能を提供します。
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    user: {
      control: "object",
      description: "ユーザー情報オブジェクト",
    },
    title: {
      control: "text",
      description: "ページタイトル",
    },
    onLogout: { action: "logout" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const { user, title, onLogout } = args;

    return React.createElement(UserHeader, {
      user,
      title,
      onLogout,
    });
  },
  args: {
    user: {
      email: "user@example.com",
      uid: "user123",
    },
    title: "My Feed",
  },
};
