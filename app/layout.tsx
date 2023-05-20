import './globals.css';

export const metadata = {
  title: 'The Myrtle Tree',
  description: 'A pitch for a game about sound and reliving memories',
  icons: {
    icon: 'favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
