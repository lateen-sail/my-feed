import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Star } from "lucide-react";

type Props = {
  title: string;
  url: string;
  favoriteState: boolean;
  reviewState: number; // 1-5の評価
  onFavoriteToggle: () => void;
  onReviewChange: (rating: number) => void;
};

const FeedCard: React.FC<Props> = ({
  title,
  url,
  favoriteState,
  reviewState,
  onFavoriteToggle,
  onReviewChange,
}) => {
  const resetStyle = "border-0 bg-transparent p-0 m-0";
  const themeStyle =
    "bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow";

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <button
        key={index}
        onClick={() => onReviewChange(index + 1)}
        className="text-yellow-400 hover:text-yellow-500 transition-colors"
      >
        <Star size={16} fill={index < reviewState ? "currentColor" : "none"} />
      </button>
    ));
  };

  return (
    <Card className={`${resetStyle} ${themeStyle}`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium text-gray-900 line-clamp-2">
            {title}
          </CardTitle>
          <button
            onClick={onFavoriteToggle}
            className="ml-2 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
          >
            <Heart
              size={20}
              fill={favoriteState ? "currentColor" : "none"}
              className={favoriteState ? "text-red-500" : ""}
            />
          </button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-between items-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 underline truncate flex-1 mr-4"
          >
            {url}
          </a>
          <div className="flex space-x-1">{renderStars()}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedCard;
