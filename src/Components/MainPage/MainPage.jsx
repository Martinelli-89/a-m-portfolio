import {React} from 'react';
import Nav from '../Nav/Nav';
import SideNav from "../SideNav/SideNav";
import MainContent from '../MainContent/MainContent';

import "./MainPage.scss";

const MainPage = () => {

    return (
        <main className='mainPage'>
            <Nav />
            <MainContent />
            <SideNav />
        </main>
    );

}

export default MainPage;