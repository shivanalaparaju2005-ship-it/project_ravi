import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RAVI TELUGU TRAVELLER CHANNEL INTELLIGENCE',
  description: 'Content • Audience • Performance • Strategy - Premium YouTube Channel Strategy & Growth Intelligence Suite',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#070A0F] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
