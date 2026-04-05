import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StoryBloom — Personalised Children's Books",
  description: "Create a personalised children's book where your little one becomes the hero of their own magical adventure. The perfect gift they'll treasure forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
