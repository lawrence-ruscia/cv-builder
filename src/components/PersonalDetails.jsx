import styles from '../assets/styles/PersonalDetails.module.css';
import { Mail, Phone, MapPin, SquarePen, PenSquare } from 'lucide-react';
import avatar from '../assets/images/avatar-placeholder.svg';
import { PersonalDetailsForm } from './forms/PersonalDetailsForm';
import { useState } from 'react';
export const PersonalDetails = ({ isOpen, onToggle }) => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
  });

  const handleEditInfo = (data) => {
    setPersonalInfo(data);
  };

  return (
    <section
      id='personalDetails'
      className={`details-section ${styles.personalDetails} ${
        isOpen && styles.open
      }`}
    >
      {isOpen ? (
        <PersonalDetailsForm
          handleClose={onToggle}
          handleEditInfo={handleEditInfo}
          personalInfo={personalInfo}
        />
      ) : (
        <PreviewContent
          isOpen={isOpen}
          handleOpen={onToggle}
          personalInfo={personalInfo}
        />
      )}
    </section>
  );
};

const PreviewContent = ({ isOpen, handleOpen, personalInfo }) => {
  const fullName = personalInfo.fullName;
  const jobTitle = personalInfo.jobTitle;
  const email = personalInfo.email;
  const phone = personalInfo.phone;
  const location = personalInfo.location;

  return (
    <div className={styles.previewContent} onClick={handleOpen}>
      <div className={styles.avatar}>
        <img src={avatar} alt='' />
      </div>
      <div className={styles.mainInfo}>
        <p className={styles.fullName}>{fullName}</p>
        <p className={styles.jobTitle}>{jobTitle}</p>
      </div>
      <div className={styles.otherInfo}>
        <div className={styles.info}>
          <Mail className={styles.icon} />
          {email}
        </div>
        <div className={styles.info}>
          <Phone className={styles.icon} />
          {phone}
        </div>
        <div className={styles.info}>
          <MapPin className={styles.icon} />
          {location}
        </div>
      </div>
      <div className={`${styles.editIcon} ${isOpen ? 'hide' : null} icon-btn`}>
        <SquarePen className={styles.icon} />
      </div>
    </div>
  );
};
