import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MoreVertical, Archive, Trash2 } from "lucide-react";

type Props = {
  title: string;
  url: string;
  isCurationTarget: boolean;
  reviewState: number; // 1-5の評価
  onDelete: () => void;
  onArchive: () => void;
};

const FavoriteCard: React.FC<Props> = ({
  title,
  url,
  isCurationTarget,
  reviewState,
  onDelete,
  onArchive,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const resetStyle = "border-0 bg-transparent p-0 m-0";
  const themeStyle =
    "bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow";

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        fill={index < reviewState ? "currentColor" : "none"}
        className="text-yellow-400"
      />
    ));
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAction = (action: () => void) => {
    action();
    setShowDropdown(false);
  };

  return (
    <Card className={`${resetStyle} ${themeStyle} relative`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium text-gray-900 line-clamp-2">
            {title}
          </CardTitle>
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className="ml-2 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            >
              <MoreVertical size={20} />
            </button>
            {showDropdown && (
              <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-[120px]">
                <button
                  onClick={() => handleAction(onArchive)}
                  className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                >
                  <Archive size={16} />
                  <span>保管する</span>
                </button>
                <button
                  onClick={() => handleAction(onDelete)}
                  className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                >
                  <Trash2 size={16} />
                  <span>削除する</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 underline block truncate"
          >
            {url}
          </a>
          <div className="flex justify-between items-center">
            <div className="flex space-x-1">{renderStars()}</div>
            {isCurationTarget && (
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                キュレーション対象
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FavoriteCard;
