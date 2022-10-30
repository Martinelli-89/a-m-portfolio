import './App.scss';

import { useState } from 'react';
import Logo from './Components/Logo/Logo.jsx';
import Nav from './Components/Nav/Nav.jsx';

const App = () => {;

  const [showLogo, setShowLogo] = useState(false);

  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <main>
        <Logo />
      </main>    
    </div>
  );
};

export default App;
