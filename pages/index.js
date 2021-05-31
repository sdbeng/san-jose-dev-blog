import Head from 'next/head'
import Image from 'next/image'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'
import styles from '../styles/Home.module.css'

const DUMMY_POSTS = [
  {slug:'hello-devs', title:'hello devs', image:'coding-event-mesm.jpg', excerpt:'hello devs time to get going', date:'2021-05-29' }
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Summer 2021 Developer Bootcamp</title>
        <meta name="description" content="Become a Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS}/>
      

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
