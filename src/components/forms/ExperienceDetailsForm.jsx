import { Check, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
export const ExperienceDetailsForm = ({
  handleClose,
  handleAddItem,
  handleEditItem,
  handleDeleteItem,
  selectedExperienceItem,
}) => {
  const [formInputs, setFormInputs] = useState({
    employer: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });

  useEffect(() => {
    if (selectedExperienceItem) {
      setFormInputs(selectedExperienceItem);
    }
  }, [selectedExperienceItem]);

  const handleInputChange = (e, prop) => {
    setFormInputs({ ...formInputs, [prop]: e.target.value });
  };

  const handleFormSubmit = (e, selectedExperienceItem) => {
    e.preventDefault();

    if (selectedExperienceItem) {
      const id = selectedExperienceItem.id;
      handleEditItem({ id, ...formInputs });
      console.log('Modified Item');
    } else {
      handleAddItem(formInputs);
      console.log('Added Item');
    }

    handleClose();
  };

  return (
    <form
      className='detailsForm'
      onSubmit={(e) => handleFormSubmit(e, selectedExperienceItem)}
    >
      <div className='formGroup'>
        <label htmlFor='employer' className='formLabel'>
          Employer
        </label>
        <input
          type='text'
          name='employer'
          id='employer'
          className='formInput'
          placeholder='Google'
          required
          value={formInputs.employer}
          onInput={(e) => handleInputChange(e, 'employer')}
        />
      </div>

      <div className='formGroup'>
        <label htmlFor='jobTitle' className='formLabel'>
          Job Title
        </label>
        <input
          type='text'
          name='jobTitle'
          id='jobTitle'
          className='formInput'
          placeholder='Senior Software Engineers'
          required
          value={formInputs.jobTitle}
          onInput={(e) => handleInputChange(e, 'jobTitle')}
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
            value={formInputs.startDate}
            required
            onInput={(e) => handleInputChange(e, 'startDate')}
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
            value={formInputs.endDate}
            onInput={(e) => handleInputChange(e, 'endDate')}
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
          placeholder='Mountain View, Californa'
          required
          value={formInputs.location}
          onInput={(e) => handleInputChange(e, 'location')}
        />
      </div>

      <div className='formGroup'>
        <label htmlFor='description' className='formLabel'>
          Description
        </label>
        <textarea
          name='description'
          id='description'
          className='formRichTextbox'
          rows='5'
          placeholder='Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android'
          value={formInputs.description}
          onInput={(e) => handleInputChange(e, 'description')}
        >
          Hello, Kalibutan
        </textarea>
      </div>

      <div className='formOptions'>
        <button
          type='button'
          className='formOptionsBtn btn-md delete-btn'
          onClick={() => handleDeleteItem(selectedExperienceItem.id)}
        >
          <Trash width={20} height={20} />
          Delete
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
