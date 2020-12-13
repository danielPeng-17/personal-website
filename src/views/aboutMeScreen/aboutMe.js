import React, { Fragment } from 'react';
import './aboutMe.css';

export default function AboutMe() {
    return (
        <Fragment>
            <div className='content'>
                <h1 className='title'>About Me</h1>
                <div>
                    <p>
                        I am a 3rd year student studying Computer Science at Ryerson University. 
                        My main area of interest is web development, however I occasionally enjoy building 2D games.
                        I am always open to learning new web dev technologies that can help my enhance my knowledge and capabilities in web development.
                    </p>

                    <div className='skills'>
                        <p className='section-heading'>
                            Some of my current skills include...
                        </p>
                        <p><span className='highlights lang-highlight'>Languages:</span> <span className='skills-list'>HTML, CSS, Javascript, Python, Java, C, Bash</span></p>
                        <p><span className='highlights frameworks-highlight'>Frameworks:</span> <span className='skills-list'>React.js, Node.js, Mongoose, EJS, Bootstrap, jQuery</span></p>
                        <p><span className='highlights tools-highlight'>Tools:</span> <span className='skills-list'>Git, MongoDB, MySQL</span></p>
                    </div>
                    
                    <p>
                        Personal health is something I greatly value so it's common for me to regularly excerise at the gym, hike, camp, and swim.
                        On my free time, I enjoy trying new restaurants and different kinds of food and bubble tea.
                        I also volunteer with Scouts Canada as a scouts leader because I enjoy working with other leaders to teach and guide younger scouts members.
                    </p>
                    <p>
                        If you want to grab coffee and chat, feel free to contact me!
                    </p>
                </div>
            </div>
   
        </Fragment>
    );
}