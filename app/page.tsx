import Image from 'next/image'
import { Inter } from "next/font/google"
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Main page</h1>
      <Link href="/about">Go to About</Link>
    </main>
  )
}
