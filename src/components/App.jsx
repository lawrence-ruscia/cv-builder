import { NavMenu } from './NavMenu';
import { Details } from './Details';
import { Preview } from './Preview';
function App() {
  
  return (
    <div id='app'>
      <header id='header'>
        <NavMenu />
      </header>
      <main id='main'>
        <Details />
        <Preview />
      </main>
    </div>
  );
}

export default App;
