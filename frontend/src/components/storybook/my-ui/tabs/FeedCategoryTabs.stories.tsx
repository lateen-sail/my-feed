import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FeedCategoryTabs from "../../../my-ui/tabs/FeedCategoryTabs";

const meta: Meta<typeof FeedCategoryTabs> = {
  title: "MyUI/Tabs/FeedCategoryTabs",
  component: FeedCategoryTabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
inoreaderで取得したフィードをカテゴリ別でタブ切り替えをするコンポーネントです。

## 改善案
1. カテゴリごとに異なるコンテンツを表示できるよう、children の代わりに render prop パターンを採用する
2. タブの表示数に応じてレスポンシブなレイアウト調整を追加する
3. アクセシビリティ向上のため、キーボードナビゲーションの強化を行う
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    categories: {
      control: { type: "object" },
      description: "表示するカテゴリの配列",
    },
    children: {
      control: false,
      description: "各タブに表示するコンテンツ",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ categories, ...args }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
      <div>
        <FeedCategoryTabs categories={categories} {...args}>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold mb-2">
              {selectedCategory} のフィード
            </h3>
            <p className="text-gray-600">
              ここに {selectedCategory} カテゴリのフィード内容が表示されます。
            </p>
            <div className="mt-4 space-y-2">
              <div className="p-3 bg-white rounded border">
                <h4 className="font-medium">サンプル記事 1</h4>
                <p className="text-sm text-gray-500">
                  {selectedCategory} に関する記事の内容...
                </p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h4 className="font-medium">サンプル記事 2</h4>
                <p className="text-sm text-gray-500">
                  {selectedCategory} に関する記事の内容...
                </p>
              </div>
            </div>
          </div>
        </FeedCategoryTabs>
      </div>
    );
  },
  args: {
    categories: [
      "World News",
      "Japan News",
      "World Develop",
      "Japan Develop",
      "World Design",
      "Japan Design",
      "Psychology",
      "College",
    ],
  },
};

export const FewCategories: Story = {
  render: ({ categories, ...args }) => {
    return (
      <div>
        <FeedCategoryTabs categories={categories} {...args}>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold mb-2">フィードコンテンツ</h3>
            <p className="text-gray-600">少数のカテゴリでのタブ表示例です。</p>
          </div>
        </FeedCategoryTabs>
      </div>
    );
  },
  args: {
    categories: ["News", "Tech", "Design"],
  },
};
