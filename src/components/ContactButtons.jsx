import React, { Component, Fragment } from 'react';
import ContactButtonComponent from './ContactButtonComponent';
// import pdf from '../assets/documents/daniel peng resume.pdf';
import './ContactButtons.css';

export default class ContactButtons extends Component{
    constructor(props){
        super(props);

        this.state = {
            showEmail: false
        }
    }

    toggleEmail = () => {
        this.setState({
            showEmail: ! this.state.showEmail
        });
    }

    render(){
        return(
            <Fragment>
                <span style={{textAlign: "center"}} >
                    <ContactButtonComponent overlayText={'GitHub'} color={this.props.color} href={'https://github.com/danielPeng-17'} icon={['fab', 'github']} />
                    <ContactButtonComponent overlayText={'LinkedIn'} color={this.props.color} href={'https://www.linkedin.com/in/danielpeng17'} icon={['fab', 'linkedin']} />
                    <ContactButtonComponent overlayText={'Resume'} color={this.props.color} href={'#'} icon={'file'} />
                    <span onClick={this.toggleEmail}><ContactButtonComponent overlayText={'Email'} color={this.props.color} href={'#'} icon={'envelope'} /></span>
                </span>
                {this.state.showEmail ? (
                        <div className="easeInWrapper slide-down" >
                            <div className="transparentBox" >
                                <p><span className="email" >zhilong.peng@ryerson.ca</span></p>
                            </div>
                        </div>
                    ) : (
                        null
                    )
                }
            </Fragment>
        );
    }
}
