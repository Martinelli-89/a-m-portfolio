import {React, useState} from 'react';

import "./Nav.scss";

const Nav = () => {

    const [navOptions, setNavOptions] = useState(["About me","Projects","Contacts"])

    return (

        <section className="nav">
            <p className="nav__left">{navOptions[0]}</p>
            <p className="nav__middle">{navOptions[1]}</p>
            <p className="nav__right">{navOptions[2]}</p>
        </section>

    );

}

export default Nav;