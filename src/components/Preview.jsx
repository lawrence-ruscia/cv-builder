import styles from '../assets/styles/Preview.module.css';
import { PersonalPreview } from './PersonalPreview';
import { EducationPreview } from './EducationPreview';

export const Preview = ({
  personalDetails,
  educationItems,
  professionalDetails,
}) => {
  return (
    <section id='preview' className={styles.previewWrapper}>
      <div className={styles.cvPreview}>
        <PersonalPreview personalDetails={personalDetails} />
        <EducationPreview educationItems={educationItems} />
      </div>
    </section>
  );
};
