import LoginButton from "./LoginButton";

interface LoginCardProps {
  error: string | null;
  isLoading: boolean;
  handleGithubLogin: () => Promise<void>;
}

export default function LoginCard({
  error,
  isLoading,
  handleGithubLogin,
}: LoginCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Continue with your GitHub account
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <p className="text-center text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          </div>
        )}
        <LoginButton
          isLoading={isLoading}
          handleGithubLogin={handleGithubLogin}
        />
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            By signing in, you agree to our terms of service and privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}
