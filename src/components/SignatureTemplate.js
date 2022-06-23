import React from 'react';
import '../index.css';
import SignatureHeader from './SignatureHeader';

const SignatureTemplate = ({ children }) => {
    return (
        <div className='SignatureTemplate'>
            {children}
        </div>
    )
};

export default SignatureTemplate;