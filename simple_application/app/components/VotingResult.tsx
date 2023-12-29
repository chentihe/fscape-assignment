import ResultBar from "./ResultBar";
import Card from './Card';
import styles from '../styles/VotingResult.module.css';
import Checked from './Checked';
import Line from "./Line";

export default function VotingResult() {
    // TODO: move mockVote out to page.tsx
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
            <p className={styles.title}>Voting results</p>
            <Line
                marginTop={16}
                marginBottom={24}
            />
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
                        <p className={styles.rowContainer}>
                            <span>Current Votes</span>
                            <span className={styles.required}>Required 000K</span>
                        </p>
                        <p>Differential</p>
                        <p className={styles.rowContainer}>
                            <span>Current Differential</span>
                            <span className={styles.required}>Required 00K</span>
                        </p>
                        <p>Total Voting Power</p>
                    </div>
                    <div className={styles.infoContents}>
                        <Checked />
                        <p>000K</p>
                        <Checked />
                        <p>00.00K</p>
                        <p>00,000,000</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
