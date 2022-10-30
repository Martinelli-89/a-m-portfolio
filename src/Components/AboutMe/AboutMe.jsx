import {React} from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

import "./AboutMe.scss";

const AboutMe = () => {

    const text = " Ciao, I am Alex. After a career in hospitality I wanted a new challange. I quit my job, studied for few months on Codecademy and then joined the _Nology consultancy programme. I really enjoy coding: there is alway a new problem to solve, for which you need to learn new skills. You never stop learning, and moreover you learn about how all the technology that surround us in every day life actually works! I hope to find an employer that wil give me the chance to prove my newly acuired skills."

    return (

        <>
            <div className='meObject'>
                <span className='const'>const </span><span className='variable'>MartinelliAlex </span><span className='symbol'>= </span><span className='bracket'>&#123;</span><br></br><br></br>
                    <div className='innerBracket'>
                    <span className='key'>location</span><span className='symbol'>: "</span><span className='value'>Bristol</span><span className='symbol'>",</span><br></br>
                    <span className='key'>role</span><span className='symbol'>: "</span><span className='value'>Junior Software Developer</span><span className='symbol'>",</span><br></br>
                    <div className='skills'>
                        <span className='key'>skills</span><span className='symbol'>: </span><span className='bracket'>&#91;</span><span className='symbol'>"</span><span className='value'>SASS</span><span className='symbol'>",</span><span className='symbol'>"</span><span className='value'>JS</span><span className='symbol'>",</span><span className='symbol'>"</span><span className='value'>JAVA</span><span className='symbol'>",</span><span className='symbol'>"</span><span className='value'>Spring</span><span className='symbol'>",</span><span className='symbol'>"</span><span className='value'>SQL</span><span className='symbol'>",</span><span className='symbol'>"</span><span className='value'>React</span><span className='symbol'>",</span><span className='symbol'>"</span><span className='value'>HTML</span><span className='symbol'>"</span><span className='bracket'>&#93;</span><br></br><br></br>
                    </div>
                    </div>
                <span className='bracket'>&#125;</span><span className='symbol'>;</span>    
            </div>
            <div className='description'>
                <TypeWriterEffect 
                    textStyle={{ fontFamily: 'FiraCode-Light',
                                color: "#7aa2f7",
                                fontSize: "1rem" }}
                    startDelay={500}
                    cursorColor="#7aa2f7"
                    text={text}
                    typeSpeed={150}
                />
            </div>
        </>

    );

}

export default AboutMe;