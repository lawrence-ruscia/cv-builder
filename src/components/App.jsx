import { NavMenu } from './NavMenu';
import { Details } from './Details';
import { Preview } from './Preview';
import { useState } from 'react';
function App() {
  const [isPreview, setIsPreview] = useState(false);

  const handleTogglePreview = () => {
    setIsPreview((prev) => !prev);
  };
  return (
    <div id='app'>
      <header id='header'>
        <NavMenu
          isPreview={isPreview}
          handleTogglePreview={handleTogglePreview}
        />
      </header>
      <main id='main'>{isPreview ? <Preview /> : <Details />}</main>
    </div>
  );
}

export default App;
