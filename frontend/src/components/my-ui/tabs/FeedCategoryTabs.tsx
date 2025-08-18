import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

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
  return (
    <div>
      <Tabs value={activeCategory} onValueChange={onCategoryChange}>
        <TabsList className="flex bg-feed-category-tabs-background w-full overflow-x-auto overscroll-x-contain scrollbar-hide">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className={cn(
                "data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                "shrink-0 text-sm text-feed-category-tabs-trigger-foreground data-[state=active]:text-feed-category-tabs-trigger-foreground-active data-[state=active]:font-bold"
              )}
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
