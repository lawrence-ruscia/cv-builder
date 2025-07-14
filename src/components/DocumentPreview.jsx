import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer';
import emailIcon from '../assets/images/emailIcon.png';
import phoneIcon from '../assets/images/phoneIcon.png';
import locationIcon from '../assets/images/locationIcon.png';

Font.register({ family: 'Times-Roman' });

const styles = StyleSheet.create({
  document: {
    fontFamily: 'Times-Roman',
    marginInline: 'auto',
  },
  page: {
    padding: 48,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 36,
  },
  fullName: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 28,
  },
  jobTitle: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 18,
  },
  personalSection: {
    width: '100%',
    flexDirection: 'column',
    gap: 14,
  },
  personalList: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  personalItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    fontSize: 14,
  },

  educationSection: {
    width: '100%',
    flexDirection: 'column',
    gap: 14,
  },
  sectionTitle: {
    maxWidth: '50%',
    fontSize: 15,
    fontWeight: 600,
    borderBottom: '2 solid #0000',
    paddingBottom: 4,
  },
  educationList: {
    flexDirection: 'column',
    gap: 20,
  },
  educationItem: {
    flexDirection: 'column',
    gap: 6,
    fontSize: 14,
  },
  school: {
    fontWeight: 600,
  },
  degree: {
    fontStyle: 'italic',
  },
  dateLoc: {
    flexDirection: 'rpw',
  },
});
export const DocumentPreview = ({ personalDetails, educationItems }) => {
  const { fullName, jobTitle, email, phone, location } = personalDetails;

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return `${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}/${date.getFullYear()}`; // format: MM/YYYY
  };

  return (
    <Document style={styles.document}>
      <Page style={styles.page}>
        <View style={styles.personalSection}>
          <Text style={styles.fullName}>{fullName}</Text>

          {jobTitle && <Text style={styles.jobTitle}>{jobTitle}</Text>}

          <View style={styles.personalList}>
            {email && (
              <View style={styles.personalItem}>
                <Image src={emailIcon} style={{ width: 14, height: 14 }} />
                <Text>{email}</Text>
              </View>
            )}
            {phone && (
              <View style={styles.personalItem}>
                <Image src={phoneIcon} style={{ width: 14, height: 14 }} />
                <Text style={styles.text}>{phone}</Text>
              </View>
            )}
            {location && (
              <View style={styles.personalItem}>
                <Image src={locationIcon} style={{ width: 14, height: 14 }} />
                <Text>{location}</Text>
              </View>
            )}
          </View>
        </View>
        <>
          {educationItems && (
            <View style={styles.educationSection}>
              <Text style={styles.sectionTitle}>EDUCATION</Text>
              <View style={styles.educationList}>
                {educationItems.map((item) => (
                  <View key={item.id} style={styles.educationItem}>
                    {item.school && (
                      <Text style={styles.school}>{item.school},</Text>
                    )}
                    {item.degree && (
                      <Text style={styles.degree}>{item.degree}</Text>
                    )}
                    {item.startDate && item.location ? (
                      <View style={styles.dateLoc}>
                        <Text style>
                          {formatDate(item.startDate)}
                          {item.endDate && ` - ${formatDate(item.endDate)}`}
                          {item.location && <Text> | {item.location}</Text>}
                        </Text>
                      </View>
                    ) : (
                      <>
                        {item.startDate && (
                          <Text style>
                            {formatDate(item.startDate)}
                            {item.endDate && ` - ${formatDate(item.endDate)}`}
                          </Text>
                        )}
                        {item.location && <Text> | {item.location}</Text>}
                      </>
                    )}
                  </View>
                ))}
              </View>
            </View>
          )}
        </>
      </Page>
    </Document>
  );
};
