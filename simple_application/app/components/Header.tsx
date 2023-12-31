import styles from '../styles/Header.module.css';
import PrevPage from './PrevPage';

export default function Header(props: {
    day: number
}) {
    const { day } = props;

    return (
        <div className={styles.header}>
            <PrevPage/>
            <div className={styles.titleContainer}>
                <p className={styles.title}>Lorem ipsum dolor sit amet</p>
                <span>
                        <p>Active</p>
                </span>
            </div>
            <p className={styles.update}>Active ends in : {day} days</p>
        </div>
    )
}