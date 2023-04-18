import './globals.css'

export const metadata = {
  title: 'Shamraiz Masih',
  description: 'Resume Site',
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
