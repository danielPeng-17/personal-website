import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectTile from '../../components/ProjectTile';
import './projects.css';

export default function Projects() {
    let personalWebsiteScreenshot = require('../../assets/images/personal-website-img.png');
    let personalWebsiteDecription = 'My personal website was built with React.';
    let weatherAppScreenshot = require('../../assets/images/weather-app-screenshot.PNG');
    let weatherAppDescription = 'A web based weather app built utilizing React. It works by making an http call to OpenWeatherMaps servers based off of the user\'s geolocation in order to get back weather data to display.';
    let personalBlogScreenshot = require('../../assets/images/personal-blog-1.PNG');
    let personalBlogDescription = 'A simple blog website built using EJS, MongoDB, and NodeJS. It features basic blog funtionalities such as writing, posting blogs and login security.';

    return (
        <Fragment>
            <div className='content'>
                <h1 className='title'>Projects</h1>
                <div className='redirect-prompt'>
                    <p>Check out my other projects on <a className='redirect-link' href='https://github.com/danielPeng-17' target='_blank' rel="noopener noreferrer" >GitHub<FontAwesomeIcon icon='link' className='link-icon' /></a></p>
                </div>
                <ProjectTile projectTitle={'Personal Website'} projectDescription={personalWebsiteDecription} img={personalWebsiteScreenshot} herf={null} codeLink={'https://github.com/danielPeng-17/personal-website'} />
                <ProjectTile projectTitle={'Weather Web App'} projectDescription={weatherAppDescription} img={weatherAppScreenshot} href={'https://danielpeng-17.github.io/react-weather-app/'} codeLink={'https://github.com/danielPeng-17/react-weather-app'} />
                <ProjectTile projectTitle={'Personal Blog Website'} projectDescription={personalBlogDescription} img={personalBlogScreenshot} href={'http://danielpblog.herokuapp.com/'} codeLink={'https://github.com/danielPeng-17/personal-blog-website'} />
                
            </div>
            
        </Fragment>
    );
}