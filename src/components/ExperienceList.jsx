import styles from '../assets/styles/ExperienceList.module.css';
import { Plus } from 'lucide-react';
import { ExperienceDetailsForm } from './forms/ExperienceDetailsForm';
import { useState } from 'react';

export const ExperienceList = ({
  isOpen,
  isFormOpen,
  handleIsFormOpen,
  handleIsFormClose,
  experienceItems,
  setExperienceItems,
}) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const selectedExperienceItem = experienceItems.find(
    (item) => item.id === selectedItemId
  );

  const handleAddItem = ({
    employer,
    jobTitle,
    startDate,
    endDate,
    location,
    description,
  }) => {
    setExperienceItems([
      ...experienceItems,
      {
        id: crypto.randomUUID(),
        employer,
        jobTitle,
        startDate,
        endDate,
        location,
        description,
      },
    ]);
  };

  const handleEditItem = ({
    id,
    employer,
    jobTitle,
    startDate,
    endDate,
    location,
    description,
  }) => {
    const item = experienceItems.find((item) => item.id === id);

    if (item) {
      setExperienceItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id
            ? {
                ...item,
                employer,
                jobTitle,
                startDate,
                endDate,
                location,
                description,
              }
            : item
        )
      );
    }
  };

  const handleSelectedId = (id) => {
    setSelectedItemId(id);
    handleIsFormOpen(true);
  };

  return (
    <>
      {isFormOpen ? (
        <ExperienceDetailsForm
          handleClose={() => {
            handleIsFormClose();
            setSelectedItemId(null);
          }}
          handleAddItem={handleAddItem}
          handleEditItem={handleEditItem}
          selectedExperienceItem={selectedExperienceItem}
        />
      ) : (
        <ul
          className={`${styles.experienceList} ${
            isOpen ? styles.openList : null
          }`}
        >
          {experienceItems.map((item) => (
            <ExperienceItem
              key={item.id}
              {...item}
              handleSelectedId={() => handleSelectedId(item.id)}
            />
          ))}
          <div className={styles.add}>
            <button
              type='button'
              className={`primary-btn btn-md ${styles.addBtn}`}
              onClick={handleIsFormOpen}
            >
              <Plus />
              Add Education
            </button>
          </div>
        </ul>
      )}
    </>
  );
};

const ExperienceItem = ({ employer, jobTitle, handleSelectedId }) => {
  return (
    <li className={styles.listItem} onClick={handleSelectedId}>
      <button className={styles.listBtn}>
        <span className={styles.employer}>{employer}</span>
        {', '}
        <span className={styles.jobTitle}>{jobTitle}</span>
      </button>
    </li>
  );
};
