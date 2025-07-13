import styles from '../assets/styles/PersonalDetails.module.css';
import { Mail, Phone, MapPin, SquarePen, PenSquare } from 'lucide-react';
import avatar from '../assets/images/avatar-placeholder.svg';
import { PersonalDetailsForm } from './forms/PersonalDetailsForm';
import { useState } from 'react';

export const PersonalDetails = ({
  isOpen,
  onToggle,
  personalDetails,
  handlePersonalDetails,
}) => {
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
          handlePersonalDetails={handlePersonalDetails}
          personalDetails={personalDetails}
        />
      ) : (
        <PreviewContent
          isOpen={isOpen}
          handleOpen={onToggle}
          personalInfo={personalDetails}
        />
      )}
    </section>
  );
};

const PreviewContent = ({ isOpen, handleOpen, personalInfo }) => {
  const { fullName, jobTitle, email, phone, location } = personalInfo ?? {
    fullName: 'John Doe',
    jobTitle: 'Software Engineer',
    email: 'johndoe@gmail.com',
    phone: '0917 123 4567',
    location: 'Metro Manila, Philippines',
  };

  return (
    <div className={styles.previewContent} onClick={handleOpen}>
      <div className={styles.avatar}>
        <img src={avatar} alt='' />
      </div>
      <div className={styles.mainInfo}>
        <p className={styles.fullName}>{fullName}</p>
        {jobTitle && <p className={styles.jobTitle}>{jobTitle}</p>}
      </div>
      <div className={styles.otherInfo}>
        {email && (
          <div className={styles.info}>
            <Mail className={styles.icon} />
            {email}
          </div>
        )}
        {phone && (
          <div className={styles.info}>
            <Phone className={styles.icon} />
            {phone}
          </div>
        )}

        {location && (
          <div className={styles.info}>
            <MapPin className={styles.icon} />
            {location}
          </div>
        )}
      </div>
      <div className={`${styles.editIcon} ${isOpen ? 'hide' : null} icon-btn`}>
        <SquarePen className={styles.icon} />
      </div>
    </div>
  );
};
