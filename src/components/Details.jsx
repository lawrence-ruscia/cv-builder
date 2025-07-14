import { PersonalDetails } from './PersonalDetails';
import { EducationDetails } from './EducationDetails';
import { ExperienceDetails } from './ExperienceDetails';
import styles from '../assets/styles/Details.module.css';
import { useState } from 'react';
export const Details = ({
  personalDetails,
  handlePersonalDetails,
  educationItems,
  setEducationItems,
  experienceItems,
  setExperienceItems,
}) => {
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleSelectedFocus = (index) => {
    setFocusedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id='details' className={styles.details}>
      <PersonalDetails
        isOpen={focusedIndex === 0}
        onToggle={() => handleSelectedFocus(0)}
        personalDetails={personalDetails}
        handlePersonalDetails={handlePersonalDetails}
      />
      <EducationDetails
        isOpen={focusedIndex === 1}
        onToggle={() => handleSelectedFocus(1)}
        educationItems={educationItems}
        setEducationItems={setEducationItems}
      />

      <ExperienceDetails
        isOpen={focusedIndex === 2}
        onToggle={() => handleSelectedFocus(2)}
        experienceItems={experienceItems}
        setExperienceItems={setExperienceItems}
      />
    </section>
  );
};
