import {React} from 'react';

import "./AboutMe.scss";

const AboutMe = () => {

    return (

            <div className='meObject'>
                <span className='const'>const </span><span className='variable'>MartinelliAlex </span><span className='symbol'>= </span><span className='bracket'>&#123;</span><br></br><br></br>
                    <div className='innerBracket'>
                    <span className='key'>location</span><span className='symbol'>: "</span><span className='value'>Bristol</span><span className='symbol'>",</span><br></br>
                    <span className='key'>role</span><span className='symbol'>: "</span><span className='value'>Junior Software Developer</span><span className='symbol'>",</span><br></br>
                    <div className='skills'>
                        <span className='key'>skills</span><span className='symbol'>: </span><span className='bracket'>&#91;</span><span className='symbol'>"</span><span className='value'>SASS</span><span className='symbol'>",</span><span className='symbol'>"</span><span className='value'>JS</span><span className='symbol'>",</span><span className='symbol'>"</span><span className='value'>JAVA</span><span className='symbol'>",</span><span className='symbol'>"</span><span className='value'>Spring</span><span className='symbol'>",</span><span className='symbol'>"</span><span className='value'>SQL</span><span className='symbol'>",</span><span className='symbol'>"</span><span className='value'>React</span><span className='symbol'>",</span><span className='symbol'>"</span><span className='value'>HTML</span><span className='symbol'>",</span><span className='bracket'>&#93;</span><br></br><br></br>
                    </div>
                    </div>
                <span className='bracket'>&#125;</span><span className='symbol'>;</span>    
            </div>

    );

}

export default AboutMe;