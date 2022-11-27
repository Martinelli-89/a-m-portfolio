import {React, useEffect, useState} from 'react';
import "./EntryPage.scss";
import Logo from "../Logo/Logo.jsx";
import MainPage from '../MainPage/MainPage';

const EntryPage = () => {

    const [mainPage, setMainPage] = useState(false);

    useEffect(() => {
        let timer = setTimeout(() => {
        setMainPage(!mainPage)}, 7000);
        return () => {
            clearTimeout(timer);
          };
    },[])

    let render;

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
