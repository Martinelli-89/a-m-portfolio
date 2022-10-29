import './App.scss';

import { useState } from 'react';
import Logo from './Components/Logo/Logo.jsx';

const App = () => {;

  const [showLogo, setShowLogo] = useState(false);

  return (
    <div className="App">
      <Logo />
    </div>
  );
};

export default App;
