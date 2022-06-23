import React from 'react';
import '../index.css';
import SignatureVerifyArea from './SignatureVerifyArea';

/* 계약서를 사용자에게 확인 받는 컴포넌트 */
const SignaturePermission = () => {
    const submitValue = "계약내용1"
    return(
        <div className='SignaturePermission'>
            <span>
                테스트용 계약서 확인 문장 작성
            </span>
            <input type="checkbox" name="PermissionCheck" value={submitValue}/>
            <SignatureVerifyArea/>
        </div>
    )
};

export default SignaturePermission;