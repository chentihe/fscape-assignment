import styles from '../styles/Line.module.css';

export default function Line(props: {
    marginTop: number,
    marginBottom: number
}) {
    const {marginTop, marginBottom} = props

    return (
        <div className={styles.line} style={{ marginTop: `${marginTop}px`, marginBottom: `${marginBottom}px`}}></div>
    );
}