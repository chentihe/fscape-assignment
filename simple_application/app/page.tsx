import styles from './page.module.css'
import PrevPage from './components/PrevPage'
import Header from './components/Header'
import DashBoard from './components/DashBoard'
import VotingResult from './components/VotingResult'
import Paragraph from './components/Paragraph'

export default function Home() {
  return (
    <main className={styles.main}>
      <PrevPage/>
      <Header/>
      <DashBoard/>
      <VotingResult/>
      <Paragraph/>
    </main>
  )
}
