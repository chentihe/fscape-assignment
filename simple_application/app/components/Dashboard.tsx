import Card from './Card';
import styles from '../styles/Dashboard.module.css'

export default function Dashboard(props: {
    votePower: number
}) {
    const { votePower } = props;

    return (
        <Card>
            <div className={styles.dashboard}>
                <p className={styles.title}>Your Voting</p>
                <div className={styles.info}>
                    <div className={styles.votingPowerContainer}>
                        <p className={styles.votingPowerText}>Voting Power</p>
                        <div className={styles.votingPowerValue}>
                            <span>{votePower.toLocaleString('en-US', {
                                minimumIntegerDigits: 5,
                                minimumFractionDigits: 2
                            })}</span>
                            <span> VOTE</span>
                        </div>
                    </div>
                    <span className={styles.support}>Support</span>
                    <span className={styles.reject}>Reject</span>
                </div>
            </div>
        </Card>
    )
}