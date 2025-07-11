import styles from '../assets/styles/PersonalDetails.module.css';
import { Mail, Phone, MapPin, SquarePen } from 'lucide-react';
import avatar from '../assets/images/avatar-placeholder.svg';
import { useState } from 'react';
import { PersonalDetailsForm } from './forms/PersonalDetailsForm';
export const PersonalDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section
      id='personalDetails'
      className={`${styles.personalDetails} ${isOpen && styles.open}`}
    >
      {isOpen ? (
        <PersonalDetailsForm handleClose={handleClose} />
      ) : (
        <PreviewContent isOpen={isOpen} handleOpen={handleOpen} />
      )}
    </section>
  );
};

const PreviewContent = ({ isOpen, handleOpen }) => {
  return (
    <div className={styles.previewContent} onClick={handleOpen}>
      <div className={styles.avatar}>
        <img src={avatar} alt='' />
      </div>
      <div className={styles.mainInfo}>
        <p className={styles.fullName}>John Doe</p>
        <p className={styles.jobTitle}>Software Engineer</p>
      </div>
      <div className={styles.otherInfo}>
        <div className={styles.info}>
          <Mail className={styles.icon} />
          johndoe@gmail.com
        </div>
        <div className={styles.info}>
          <Phone className={styles.icon} />
          09123456789
        </div>
        <div className={styles.info}>
          <MapPin className={styles.icon} />
          Metro Manila, Philippines
        </div>
      </div>
      <div className={`${styles.editIcon} ${isOpen ? 'hide' : null} icon-btn`}>
        <SquarePen className={styles.icon} />
      </div>
    </div>
  );
};
