import React from 'react';
import '../index.css';
import SignatureHeader from './SignatureHeader';

/* 전체 틀을 잡기 위한 컴포넌트 */
const SignatureTemplate = ({ children }) => {
    return (
        <div className='SignatureTemplate'>
            {children}
        </div>
    )
};

export default SignatureTemplate;