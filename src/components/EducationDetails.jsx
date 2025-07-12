import styles from '../assets/styles/EducationDetails.module.css';
import { useState } from 'react';
import { GraduationCap, ChevronDown } from 'lucide-react';
import { EducationList } from './EducationList';

export const EducationDetails = () => {
  const [isOpen, setIsOpen] = useState(open);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section
      id='educationDetails'
      className={`details-section ${styles.educationDetails} `}
    >
      <button
        type='button'
        className={`${styles.preview} ${isOpen && styles.open}`}
        onClick={handleToggle}
      >
        <span className={styles.title}>
          <GraduationCap />
          <p>Education</p>
        </span>

        <ChevronDown className={`${isOpen && styles.arrowUp} ${styles.icon}`} />
      </button>
      <EducationList isOpen={isOpen} />
    </section>
  );
};
