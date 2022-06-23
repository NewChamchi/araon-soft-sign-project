import React, { useRef, useEffect } from 'react';
import NewWindow from 'react-new-window';
import '../index.css';
import SignatureButtons from './SignatureButtons';
import SignatureDraw from './SignatureDraw';
import SignatureCanvas from 'react-signature-canvas';


const SignaturePopUp = ({ drawDataStore, setDrawDataStore, isVisible, setIsVisible }) => {
    useEffect(() => {
        console.log("팝업이 보임");
        setIsVisible(true);
        return() => {
            console.log("팝업이 사라짐");
            setIsVisible(false);
        }
    },[]);

    const SignatureCanvasRef = useRef();

    const onSubmit = (e) => {
        setIsVisible(() => false);
        setDrawDataStore({
            ...drawDataStore,
            base64Data: SignatureCanvasRef.current.getTrimmedCanvas().toDataURL('image/png')
        });
        console.log(drawDataStore.base64Data);
    };

    const onCancel = (e) => {
        setIsVisible(() => false);
        // setDrawDataStore({
        //     ...drawDataStore,
        //     base64Data: undefined
        // });
        // 취소 버튼은 싸인 위치에 있는 싸인 이미지를 제거하는 게 아니라 유지를 해야함
    };

    return (
        <div>
            <NewWindow className="SignaturePopUp">
                <form>
                    <div className="SignatureCanvas">
                        <SignatureCanvas
                            ref={SignatureCanvasRef}
                            penColor='black'
                            canvasProps={{ className: 'sigCanvas' }}
                        />
                    </div>
                    <SignatureButtons onSubmit={onSubmit} onCancel={onCancel}/>
                </form>
            </NewWindow>
        </div>
    );
};

export default SignaturePopUp;