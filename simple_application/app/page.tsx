'use client'

import styles from './page.module.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import VotingResult from './components/VotingResult'
import Paragraphs from './components/Paragraphs'

export default function Home() {
  // mock data
  const mockVote = {
    totalVote: 10000000,
    supportVote: 9000000,
    rejectVote: 1000000
  };

  const paragraphs = [
    {
      title: "Lorem ipsum dolor sit amet",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
    }
  ]

  const remainingDay = 2;

  const votePower = 0;

  return (
    <main className={styles.main}>
      <Header day={remainingDay}/>
      <Dashboard votePower={votePower}/>
      <VotingResult vote={mockVote}/>
      <Paragraphs paragraphs={paragraphs}/>
    </main>
  )
}
