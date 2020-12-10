import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default class Sidebar extends Component {
    constructor(props){
        super(props);

        this.state = {
            // collapseSidebar => true => sidebar is closed
            collapseSidebar: true,
            clicks: 0
        };
    }

    // componentWillMount has been deprecated due to possible memory leaks 
    // use componentDidMount instead
    componentDidMount(){
        document.addEventListener('click', this.handleClick);
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleClick);
    }

    handleClick = (e) => {
        if (!this.state.collapseSidebar) {
            let screenWidth = window.innerWidth;
            let screenRatio = 0;

            // console.log(window);

            if (screenWidth > 998.98){
                screenRatio = 0.7;
            }else if (screenWidth > 767.98){
                screenRatio = 0.55
            }else if (screenWidth > 575.98){
                screenRatio = 0.4
            }

            if (e.clientX < screenWidth * screenRatio){
                this.setState({
                    collapseSidebar: !this.state.collapseSidebar,
                });
            }
        }
    }

    reset = () => {
        this.setState({
            collapseSidebar: true,
            clicks: 0
        });
    }

    toggleSidebar = () => {
        this.setState({
            collapseSidebar: !this.state.collapseSidebar,
            clicks: this.state.clicks + 1
        });
    }

    render() { 
        return (
            <Fragment>
                <div className={'sidebar ' + (!this.state.collapseSidebar && window.innerWidth < 576 ? 'smallbox' : '')}>
                    <button className='sidebar-btn' onClick={this.toggleSidebar}>
                        <div className={'sidebar-burger '.concat(this.state.collapseSidebar ? '' : 'rotate-top')} />
                        <div className={'sidebar-burger sidebar-burger-bot '.concat(this.state.collapseSidebar ? '' : 'rotate-bot')} />
                        <span className={'sidebar-btn-text' + (this.state.collapseSidebar ? '' : ' white-text')}>
                            {this.state.collapseSidebar ? 'MENU' : 'CLOSE'}
                        </span>
                    </button>
                </div>

                <div className={!this.state.collapseSidebar ? 'background-filter' : ''} >
                    <div className={'navbar-items '.concat(this.state.clicks > 0 ? (this.state.collapseSidebar ? 'hide-navbar-items' : 'show-navbar-items') : 'remove-sidebar')}>
                        <Link to={process.env.PUBLIC_URL + '/'} onClick={this.reset} className='item' ><span className='underline-magical'>Home</span></Link>
                        <Link to={process.env.PUBLIC_URL + '/aboutMe'} onClick={this.reset} className='item' ><span className='underline-magical'>About Me</span></Link>
                        <Link to={process.env.PUBLIC_URL + '/projects'} onClick={this.reset} className='item' ><span className='underline-magical'>Projects</span></Link>
                        {/* <Link to={process.env.PUBLIC_URL + '/contact'} onClick={this.reset} className='item' >Contact</Link> */}
                    </div>
                </div>
            </Fragment>
            
        );
    }
}