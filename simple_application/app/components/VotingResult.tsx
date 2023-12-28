import ResultBar from "./ResultBar";
import Card from './Card';
import styles from '../styles/VotingResult.module.css';
import Checked from './Checked';

export default function VotingResult() {
    const mockVote = {
        totalVote: 10000000,
        supportVote: 9000000,
        rejectVote: 1000000
    }

    const bgColor = {
        support: "supportProgressBar",
        reject: "rejectProgressBar"
    }

    return (
        <Card>
            <div className={styles.textContainer}>
                <p>Voting results</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.layout}>
                <div className={styles.main}>
                    <ResultBar
                        totalVotes={mockVote.totalVote}
                        givenVotes={mockVote.supportVote}
                        progessBar={bgColor.support}
                        side={true}
                    />
                    <ResultBar
                        totalVotes={mockVote.totalVote}
                        givenVotes={mockVote.rejectVote}
                        progessBar={bgColor.reject}
                        side={false}
                    />
                    <div className={styles.viewVotes}>
                        <a href="#">View all votes</a>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.infoTitles}>
                        <p className={styles.leftText}>Quorum</p>
                        <p>Current Votes</p>
                        <p>Differential</p>
                        <p>Current Differential</p>
                        <p>Total Voting Power</p>
                    </div>
                    <div className={styles.infoContents}>
                        <Checked />
                        <p>Required 000K</p>
                        <p>000K</p>

                        <Checked />
                        <p>Required 000K</p>
                        <p>000K</p>

                        <p>00,000,000</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}