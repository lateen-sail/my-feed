import React from "react";
import { Heart, Star } from "lucide-react";

type Props = {
  title: string;
  url: string;
  favoriteState: boolean;
  onFavoriteToggle: () => void;
};

const FeedCard: React.FC<Props> = ({
  title,
  url,
  favoriteState,
  onFavoriteToggle,
}) => {
  return (
    <div className="relative">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-5 text-sm underline font-bold rounded hover:bg-feed-card-background-hover transition-all"
      >
        <p className="text-lg">{title}</p>
      </a>
      <button onClick={onFavoriteToggle} className="absolute top-2 right-2">
        <Heart
          size={20}
          fill={favoriteState ? "currentColor" : "none"}
          className="text-feed-card-icon-favorite"
        />
      </button>
    </div>
  );
};

export default FeedCard;
