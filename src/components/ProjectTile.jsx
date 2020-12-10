import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './ProjectTile.css';

class ProjectTile extends Component {

    render() { 
        return (
            <div className='project-box'>
                <img className='project-img' src={this.props.img} alt='something' />
                <div className='right-project-box'>
                    <h1>{this.props.projectTitle}</h1>
                    <p className='description'>
                        {this.props.projectDescription}
                    </p>
                    {
                        this.props.href != null ?
                            <Button className='btn' variant="outline-dark" href={this.props.href} target='_blank' >Project Demo</Button> : null
                    }
                    <Button className={'btn' + (this.props.href != null ? ' code-btn' : '')} variant="outline-dark" href={this.props.codeLink} target='_blank' >View Code</Button>
                </div>                    
            </div>
        );
    }
}
 
export default ProjectTile;