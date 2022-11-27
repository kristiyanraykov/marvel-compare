import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const Nav = () => (
    <nav className='w-full sticky top-0'>
      <ul className="flex justify-center border-emerald-900 border-b max-w-7xl">
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
      <body className='flex flex-col w-full h-full justify-center align-middle m-auto'>
        <Nav />
        {children}
        </body>
    </html>
  )
}
