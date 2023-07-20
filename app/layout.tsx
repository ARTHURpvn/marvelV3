import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marvel',
  description: 'Criado por ARTHURpvn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-white dark:bg-slate-900 dark:text-white text-slate-500' >{children}</body>
    </html>
  )
}
