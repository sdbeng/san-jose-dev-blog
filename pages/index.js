import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/home-page/hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Summer 2021 Developer Bootcamp</title>
        <meta name="description" content="Become a Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Hero />
      

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Summer Bootcamp Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
