import styles from '../assets/styles/EducationList.module.css';
import { Plus } from 'lucide-react';
import { EducationDetailsForm } from './forms/EducationDetailsForm';
export const EducationList = ({
  isOpen,
  isFormOpen,
  handleIsFormOpen,
  handleIsFormClose,
}) => {
  const handleAddItem = () => {};
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
  return (
    <>
      {isFormOpen ? (
        <EducationDetailsForm handleClose={handleIsFormClose} />
      ) : (
        <ul
          className={`${styles.educationList} ${
            isOpen ? styles.openList : null
          }`}
        >
          <EducationItem education={mockData[0]} />
          <EducationItem education={mockData[1]} />
          <EducationItem education={mockData[2]} />
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

const EducationItem = ({ education }) => {
  const school = education.school;
  const degree = education.degree;
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
