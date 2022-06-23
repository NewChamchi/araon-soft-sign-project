import React, { useEffect } from 'react';
import '../index.css';

const SignatureVerifyArea = ({ drawDataStore, setDrawDataStore, isVisible }) => {

    return (
        <div className="SingnatureVerifyArea">
            <span className="SignatureLocation">싸인 위치</span>
            {(drawDataStore.base64Data) ?
                <img
                    src={drawDataStore.base64Data}
                    className='SignaturePaste'
                    alt="signature paste"
                /> : false
            }
        </div>
    );
};

export default SignatureVerifyArea;