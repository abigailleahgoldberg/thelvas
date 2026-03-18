import type { Metadata } from 'next'
import './globals.css'
import { NetworkBar } from '@/components/NetworkBar'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#003831',
}

export const metadata: Metadata = {
  title: 'The LV A\'s — Las Vegas Athletics Fan Site',
  description: 'Hot takes, game recaps, and fan culture for Las Vegas Athletics fans. No mercy. No filter. Just baseball.',
  keywords: 'Las Vegas Athletics, LV A\'s, Oakland A\'s Las Vegas, Allegiant Stadium baseball, Vegas baseball',
  alternates: { canonical: 'https://thelvas.com' },
  openGraph: {
    title: 'The LV A\'s — Las Vegas Athletics Fan Site',
    description: 'Hot takes, game recaps, and fan culture for Las Vegas Athletics fans. No mercy. No filter. Just baseball.',
    url: 'https://thelvas.com',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;600;700&family=Barlow+Condensed:wght@400;600;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'The LV A\'s',
              url: 'https://thelvas.com',
              description: 'Bold takes and unfiltered fan perspective on the Las Vegas Athletics.',
            }),
          }}
        />
      </head>
      <body>
        <NetworkBar />
        <div style={{ paddingTop: '28px' }}>{children}</div>
      </body>
    </html>
  )
}
