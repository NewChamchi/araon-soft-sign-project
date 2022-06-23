import React from 'react';
import '../index.css';

const SignatureButtons = ({ onSubmit, onCancel }) => {

    return (
        <div className='SignatureButtons'>
            <button className='SignatureConfirm' onClick={onSubmit}>확인</button>
            <button className='SignatureCancel' onClick={onCancel}>취소</button>
        </div>
    );
};

export default SignatureButtons;