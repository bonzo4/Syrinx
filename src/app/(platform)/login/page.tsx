"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginCard from "./components/LoginCard";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGithubLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error: unknown) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to sign in with GitHub",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
            Syrinx
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Welcome back
          </p>
        </div>
        <LoginCard
          error={error}
          isLoading={isLoading}
          handleGithubLogin={handleGithubLogin}
        />
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need help?{" "}
            <a
              href="/support"
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
