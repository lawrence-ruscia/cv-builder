import styles from '../assets/styles/EducationList.module.css';
import { Plus } from 'lucide-react';
import { EducationDetailsForm } from './forms/EducationDetailsForm';
import { useState } from 'react';

const mockData = [
  {
    school: 'Harvard University',
    degree: 'Bachelor of Science in Information Technology',
  },
  {
    school: 'Massacheusetts Institute of Technology',
    degree: 'Masters of Science in Information Technology',
  },
  {
    school: 'University of Helsinki',
    degree: 'Bachelor of Science in Computer Science',
  },
];

export const EducationList = ({
  isOpen,
  isFormOpen,
  handleIsFormOpen,
  handleIsFormClose,
}) => {
  const [educationItems, setEducationItems] = useState([]);

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

  return (
    <>
      {isFormOpen ? (
        <EducationDetailsForm
          handleClose={handleIsFormClose}
          handleAddItem={handleAddItem}
        />
      ) : (
        <ul
          className={`${styles.educationList} ${
            isOpen ? styles.openList : null
          }`}
        >
          {educationItems.map((item) => (
            <EducationItem key={item.id} {...item} />
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

const EducationItem = ({ school, degree }) => {
  return (
    <li className={styles.listItem}>
      <button className={styles.listBtn}>
        <span className={styles.school}>{school}</span>
        {', '}
        <span className={styles.degree}>{degree}</span>
      </button>
    </li>
  );
};
