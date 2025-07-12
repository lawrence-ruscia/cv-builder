import styles from '../../assets/styles/forms/PersonalDetailsForm.module.css';
import avatar from '../../assets/images/avatar-placeholder.svg';
import { User, AtSign, Briefcase, Phone, Check } from 'lucide-react';
export const PersonalDetailsForm = ({ handleClose }) => {
  return (
    <form className='detailsForm'>
      <div className={styles.avatar}>
        <img src={avatar} alt='' />
      </div>
      <div className='formGroup'>
        <label htmlFor='fullname' className='formLabel'>
          Full Name
        </label>
        <input
          type='text'
          name='fullName'
          id='fullName'
          className='formInput'
          placeholder='John Doe'
        />
      </div>
      <div className='formGroup'>
        <label htmlFor='jobTitle' className={'formLabel text-caption'}>
          Job Title
        </label>
        <input
          type='text'
          id='jobTitle'
          className='formInput'
          name='jobTitle'
          placeholder='Software Engineer'
        />
      </div>

      <div className='inlineFormGroup'>
        <div className='formGroup'>
          <label htmlFor='mail' className={'formLabel text-caption'}>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='formInput'
            name='email'
            placeholder='johndoe@mail.com'
          />
        </div>

        <div className='formGroup'>
          <label htmlFor='phone' className={'formLabel text-caption'}>
            Phone
          </label>
          <input
            type='tel'
            id='phone'
            className='formInput'
            name='phone'
            placeholder='0917 123 4567'
          />
        </div>
      </div>

      <div className='formOptions'>
        <button
          type='button'
          className='formOptionsBtn btn-md outline-btn'
          onClick={handleClose}
        >
          Cancel
        </button>
        <button type='submit' className='formOptionsBtn btn-md primary-btn'>
          <Check />
          Save
        </button>
      </div>
    </form>
  );
};
