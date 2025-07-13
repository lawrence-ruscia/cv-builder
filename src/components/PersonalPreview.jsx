import styles from '../assets/styles/PersonalPreview.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

export const PersonalPreview = ({ personalDetails }) => {
  const { fullName, jobTitle, email, phone, location } = personalDetails;
  return (
    <div className={styles.personal}>
      <p className={styles.fullName}>{fullName}</p>
      {jobTitle && <p className={styles.jobTitle}>{jobTitle}</p>}

      <ul className={styles.infoList}>
        {email && (
          <li>
            <Mail />
            {email}
          </li>
        )}

        {phone && (
          <li>
            <Phone />
            {phone}
          </li>
        )}

        {location && (
          <li>
            <MapPin />
            {location}
          </li>
        )}
      </ul>
    </div>
  );
};
