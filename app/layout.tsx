import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const Nav = () => (
    <nav className='w-screen sticky top-0'>
      <ul className="flex justify-center border-emerald-900 border-b">
        <li className="mr-6 text-emerald-500 hover:text-emerald-800">
          <Link href="/">Compare</Link>
        </li>
        <li className="mr-6 text-emerald-500 hover:text-emerald-800">
          <Link href="/results">Global Results</Link>
        </li>
      </ul>
    </nav>
  )
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='flex flex-col w-screen h-screen justify-between items-center relative'>
        <Nav />
        {children}
        </body>
    </html>
  )
}
