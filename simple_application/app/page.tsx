'use client'

import styles from './page.module.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import VotingResult from './components/VotingResult'
import Paragraph from './components/Paragraph'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Dashboard/>
      <VotingResult/>
      <Paragraph/>
    </main>
  )
}
