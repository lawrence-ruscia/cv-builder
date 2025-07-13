import styles from '../assets/styles/Preview.module.css';

import { PersonalPreview } from './PersonalPreview';
import { useRef, useState, useEffect } from 'react';
export const Preview = ({
  personalDetails,
  educationDetails,
  professionalDetails,
}) => {
  return (
    <section id='preview' className={styles.previewWrapper}>
      <div className={styles.cvPreview}>
        <PersonalPreview personalDetails={personalDetails} />
      </div>
    </section>
  );
};
