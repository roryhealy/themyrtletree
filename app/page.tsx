import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.begin}>
        <h2>Click to begin</h2>
      </div>

      <div className={styles.description}>
        <p>Noise - An audio-visual pitch for a game about sound</p>
        <p>By Rory Healy</p>
      </div>
    </main>
  )
}
