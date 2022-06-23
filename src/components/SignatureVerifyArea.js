import React, { useEffect, useState } from 'react';
import '../index.css';
import SignaturePopUp from './SignaturePopUp';

const testData = { userId: 1, base64Data: "" };

/* 계약서 싸인 화면 컴포넌트 */
const SignatureVerifyArea = () => {

    const [drawDataStore, setDrawDataStore] = useState(testData);
    const [isPopUp, setIsPopUp] = useState(false);

    const openPopUp = (e) => {
        setIsPopUp(true);
    };

    const closePopUp = (e) => {
        setIsPopUp(false);
    };

    return (
        <div className="SignatureVerifyArea">
            <form className="SignatureVerifyAreaButton" onClick={openPopUp}>
                <span className="SignatureLocation">싸인 위치</span>
                {(drawDataStore.base64Data) ?
                    <img
                        src={drawDataStore.base64Data}
                        className='SignaturePaste'
                        alt="signature paste"
                    /> : false
                } {/* 이미지가 존재하면 화면에 표시하고, 존재하지 않으면 화면에 표시하지 않음 */}
            </form>
            {isPopUp && <SignaturePopUp
                    drawDataStore={drawDataStore}
                    setDrawDataStore={setDrawDataStore}
                    openPopUp={openPopUp}
                    closePopUp={closePopUp}
                />} {/*팝업창이 띄워져 있으면 isPopUp과 함께 컴포넌트가 뜨고, 그렇지 않으면 뜨지 않음*/}
        </div> 
    );
};

export default SignatureVerifyArea;