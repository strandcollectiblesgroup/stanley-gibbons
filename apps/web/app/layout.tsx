import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AllProviders } from "@repo/lib/components/providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700", "500", "400"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "Clicky Button Pusher | Website app",
  description:
    "An app that gives you the power to trigger actions on your computer remotely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AllProviders bodyFont={roboto} headingFont={roboto}>
          {children}
        </AllProviders>
      </body>
    </html>
  );
}
