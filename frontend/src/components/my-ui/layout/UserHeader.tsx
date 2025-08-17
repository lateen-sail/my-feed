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
  const themeStyle = "w-full bg-white border-b border-gray-200 px-4 py-3";

  return (
    <header className={`${resetStyle} ${themeStyle}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">{user.email}</span>
          <Button onClick={onLogout} variant="outline">
            ログアウト
          </Button>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
