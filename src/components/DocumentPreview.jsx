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
});
export const DocumentPreview = ({ personalDetails }) => {
  const { fullName, jobTitle, email, phone, location } = personalDetails;

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
            <Text></Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
