import Image from 'next/image';
import styles from '../styles/PrevPage.module.css';

export default function PrevPage() {
    return (
        <>
            <div className={styles.prevpage}>
                <Image
                src="/left_arrow.svg"
                alt="Previous Page Arrow"
                width={16}
                height={16}
                priority
                />
                <p className={styles.block}>Back</p>
            </div>
        </>
    )
}