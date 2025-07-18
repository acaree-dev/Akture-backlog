import type { Metadata } from "next";
import { Inter, Roboto, Teko } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Akture - sports and actions live streaming",
  description: "Akture - sports and actions live streaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={twMerge(
          teko.className,
          "bg-white text-gray-400 antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
