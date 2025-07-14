import { NavMenu } from './NavMenu';
import { Details } from './Details';
import { Preview } from './Preview';
import { useState } from 'react';

const personalMockData = {
  fullName: 'John Doe',
  jobTitle: 'Software Engineer',
  email: 'johndoe@gmail.com',
  phone: '0917 123 4567',
  location: 'Metro Manila, Philippines',
};

const educationMockData = [
  {
    id: crypto.randomUUID(),
    school: 'Harvard University',
    degree: 'Bachelor of Science in Information Technology',
    startDate: '2020-01-01',
    endDate: '2022-02-02',
    location: 'Cambridge, Massachusettes',
  },
  {
    id: crypto.randomUUID(),
    school: 'University of Helsinki',
    degree: 'Bachelor of Science in Computer Science',
    startDate: '2022-03-03',
    endDate: '2024-02-02',
    location: 'Helsinki, Finland',
  },
];

function App() {
  const [isPreview, setIsPreview] = useState(false);
  const [personalDetails, setPersonalDetails] = useState(personalMockData);
  const [educationItems, setEducationItems] = useState(educationMockData);

  const handleTogglePreview = () => {
    setIsPreview((prev) => !prev);
  };

  const handlePersonalDetails = ({ ...personalDetails }) => {
    // console.log(`Received Data: ${JSON.stringify(personalDetails)}`);
    setPersonalDetails(personalDetails);
  };

  return (
    <div id='app'>
      <header id='header'>
        <NavMenu
          isPreview={isPreview}
          handleTogglePreview={handleTogglePreview}
        />
      </header>
      <main id='main'>
        {isPreview ? (
          <Preview
            personalDetails={personalDetails}
            educationItems={educationItems}
          />
        ) : (
          <Details
            personalDetails={personalDetails}
            handlePersonalDetails={handlePersonalDetails}
            educationItems={educationItems}
            setEducationItems={setEducationItems}
          />
        )}
      </main>
    </div>
  );
}

export default App;
