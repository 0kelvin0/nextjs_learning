import './globals.css'

// This parent layout.tsx apply to all the pages under its tree
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <h1>MyNav</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
