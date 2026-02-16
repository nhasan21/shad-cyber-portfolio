import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Shad Hasan | Cybersecurity Portfolio",
  description:
    "Cybersecurity-focused portfolio showcasing security governance, automation, access control, and measurable impact.",
  metadataBase: new URL("https://shadhasan.com"),
  openGraph: {
    title: "Shad Hasan | Cybersecurity Portfolio",
    description:
      "Security impact through governance automation, access controls, and analytics-driven risk visibility.",
    url: "https://shadhasan.com",
    siteName: "Shad Hasan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
