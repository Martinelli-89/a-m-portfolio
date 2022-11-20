import {React} from 'react';
import Nav from '../Nav/Nav';
import Intro from '../Intro/Intro';
import SideNav from "../SideNav/SideNav";

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
            <div className='mainPage__sideNav'>
                <SideNav />
            </div>
        </main>

    );

}

export default MainPage;