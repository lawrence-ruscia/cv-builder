import styles from '../../assets/styles/forms/PersonalDetailsForm.module.css';
import avatar from '../../assets/images/avatar-placeholder.svg';
import { Eraser, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

export const PersonalDetailsForm = ({
  handleClose,
  handlePersonalDetails,
  personalDetails,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
  });

  const handleInputData = (e, inputType) => {
    setFormData({ ...formData, [inputType]: e.target.value });
  };

  const handleFormSubmit = (e, data) => {
    e.preventDefault();
    // console.log(`Submited Data: ${JSON.stringify(data)}`);

    if (data) {
      handlePersonalDetails(data);
    }

    handleClose();
  };

  const handleFormReset = () => {
    setFormData({
      fullName: '',
      jobTitle: '',
      email: '',
      phone: '',
      location: '',
    });
  };

  useEffect(() => {
    if (personalDetails) {
      setFormData(personalDetails);
    }
  }, [personalDetails]);

  return (
    <form
      className='detailsForm'
      onSubmit={(e) => handleFormSubmit(e, { ...formData })}
    >
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
          value={formData.fullName}
          onInput={(e) => handleInputData(e, 'fullName')}
          required
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
          value={formData.jobTitle}
          onInput={(e) => handleInputData(e, 'jobTitle')}
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
            value={formData.email}
            onInput={(e) => handleInputData(e, 'email')}
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
            value={formData.phone}
            onInput={(e) => handleInputData(e, 'phone')}
          />
        </div>
      </div>

      <div className='formGroup'>
        <label htmlFor='location' className={'formLabel text-caption'}>
          Location
        </label>
        <input
          type='text'
          id='location'
          className='formInput'
          name='location'
          placeholder='Metro Manila, Philippines'
          value={formData.location}
          onInput={(e) => handleInputData(e, 'location')}
        />
      </div>

      <div className='formOptions'>
        <button
          type='button'
          className='formOptionsBtn btn-md clear-btn'
          onClick={handleFormReset}
        >
          <Eraser />
          Clear Form
        </button>
        <div className='formOptionsInline'>
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
      </div>
    </form>
  );
};
