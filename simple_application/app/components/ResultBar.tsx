import styles from '../styles/ResultBar.module.css';

export default function ResultBar(props: {
    totalVotes: number,
    givenVotes: number,
    progessBar: string,
    side: boolean
}) {
    const { totalVotes, givenVotes, progessBar, side } = props;
    const progress = givenVotes / totalVotes * 100;
    const title = side ? "Support" : "Reject";

    return (
        <div className={styles.progressContainer}>
            <p className={styles.textLeft}>{title}</p>
            <div className={styles.progressBarContainer}>
                <div className={`${styles[progessBar]}`} style={{ width: `${progress}%` }}></div>
            </div>
            <p className={styles.textRight}>
                {givenVotes.toLocaleString()} VOTE
                <span>{progress}%</span>
            </p>
        </div>
    )
}