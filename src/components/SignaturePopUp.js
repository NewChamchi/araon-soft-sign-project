import React, { useRef, useEffect } from 'react';
import NewWindow from 'react-new-window';
import '../index.css';
import SignatureButtons from './SignatureButtons';
import SignatureCanvas from 'react-signature-canvas';
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const SignaturePopUp = ({ drawDataStore, setDrawDataStore, openPopUp, closePopUp }) => {

    const SignatureCanvasRef = useRef();

    const onSubmit = (e) => {
        setDrawDataStore({
            ...drawDataStore,
            base64Data: SignatureCanvasRef.current.getTrimmedCanvas().toDataURL('image/png')
        });
        closePopUp();
        console.log(drawDataStore.base64Data);
        e.preventDefault();
    };

    const onCancel = (e) => {
        closePopUp();
        e.preventDefault();
        // setDrawDataStore({
        //     ...drawDataStore,
        //     base64Data: undefined
        // });
        // 취소 버튼은 싸인 위치에 있는 싸인 이미지를 제거하는 게 아니라 유지를 해야함
    };

    return (
        <div>
            {/* <NewWindow className="SignaturePopUp"> */}
            <Modal
                isOpen={openPopUp}
                // onAfterOpen={}
                onRequestClose={closePopUp}
                style={customStyles}
                contentLabel={"Signature Input Window"}
            >
                <form>
                    <div className="SignatureCanvas">
                        <SignatureCanvas
                            ref={SignatureCanvasRef}
                            penColor='black'
                            canvasProps={{ className: 'SigCanvas' }}
                        />
                    </div>
                    <SignatureButtons onSubmit={onSubmit} onCancel={onCancel} />
                </form>
            </Modal>
            {/* </NewWindow> */}
        </div>
    );
};

export default SignaturePopUp;