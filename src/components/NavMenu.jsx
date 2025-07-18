import styles from '../assets/styles/NavMenu.module.css';
import { Type, FileSearch, FileDown } from 'lucide-react';
import { Logo } from './Logo';
import { useBreakpoint } from '../hooks/useBreakpoint';
export const NavMenu = ({ isPreview, handleTogglePreview, pdfBlobUrl }) => {
  const isMobile = useBreakpoint('(max-width: 1024px)');

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdfBlobUrl;
    link.download = 'cv-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(pdfBlobUrl); // clean up
  };
  return (
    <nav className={styles.nav}>
      {isMobile ? (
        <button
          className={`primary-btn btn-lg ${styles.button} ${styles.preview}`}
          onClick={handleTogglePreview}
        >
          {isPreview ? (
            <>
              <Type /> Edit Details
            </>
          ) : (
            <>
              <FileSearch /> Preview
            </>
          )}
        </button>
      ) : (
        <Logo />
      )}

      <button
        className={`${isMobile ? 'outline-btn' : 'primary-btn'} btn-lg ${
          styles.button
        } ${styles.download}`}
        onClick={handleDownloadPdf}
      >
        <FileDown />
        Download PDF
      </button>
    </nav>
  );
};
