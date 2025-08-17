// frontend/src/components/my-ui/tabs/FeedCategoryTabs.tsx
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ChildrenFn = (category: string) => React.ReactNode;

type Props = {
  categories: readonly string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  children?: ChildrenFn;
};

const FeedCategoryTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
  children,
}: Props) => {
  const resetStyle = "w-full";
  const themeStyle = "space-y-4";

  return (
    <div className={`${resetStyle} ${themeStyle}`}>
      <Tabs
        value={activeCategory}
        onValueChange={onCategoryChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="text-xs lg:text-sm"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-4">
            {children ? children(category) : null}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FeedCategoryTabs;
