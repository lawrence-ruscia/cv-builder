import styles from '../../assets/styles/forms/EducationDetailsForm.module.css';
import { Check } from 'lucide-react';
export const EducationDetailsForm = ({ handleClose }) => {
  return (
    <form className='detailsForm'>
      <div className='formGroup'>
        <label htmlFor='school' className='formLabel'>
          School
        </label>
        <input
          type='text'
          name='school'
          id='school'
          className='formInput'
          placeholder='Harvard University'
        />
      </div>

      <div className='formGroup'>
        <label htmlFor='school' className='formLabel'>
          Degree
        </label>
        <input
          type='text'
          name='degree'
          id='degree'
          className='formInput'
          placeholder='Bachelor of Science in Information Technology'
        />
      </div>

      <div className='inlineFormGroup'>
        <div className='formGroup'>
          <label htmlFor='startDate' className={`formLabel text-caption`}>
            Start Date
          </label>
          <input
            type='date'
            id='startDate'
            className='formInput'
            name='startDate'
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='endDate' className={`formLabel text-caption`}>
            End Date
          </label>
          <input
            type='date'
            id='endDate'
            className='formInput'
            name='endDate'
          />
        </div>
      </div>

      <div className='formGroup'>
        <label htmlFor='location' className='formLabel'>
          Location
        </label>
        <input
          type='text'
          name='location'
          id='location'
          className='formInput'
          placeholder='Cambridge, Massachusettes'
        />
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
