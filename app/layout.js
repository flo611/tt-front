import "@/app/assets/css/styles.css";
import PostProvider from "@/app/components/context/postProvider";
import UserProvider from "@/app/components/context/userProvider";

export const metadata = {
  title: "TT-FRONTEND",
  description: "Test technique front end",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <UserProvider>
        <PostProvider>
          <body className={""}>{children}</body>
        </PostProvider>
      </UserProvider>
    </html>
  );
}
