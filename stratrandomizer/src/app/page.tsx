import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Fragment } from 'react'

import Link from 'next/link'
import NavBar from './ui/NavBar'
import Footer from './ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <Fragment>
    <NavBar/>
    <Footer/>
</Fragment>
    
    // <main className={styles.main}>
    //   <ul>
    //     <li>
    //       <Link href="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link href="/map">Map</Link>
    //     </li>
    //     <li>
    //       <Link href="/blog/hello-world">Blog Post</Link>
    //     </li>
    //   </ul>
    // </main>
  )
}
