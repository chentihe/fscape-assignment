import Image from 'next/image';
import styles from '../styles/Checked.module.css';

export default function Checked() {
  return (
    <div className={styles.checkedContainer}>
      <p className={styles.text}>Reached</p>
      <Image
        src="/checked.png"
        alt="Checked"
        width={8}
        height={8}
        priority
      />
    </div>
  );
}