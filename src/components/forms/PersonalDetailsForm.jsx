import styles from '../../assets/styles/forms/PersonalDetailsForm.module.css';
import avatar from '../../assets/images/avatar-placeholder.svg';
import { User, AtSign, Briefcase, Phone, Check } from 'lucide-react';
export const PersonalDetailsForm = ({ handleClose }) => {
  return (
    <form className={styles.detailsForm}>
      <div className={styles.avatar}>
        <img src={avatar} alt='' />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='fullname' className={styles.label}>
          Full Name
        </label>
        <input
          type='text'
          name='fullName'
          id='fullName'
          className={styles.input}
          placeholder='John Doe'
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='jobTitle' className={`${styles.label} text-caption`}>
          Job Title
        </label>
        <input
          type='text'
          id='jobTitle'
          className={styles.input}
          name='jobTitle'
          placeholder='Software Engineer'
        />
      </div>

      <div className={styles.inlineFormGroup}>
        <div className={styles.formGroup}>
          <label htmlFor='mail' className={`${styles.label} text-caption`}>
            Email
          </label>
          <input
            type='email'
            id='email'
            className={styles.input}
            name='email'
            placeholder='johndoe@mail.com'
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='phone' className={`${styles.label} text-caption`}>
            Phone
          </label>
          <input
            type='tel'
            id='phone'
            className={styles.input}
            name='phone'
            placeholder='0917 123 4567'
          />
        </div>
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
