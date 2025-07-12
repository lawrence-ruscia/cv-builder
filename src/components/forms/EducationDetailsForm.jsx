import styles from '../../assets/styles/forms/EducationDetailsForm.module.css';
import { Check } from 'lucide-react';
export const EducationDetailsForm = ({ handleClose }) => {
  return (
    <form className={styles.detailsForm}>
      <div className={styles.formGroup}>
        <label htmlFor='school' className={styles.label}>
          School
        </label>
        <input
          type='text'
          name='school'
          id='school'
          className={styles.input}
          placeholder='Harvard University'
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='degree' className={styles.label}>
          Degree
        </label>
        <input
          type='text'
          name='degree'
          id='degree'
          className={styles.input}
          placeholder='Bachelor of Science in Information Technology'
        />
      </div>
      <div className={styles.inlineFormGroup}>
        <div className={styles.formGroup}>
          <label htmlFor='startDate' className={`${styles.label} text-caption`}>
            Start Date
          </label>
          <input
            type='date'
            id='email'
            className={styles.input}
            name='startDate'
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='endDate' className={`${styles.label} text-caption`}>
            End Date
          </label>
          <input
            type='date'
            id='endDate'
            className={styles.input}
            name='endDate'
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='location' className={styles.label}>
          Location
        </label>
        <input
          type='text'
          name='location'
          id='location'
          className={styles.input}
          placeholder='Cambridge, Massachusettes'
        />
      </div>

      <div className={styles.options}>
        <button
          type='button'
          className='btn-md outline-btn'
          onClick={handleClose}
        >
          Cancel
        </button>
        <button type='submit' className='btn-md primary-btn'>
          <Check />
          Save
        </button>
      </div>
    </form>
  );
};
