import './globals.css'

export const metadata = {
  title: 'Noise',
  description: 'Noise - An audio-visual pitch for a game about sound',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
