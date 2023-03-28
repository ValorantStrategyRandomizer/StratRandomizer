import { Inter } from 'next/font/google'
import styles from './page.module.css'

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
<<<<<<< HEAD
      Hello World
=======
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/map">Map</Link>
        </li>
        <li>
          <Link href="/blog/hello-world">Blog Post</Link>
        </li>
      </ul>
>>>>>>> c220a1db2e89107b3518459e80194df223da6d39
    </main>
  )
}
