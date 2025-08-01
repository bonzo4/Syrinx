import { getAuth } from "firebase/auth";

export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const auth = getAuth();

  return <>{children}</>;
}
