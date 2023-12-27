import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2>
                    <span>
                            <p>Active</p>
                    </span>
                </div>
                <p className={styles.update}>Active ends in : 2 days</p>
            </div>
        </>
    )
}