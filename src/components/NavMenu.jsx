import styles from '../assets/styles/NavMenu.module.css';
import { FileSearch, FileDown } from 'lucide-react';
import { Logo } from './Logo';
import { useBreakpoint } from '../hooks/useBreakpoint';
export const NavMenu = () => {
  const isMobile = useBreakpoint('(max-width: 1024px)');

  return (
    <nav className={styles.nav}>
      {isMobile ? (
        <button
          className={`primary-btn btn-lg ${styles.button} ${styles.preview}`}
        >
          <FileSearch />
          Preview
        </button>
      ) : (
        <Logo />
      )}

      <button
        className={`secondary-btn btn-lg ${styles.button} ${styles.download}`}
      >
        <FileDown />
        Download PDF
      </button>
    </nav>
  );
};
