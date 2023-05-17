import { Inter } from 'next/font/google'

import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import ActiveStatus from './components/ActiveStatus'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Messagely',
  description: 'Welcome to Messagely',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
