import styles from '../assets/styles/Preview.module.css';

import { PersonalPreview } from './PersonalPreview';

export const Preview = ({
  personalDetails,
  educationDetails,
  professionalDetails,
}) => {
  return (
    <section id='preview' className={styles.preview}>
      <PersonalPreview personalDetails={personalDetails} />
    </section>
  );
};
