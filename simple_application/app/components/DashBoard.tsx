import Card from './Card';
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
    return (
        <Card>
            <div className={styles.dashboard}>
                <p className={styles.title}>Your Voting</p>
                <div className={styles.info}>
                    <div className={styles.votingPowerContainer}>
                        <p className={styles.votingPowerText}>Voting Power</p>
                        <div className={styles.votingPowerValue}>
                            <span>00,000.00</span>
                            <span>VOTE</span>
                        </div>
                    </div>
                    <span className={styles.support}>Support</span>
                    <span className={styles.reject}>Reject</span>
                </div>
            </div>
        </Card>
    )
}