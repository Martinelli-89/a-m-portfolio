import {React, useEffect, useState} from 'react';
import Logo from "../Logo/Logo.jsx";
import MainPage from '../MainPage/MainPage';
import "./EntryPage.scss";

const EntryPage = () => {

    const [mainPage, setMainPage] = useState(false);
    let render;

    useEffect(() => {
        let timer = setTimeout(() => {
        setMainPage(!mainPage)}, 7500);
        return () => {
            clearTimeout(timer);
          };
    },[])

    if(mainPage == false) {
        render =
            <div className='wrapper'>
                <section className='wrapper__logo'> 
                    <Logo />
                </section>
            </div>
    } else {
        render =
            <> 
                <MainPage />
            </>;
    }
    
    return (
        <>
            {render}
        </>
    );

}

export default EntryPage;
