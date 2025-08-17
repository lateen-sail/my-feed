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

改善案：
1. ユーザーアバター画像の表示機能を追加
2. ナビゲーションメニューの追加
3. 通知機能やドロップダウンメニューの追加
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

export const LongTitle: Story = {
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
    title: "非常に長いページタイトルのテストケース",
  },
};

export const LongEmail: Story = {
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
      email: "very.long.email.address@example-domain.com",
      uid: "user123",
    },
    title: "Dashboard",
  },
};

export const Interactive: Story = {
  render: (args) => {
    const handleLogout = () => {
      alert("ログアウトしました");
      args.onLogout();
    };

    return React.createElement(UserHeader, {
      user: args.user,
      title: args.title,
      onLogout: handleLogout,
    });
  },
  args: {
    user: {
      email: "interactive@example.com",
      uid: "interactive123",
    },
    title: "Interactive Test",
  },
};

export const DifferentTitles: Story = {
  render: (args) => {
    const [currentTitle, setCurrentTitle] = React.useState(args.title);
    const titles = ["Dashboard", "My Feed", "Settings", "Profile"];

    const handleTitleChange = () => {
      const currentIndex = titles.indexOf(currentTitle);
      const nextIndex = (currentIndex + 1) % titles.length;
      setCurrentTitle(titles[nextIndex]);
    };

    return React.createElement(
      "div",
      null,
      React.createElement(UserHeader, {
        user: args.user,
        title: currentTitle,
        onLogout: args.onLogout,
      }),
      React.createElement(
        "div",
        { className: "p-4" },
        React.createElement(
          "button",
          {
            onClick: handleTitleChange,
            className:
              "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
          },
          "タイトルを変更"
        )
      )
    );
  },
  args: {
    user: {
      email: "test@example.com",
      uid: "test123",
    },
    title: "Dashboard",
  },
};
