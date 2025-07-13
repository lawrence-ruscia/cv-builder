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

function App() {
  const [isPreview, setIsPreview] = useState(false);
  const [personalDetails, setPersonalDetails] = useState(personalMockData);

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
          <Preview personalDetails={personalDetails} />
        ) : (
          <Details
            personalDetails={personalDetails}
            handlePersonalDetails={handlePersonalDetails}
          />
        )}
      </main>
    </div>
  );
}

export default App;
