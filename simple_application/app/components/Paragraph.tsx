import styles from '../styles/Paragraph.module.css';
import { Paragraph } from '../types/Paragraph';

export default function ParagraphComponent(props: {
    paragraph: Paragraph
}) {
    const { paragraph } = props;

    return (
        <>
            <p className={styles.title}>{paragraph.title}</p>
            <p className={styles.paragraph}>{paragraph.paragraph}</p>
        </>
    )
}