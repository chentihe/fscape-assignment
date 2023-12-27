import styles from './page.module.css'
import PrevPage from './components/PrevPage'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import VotingResult from './components/VotingResult'
import Paragraph from './components/Paragraph'

export default function Home() {
  return (
    <main className={styles.main}>
      <PrevPage/>
      <Header/>
      <Dashboard/>
      <VotingResult/>
      <Paragraph/>
    </main>
  )
}
