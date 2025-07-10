import styles from '../assets/styles/Logo.module.css';
import { PencilRuler } from 'lucide-react';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <PencilRuler className={styles.icon} />
      CV Builder
    </div>
  );
};
