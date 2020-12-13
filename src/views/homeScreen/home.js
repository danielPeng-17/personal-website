import React, { Fragment } from 'react';
import ContactButtons from '../../components/ContactButtons';
import me from '../../assets/images/dpeng.jpg';
import './home.css';

export default function Home() {
    return (
        <Fragment>
            <div className='background' >
                <img src={me} className='me' alt='me' />
                <h1 className='intro' >Hi, I'm Daniel.</h1>
                <ContactButtons color={'light'} />
            </div>
        </Fragment>
    );
}