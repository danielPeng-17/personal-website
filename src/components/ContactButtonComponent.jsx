import React, { Component } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactButtonComponent.css';

export default class ContactButtonComponent extends Component{
    render(){
        return (
            // OverlayTrigger uses findDOMNode which has been deprecated
            // ignore waarning
            <OverlayTrigger
                placement='top'
                overlay={
                <Tooltip className='tip'>
                    {this.props.overlayText}
                </Tooltip>
                }
            >
                <Button variant={`outline-${this.props.color}`} id="btn" href={this.props.href} target="_blank" ><FontAwesomeIcon className='icon' icon={this.props.icon} /></Button>
            </OverlayTrigger>
        );
    };
}