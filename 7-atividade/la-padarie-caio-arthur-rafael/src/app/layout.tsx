import { Header } from './components/header'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'La Padarie',
  description: 'A website for La Padarie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
