import React from 'react';
import '../index.css';
import SignatureVerifyArea from './SignatureVerifyArea';

const SignaturePermission = ({drawDataStore}) => {
    const submitValue = "계약내용1"
    return(
        <div className='SignaturePermission'>
            <span>
                테스트용 계약서 확인 문장 작성
            </span>
            <input type="checkbox" name="PermissionCheck" value={submitValue}/>
            <SignatureVerifyArea drawDataStore={drawDataStore}/>
        </div>
    )
};

export default SignaturePermission;