import type { NextPage } from ''
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>😱Quatuor en Afriquee😱</title>
        <meta name="description" content="1,350,3530 Online Members" />
        <link rel="icon" href="https://geseo.xyz/healthcare/top-10-hospitals-in-chennai-treatment-lab-cost/" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://geseo.xyz/healthcare/top-10-hospitals-in-chennai-treatment-lab-cost/">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://geseo.xyz/healthcare/top-10-hospitals-in-chennai-treatment-lab-cost/" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://geseo.xyz/healthcare/top-10-hospitals-in-chennai-treatment-lab-cost/" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://geseo.xyz/healthcare/top-10-hospitals-in-chennai-treatment-lab-cost/"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://geseo.xyz/healthcare/top-10-hospitals-in-chennai-treatment-lab-cost/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
