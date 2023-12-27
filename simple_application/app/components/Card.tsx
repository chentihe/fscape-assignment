import styles from '../styles/Card.module.css';

export default function Card(props: {
    children: any
}) {
    return (
        <>
            <div className={styles.card}>{props.children}</div>
        </>
    )
}