import { Inter } from 'next/font/google'
import Nav from './componentes/nav'
import Footer from './componentes/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'First Next Project',
  description: 'Practicing Next in UTN',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
          <Nav/>
        <main className='centrar'>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
