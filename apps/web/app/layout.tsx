import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AllProviders } from "@repo/lib/components/providers";
import { BasicNav } from "@repo/lib/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700", "500", "400"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "Stanley Gibbons",
  description: "We buy stamps, you buy stamps. BUY STAMPS!!",
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
          <BasicNav />
          {children}
        </AllProviders>
      </body>
    </html>
  );
}
