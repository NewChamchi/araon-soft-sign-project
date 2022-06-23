import React from 'react';
import '../index.css';

/* 확인 취소 버튼 */
const SignatureButtons = ({ onSubmit, onCancel }) => {

    return (
        <div className='SignatureButtons'>
            <button className='SignatureConfirm' onClick={onSubmit}>확인</button>
            <button className='SignatureCancel' onClick={onCancel}>취소</button>
        </div>
    );
};

export default SignatureButtons;