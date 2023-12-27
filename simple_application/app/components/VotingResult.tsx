import Image from 'next/image';
import ResultBar from "./ResultBar";
import Card from './Card';

export default function VotingResult() {
    // TODO: wrapped as component
    return (
        <Card>
            <div>
                <div>
                    <p>Voting results</p>
                </div>
                <ResultBar/>
                <ResultBar/>
                <div>
                    <p>Quorum</p>
                    <p>Reached</p>
                    <Image
                        src="/checked.svg"
                        alt="Checked"
                        width={8}
                        height={8}
                        priority
                        />
                    <Image
                        src="/eclipse.svg"
                        alt="Eclipse"
                        width={8}
                        height={8}
                        priority
                        />
                </div>
                <div>
                    <p>Current Votes</p>
                    <p>Required 000K</p>
                    <p>000K</p>
                </div>
                <div>
                    <p>Differential</p>
                    <p>Reached</p>
                    <Image
                        src="/checked.svg"
                        alt="Checked"
                        width={8}
                        height={8}
                        priority
                        />
                    <Image
                        src="/eclipse.svg"
                        alt="Eclipse"
                        width={8}
                        height={8}
                        priority
                        />
                </div>
                <div>
                    <p>Current Differential</p>
                    <p>Required 000K</p>
                    <p>000K</p>
                </div>
                <div>
                    <p>Total Voting Power</p>
                    <p>00,000,000</p>
                </div>
                <div>
                    <a href="">View all votes</a>
                </div>
            </div>
        </Card>
    )
}