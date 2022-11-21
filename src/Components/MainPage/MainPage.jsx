import {React} from 'react';
import Nav from '../Nav/Nav';
import SideNav from "../SideNav/SideNav";
import MainContent from '../MainContent/MainContent';

import "./MainPage.scss";

const MainPage = () => {

    return (

        <main className='mainPage'>
            <div className='mainPage__nav'>
                <Nav />
            </div>
            <div className='mainPage__intro'>
                <MainContent />
            </div>
            <div className='mainPage__sideNav'>
                <SideNav />
            </div>
        </main>

    );

}

export default MainPage;