import styles from '../assets/styles/Logo.module.css';
import { PencilRuler } from 'lucide-react';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <svg
        className={styles.icon}
        viewBox='0 0 44 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M0 24C13.9836 24 22 15.9836 22 2C22 15.9836 30.0164 24 44 24C30.0164 24 22 32.0164 22 46C22 32.0164 13.9836 24 0 24Z'
          fill='#181D27'
        />
      </svg>
      CV Builder
    </div>
  );
};
