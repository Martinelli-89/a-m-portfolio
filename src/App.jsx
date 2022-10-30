import './App.scss';

import { useState } from 'react';
import projectsInfo from "./Assets/Data/ProjectsData.js"

import MainDisplay from "./Components/MainDisplay/MainDisplay.jsx";
import Nav from './Components/Nav/Nav.jsx';

const App = () => {;

  const [isAboutMe, setAboutMe] = useState(false);
  const [isProjects, setProjects] = useState(false);
  const [isContacts, setContacts] = useState(false);
  const [navOptions, setNavOptions] = useState(["About me","Projects","Contacts"])

  const handleNavClick = (event) => {

    const sectionRequested = event.target.innerHTML;

    switch(sectionRequested) {
      case("About me"):
        setAboutMe(true);
        setProjects(false)
        setContacts(false)
        break;
      case("Projects"):
        setAboutMe(false);
        setProjects(true)
        setContacts(false)
        break;
      case("Contacts"):
        setAboutMe(false);
        setProjects(false)
        setContacts(true)
        break;
    } 

    if(event.target.classList.contains("nav__middle") != true) {

      const tempOptions = [...navOptions];
      const indexSectionRequested = tempOptions.indexOf(sectionRequested);

      if(indexSectionRequested == 0) {
        setNavOptions([tempOptions[2],tempOptions[0],tempOptions[1]])
      } else {
        setNavOptions([tempOptions[1],tempOptions[2],tempOptions[0]])
      }
    }

  }

  return (
    <div className="App">
      <nav>
        <Nav menu={navOptions} handleClick={handleNavClick}/>
      </nav>
      <main>
        <MainDisplay  aboutMe={isAboutMe} projects={isProjects} contacts={isContacts} data={projectsInfo}/>
      </main>    
    </div>
  );
};

export default App;
