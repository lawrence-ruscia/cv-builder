import styles from '../assets/styles/EducationDetails.module.css';
import { useState } from 'react';
import { GraduationCap, ChevronDown } from 'lucide-react';
import { EducationList } from './EducationList';

export const EducationDetails = ({ isOpen, onToggle }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleIsFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleIsFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    <section
      id='educationDetails'
      className={`details-section ${styles.educationDetails} `}
    >
      {isFormOpen ? (
        <p className={styles.formTitle}>Education Details</p>
      ) : (
        <button
          type='button'
          className={`${styles.preview} ${isOpen && styles.open}`}
          onClick={onToggle}
        >
          <span className={styles.title}>
            <GraduationCap />
            <p>Education</p>
          </span>

          <ChevronDown
            className={`${isOpen && styles.arrowUp} ${styles.icon}`}
          />
        </button>
      )}

      <EducationList
        isOpen={isOpen}
        isFormOpen={isFormOpen}
        handleIsFormOpen={handleIsFormOpen}
        handleIsFormClose={handleIsFormClose}
      />
    </section>
  );
};
