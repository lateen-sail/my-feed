import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  user: {
    email: string;
    uid: string;
  };
  title: string;
  onLogout: () => void;
};

const UserHeader: React.FC<Props> = ({ user, title, onLogout }) => {
  const resetStyle = "border-0 bg-transparent p-0 m-0";
  const themeStyle =
    "w-full bg-user-header-background text-user-header-foreground px-3 md:px-5 py-3";

  return (
    <header className={`${resetStyle} ${themeStyle}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex items-center space-x-4">
          <span className="text-xs hidden md:block">{user.email}</span>
          <Button onClick={onLogout} variant="outline">
            ログアウト
          </Button>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
