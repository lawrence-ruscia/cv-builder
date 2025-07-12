import { PersonalDetails } from './PersonalDetails';
import { EducationDetails } from './EducationDetails';
import { ProfessionalDetails } from './ProfessionalDetails';
import styles from '../assets/styles/Details.module.css';
import { useState } from 'react';
export const Details = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleSelectedFocus = (index) => {
    setFocusedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id='details' className={styles.details}>
      <PersonalDetails
        isOpen={focusedIndex === 0}
        onToggle={() => handleSelectedFocus(0)}
      />
      <EducationDetails
        isOpen={focusedIndex === 1}
        onToggle={() => handleSelectedFocus(1)}
      />

      <ProfessionalDetails
        isFocused={focusedIndex === 2}
        handleSelectedFocus={handleSelectedFocus}
      />
    </section>
  );
};
