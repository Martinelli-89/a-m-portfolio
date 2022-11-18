import {React} from 'react';
import Nav from '../Nav/Nav';
import Intro from '../Intro/Intro';

import "./MainPage.scss";

const MainPage = () => {

    return (

        <main className='mainPage'>
            <div className='mainPage__nav'>
                <Nav />
            </div>
            <div className='mainPage__intro'>
                <Intro />
            </div>
        </main>

    );

}

export default MainPage;