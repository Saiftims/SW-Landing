import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silent Witness | Automated Accident & Injury Analysis",
  description: "Automated crash analysis, injury causation, and litigation support—replacing $10,000 human reports with instant, court-defensible outputs.",
  icons: {
    icon: "/images/logos/Silent-Witness-Icon.ico",
    shortcut: "/images/logos/Silent-Witness-Icon.ico",
    apple: "/images/logos/Silent-Witness-Icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <GoogleAnalytics />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
