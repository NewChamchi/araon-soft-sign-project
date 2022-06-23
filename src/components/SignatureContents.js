import React from 'react';
import '../index.css';

/* 계약의 내용을 담고 있는 컴포넌트 틀 */
const SignatureContents = ({ children }) => {
    return (
        <div className='SignatureContents'>
            {children}
        </div>
    );
};

export default SignatureContents;