import { PersonalDetails } from './PersonalDetails';
import { EducationDetails } from './EducationDetails';
import { ProfessionalDetails } from './ProfessionalDetails';
import styles from '../assets/styles/Details.module.css';
export const Details = () => {
  return (
    <section id='details' className={styles.details}>
      <PersonalDetails />
      <EducationDetails />
      <ProfessionalDetails />
    </section>
  );
};
