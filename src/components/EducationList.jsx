import styles from '../assets/styles/EducationList.module.css';
import { Plus } from 'lucide-react';
import { EducationDetailsForm } from './forms/EducationDetailsForm';
import { useState } from 'react';

const mockData = [
  {
    id: crypto.randomUUID(),
    school: 'Harvard University',
    degree: 'Bachelor of Science in Information Technology',
    startDate: '2020-01-01',
    endDate: '2022-02-02',
    location: 'Cambridge, Massachusettes',
  },
  {
    id: crypto.randomUUID(),
    school: 'University of Helsinki',
    degree: 'Bachelor of Science in Computer Science',
    startDate: '2022-03-03',
    endDate: '2024-02-02',
    location: 'Helsinki, Finland',
  },
];
export const EducationList = ({
  isOpen,
  isFormOpen,
  handleIsFormOpen,
  handleIsFormClose,
}) => {
  const [educationItems, setEducationItems] = useState(mockData);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const selectedEducationItem = educationItems.find(
    (item) => item.id === selectedItemId
  );

  const handleAddItem = ({ school, degree, startDate, endDate, location }) => {
    setEducationItems([
      ...educationItems,
      {
        id: crypto.randomUUID(),
        school,
        degree,
        startDate,
        endDate,
        location,
      },
    ]);
  };

  const handleEditItem = ({
    id,
    school,
    degree,
    startDate,
    endDate,
    location,
  }) => {
    const item = educationItems.find((item) => item.id === id);

    if (item) {
      setEducationItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id
            ? { ...item, school, degree, startDate, endDate, location }
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
        <EducationDetailsForm
          handleClose={() => {
            handleIsFormClose();
            setSelectedItemId(null);
          }}
          handleAddItem={handleAddItem}
          handleEditItem={handleEditItem}
          selectedEducationItem={selectedEducationItem}
        />
      ) : (
        <ul
          className={`${styles.educationList} ${
            isOpen ? styles.openList : null
          }`}
        >
          {educationItems.map((item) => (
            <EducationItem
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

const EducationItem = ({ school, degree, handleSelectedId }) => {
  return (
    <li className={styles.listItem} onClick={handleSelectedId}>
      <button className={styles.listBtn}>
        <span className={styles.school}>{school}</span>
        {', '}
        <span className={styles.degree}>{degree}</span>
      </button>
    </li>
  );
};
