import styles from '../assets/styles/ExperienceDetails.module.css';
import { useState } from 'react';
import { Briefcase, ChevronDown } from 'lucide-react';
import { ExperienceList } from './ExperienceList';
import { useBreakpoint } from '../hooks/useBreakpoint';
export const ExperienceDetails = ({
  isOpen,
  onToggle,
  experienceItems,
  setExperienceItems,
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isTablet = useBreakpoint('(min-width: 768px)');

  const handleIsFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleIsFormClose = () => {
    setIsFormOpen(false);
  };
  return (
    <section
      id='experienceDetails'
      className={`details-section ${styles.experienceDetails} `}
    >
      {isFormOpen ? (
        <p className={styles.formTitle}>Professional Experience Details</p>
      ) : (
        <button
          type='button'
          className={`${styles.preview} ${isOpen && styles.open}`}
          onClick={onToggle}
        >
          <span className={styles.title}>
            <Briefcase />
            <p>{isTablet && 'Professional'} Experience</p>
          </span>

          <ChevronDown
            className={`${isOpen && styles.arrowUp} ${styles.icon}`}
          />
        </button>
      )}

      <ExperienceList
        isOpen={isOpen}
        isFormOpen={isFormOpen}
        handleIsFormOpen={handleIsFormOpen}
        handleIsFormClose={handleIsFormClose}
        experienceItems={experienceItems}
        setExperienceItems={setExperienceItems}
      />
    </section>
  );
};
