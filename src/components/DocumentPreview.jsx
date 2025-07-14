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

  detailsSection: {
    width: '100%',
    flexDirection: 'column',
    gap: 14,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: 600,
    borderBottom: '2 solid #0000',
    paddingBottom: 4,
  },
  sectionHalf: {
    maxWidth: '50%',
  },
  sectionList: {
    flexDirection: 'column',
    gap: 20,
  },
  sectionItem: {
    flexDirection: 'column',
    gap: 6,
    fontSize: 14,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBold: {
    fontWeight: 600,
  },
  textItalic: {
    fontStyle: 'italic',
  },
  dateLoc: {
    flexDirection: 'row',
  },
  inlineCategory: {
    flexDirection: 'row',
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);

  return `${String(date.getMonth() + 1).padStart(
    2,
    '0'
  )}/${date.getFullYear()}`; // format: MM/YYYY
};
export const DocumentPreview = ({
  personalDetails,
  educationItems,
  experienceItems,
}) => {
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
          </View>
        </View>
        <EducationSection educationItems={educationItems} />
        <ExperienceSection experienceItems={experienceItems} />
      </Page>
    </Document>
  );
};

const EducationSection = ({ educationItems }) => {
  return (
    <>
      {educationItems.length > 0 && (
        <View style={styles.detailsSection}>
          <Text style={[styles.sectionTitle, styles.sectionHalf]}>
            EDUCATION
          </Text>
          <View style={styles.sectionList}>
            {educationItems.map((item) => (
              <View key={item.id} style={styles.sectionItem}>
                {item.school && (
                  <Text style={styles.textBold}>{item.school},</Text>
                )}
                {item.degree && (
                  <Text style={styles.textItalic}>{item.degree}</Text>
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
  );
};

const ExperienceSection = ({ experienceItems }) => {
  return (
    <>
      {experienceItems.length > 0 && (
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
          <View style={styles.sectionList}>
            {experienceItems.map((item) => (
              <View key={item.id} style={styles.sectionItem}>
                <View style={styles.sectionRow}>
                  <View style={styles.inlineCategory}>
                    {item.employer && (
                      <Text style={styles.textBold}>
                        {item.employer}
                        {', '}
                      </Text>
                    )}
                    {item.jobTitle && (
                      <Text style={styles.textItalic}>{item.jobTitle}</Text>
                    )}
                  </View>
                  {item.startDate && item.location ? (
                    <View style={styles.dateLoc}>
                      <Text>
                        {formatDate(item.startDate)}
                        {item.endDate && ` - ${formatDate(item.endDate)}`}
                        {item.location && <Text> | {item.location}</Text>}
                      </Text>
                    </View>
                  ) : (
                    <>
                      {item.startDate && (
                        <Text>
                          {formatDate(item.startDate)}
                          {item.endDate && ` - ${formatDate(item.endDate)}`}
                        </Text>
                      )}
                      {item.location && <Text> | {item.location}</Text>}
                    </>
                  )}
                </View>

                {item.description && <Text>{item.description}</Text>}
              </View>
            ))}
          </View>
        </View>
      )}
    </>
  );
};
