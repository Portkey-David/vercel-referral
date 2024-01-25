import Script from 'next/script';
import type { Metadata } from 'next';
import './globals.scss';
import '../styles/common.scss';
import '../styles/constants.scss';
import '../styles/font.scss';

export const metadata: Metadata = {
  title: 'Portkey Referral Program',
  description: `Portkey is the first account abstraction (AA) wallet from aelf's ecosystem. Users can swiftly log into Portkey via their Web2 social info with no private keys or mnemonics required. Account creation is free for all users!`,
  keywords: ['DID', 'social recovery', 'crypto wallet', 'AA wallet'],
};

export const viewport = {
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Global site tag (gtag.js) - Google Analytics  */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-9SJ4NVZV74" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9SJ4NVZV74');
        `}
      </Script>

      <body>{children}</body>
    </html>
  );
}
