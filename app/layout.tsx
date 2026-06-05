import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-H5TRFC39CS";

export const metadata: Metadata = {
  title: "Birmingham Mobile Tyres | 24/7 Emergency Tyre Fitting",
  description:
    "24/7 emergency mobile tyre fitting in Birmingham with 30 minute response time. Roadside tyre replacement, puncture repair and mobile tyre assistance at your home, work or roadside location.",
  keywords: [
    "Birmingham mobile tyres",
    "mobile tyre fitting Birmingham",
    "emergency tyre fitting Birmingham",
    "24/7 mobile tyres Birmingham",
    "30 minute tyre response Birmingham",
    "mobile tyre fitter near me Birmingham",
    "flat tyre help Birmingham",
    "emergency flat tyre Birmingham",
    "same day mobile tyre fitting Birmingham",
    "roadside tyre replacement Birmingham",
    "puncture repair Birmingham",
    "mobile puncture repair Birmingham",
    "tyre call out Birmingham",
    "mobile tyre service near me",
  ],
  alternates: {
    canonical: "https://birminghammobiletyres.co.uk",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg?v=2",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg?v=2",
  },
  openGraph: {
    title: "Birmingham Mobile Tyres | 24/7 Emergency Tyre Fitting",
    description:
      "Fast emergency mobile tyre fitting, puncture repair and roadside tyre assistance across Birmingham with 30 minute response time.",
    url: "https://birminghammobiletyres.co.uk",
    siteName: "Birmingham Mobile Tyres",
    images: [
      {
        url: "https://birminghammobiletyres.co.uk/images/birmingham-poster.jpeg",
        width: 1200,
        height: 630,
        alt: "Birmingham Mobile Tyres 24/7 emergency mobile tyre fitting",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birmingham Mobile Tyres | 30 Minute Emergency Tyre Response",
    description:
      "Fast mobile tyre fitting, puncture repair and roadside tyre help across Birmingham.",
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
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
