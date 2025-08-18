import React, { useState } from "react";
import { Star, MoreVertical, Archive, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  url: string;
  isCurationTarget: boolean;
  reviewState: number;
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

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        fill={index < reviewState ? "currentColor" : "none"}
        className="text-favorite-card-star"
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
    <div
      className={cn(
        "relative flex flex-col pl-3 pr-5 py-5 gap-2 rounded-lg",
        isCurationTarget
          ? "bg-favorite-card-background text-favorite-card-foreground"
          : "bg-favorite-card-background-curated text-favorite-card-foreground-curated"
      )}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-base underline font-bold rounded transition-all"
      >
        {title}
      </a>
      <div className="flex space-x-1">{renderStars()}</div>
      <button onClick={handleDropdownToggle} className="absolute top-2 right-2">
        <MoreVertical size={20} />
      </button>
      {showDropdown && (
        <div className="absolute right-0 top-8 bg-favorite-card-menu-background text-favorite-card-menu-foreground: rounded-md shadow-lg z-10 min-w-[120px] text-sm py-2">
          <button
            onClick={() => handleAction(onArchive)}
            className="w-full flex items-center gap-1 px-3 py-2"
          >
            <Archive size={16} />
            <span>保管する</span>
          </button>
          <button
            onClick={() => handleAction(onDelete)}
            className="w-full flex items-center gap-1 px-3 py-2"
          >
            <Trash2 size={16} />
            <span>削除する</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FavoriteCard;
