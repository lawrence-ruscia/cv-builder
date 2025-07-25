import { Check, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useBreakpoint } from '../../hooks/useBreakpoint';
export const EducationDetailsForm = ({
  handleClose,
  handleAddItem,
  handleEditItem,
  handleDeleteItem,
  selectedEducationItem,
}) => {
  const [formInputs, setFormInputs] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  const isTablet = useBreakpoint('(min-width: 768px)');

  useEffect(() => {
    if (selectedEducationItem) {
      setFormInputs(selectedEducationItem);
    }
  }, [selectedEducationItem]);

  const handleInputChange = (e, prop) => {
    setFormInputs({ ...formInputs, [prop]: e.target.value });
  };

  const handleFormSubmit = (e, selectedEducationItem) => {
    e.preventDefault();

    if (selectedEducationItem) {
      const id = selectedEducationItem.id;
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
      onSubmit={(e) => handleFormSubmit(e, selectedEducationItem)}
    >
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
          required
          value={formInputs.school}
          onInput={(e) => handleInputChange(e, 'school')}
        />
      </div>

      <div className='formGroup'>
        <label htmlFor='degree' className='formLabel'>
          Degree
        </label>
        <input
          type='text'
          name='degree'
          id='degree'
          className='formInput'
          placeholder='Bachelor of Science in Information Technology'
          required
          value={formInputs.degree}
          onInput={(e) => handleInputChange(e, 'degree')}
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
          placeholder='Cambridge, Massachusettes'
          required
          value={formInputs.location}
          onInput={(e) => handleInputChange(e, 'location')}
        />
      </div>

      <div className='formOptions'>
        <button
          type='button'
          className='formOptionsBtn btn-md delete-btn'
          onClick={() => handleDeleteItem(selectedEducationItem.id)}
        >
          <Trash width={20} height={20} />
          {isTablet && 'Delete'}
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
