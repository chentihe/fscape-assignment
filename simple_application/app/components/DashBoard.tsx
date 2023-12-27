import Card from './Card';
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
    return (
        <Card>
            <div className={styles.dashboard}>
                <div className={styles.title}>
                    <p>Your Voting</p>
                </div>
                <div className={styles.info}>
                    <div>
                        <p>Voting Power</p>
                        <div>
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