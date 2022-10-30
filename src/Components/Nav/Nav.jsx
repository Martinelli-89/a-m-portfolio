import {React, useState} from 'react';

import "./Nav.scss";

const Nav = ({menu, handleClick}) => {

    

    return (

        <section className="nav">
            <p className="nav__left" onClick={handleClick}>{menu[0]}</p>
            <p className="nav__middle" onClick={handleClick}>{menu[1]}</p>
            <p className="nav__right" onClick={handleClick}>{menu[2]}</p>
        </section>

    );

}

export default Nav;