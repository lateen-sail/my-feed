"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { logOut } from "@/lib/auth";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/auth");
    } catch (error) {
      console.error("ログアウトエラー:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">読み込み中...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">ダッシュボード</h1>
          <Button onClick={handleLogout} variant="outline">
            ログアウト
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>ユーザー情報</CardTitle>
              <CardDescription>現在ログインしているユーザー</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>メールアドレス:</strong> {user.email}
                </p>
                <p>
                  <strong>UID:</strong> {user.uid}
                </p>
                <p>
                  <strong>作成日:</strong> {user.metadata.creationTime}
                </p>
                <p>
                  <strong>最終ログイン:</strong> {user.metadata.lastSignInTime}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>認証状態</CardTitle>
              <CardDescription>Firebase認証の状態</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>認証済み:</strong> ✅
                </p>
                <p>
                  <strong>メール確認:</strong>{" "}
                  {user.emailVerified ? "✅" : "❌"}
                </p>
                <p>
                  <strong>プロバイダー:</strong>{" "}
                  {user.providerData[0]?.providerId || "email"}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>アクション</CardTitle>
              <CardDescription>利用可能な操作</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  プロフィール編集
                </Button>
                <Button className="w-full" variant="outline">
                  パスワード変更
                </Button>
                <Button className="w-full" variant="outline">
                  設定
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
