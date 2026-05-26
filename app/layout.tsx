import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "24/7 Birmingham Mobile Tyres | Emergency Tyre Fitting Near You",
  icons: {
    icon: [
      {
        url: "/favicon.svg?v=2",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg?v=2",
  },
  description:
    "Emergency mobile tyre fitting in Birmingham. Fast roadside tyre replacement, puncture repair and mobile tyre assistance at your home, work or roadside location.",
  keywords: [
    "Birmingham mobile tyres",
    "mobile tyre fitting Birmingham",
    "emergency tyre fitting Birmingham",
    "24/7 mobile tyres Birmingham",
    "roadside tyre replacement Birmingham",
    "puncture repair Birmingham",
    "mobile tyre repair Birmingham",
  ],
  alternates: {
    canonical: "https://birminghammobiletyres.co.uk",
  },
  openGraph: {
    title: "Birmingham Mobile Tyres | 24/7 Emergency Tyre Fitting",
    description:
      "Fast emergency mobile tyre fitting, puncture repair and roadside tyre assistance across Birmingham.",
    url: "https://birminghammobiletyres.co.uk",
    siteName: "Birmingham Mobile Tyres",
    images: [
      {
        url: "https://birminghammobiletyres.co.uk/images/birmingham-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Birmingham Mobile Tyres emergency mobile tyre fitting",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birmingham Mobile Tyres | 24/7 Emergency Tyre Fitting",
    description:
      "Fast mobile tyre fitting and roadside tyre help across Birmingham.",
    images: [
      "https://birminghammobiletyres.co.uk/images/birmingham-poster.jpeg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
