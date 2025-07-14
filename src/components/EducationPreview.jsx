import styles from '../assets/styles/EducationPreview.module.css';

export const EducationPreview = ({ educationItems }) => {
  return (
    <div className={styles.educationPreview}>
      {educationItems && <p className={styles.title}>EDUCATION</p>}
      <ul className={styles.educationList}>
        {educationItems.map((item) => (
          <EducationItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

const EducationItem = ({ school, degree, startDate, endDate, location }) => {
  return (
    <li className={styles.educationItem}>
      <p className={styles.school}>{school},</p>
      {degree && <p className={styles.degree}>{degree}</p>}

      <span className={styles.dateLoc}>
        {startDate && (
          <p className={styles.date}>
            {startDate} {endDate && '-'} {endDate}
          </p>
        )}
        {'|'}
        {location && <p className={styles.location}>{location}</p>}
      </span>
    </li>
  );
};
