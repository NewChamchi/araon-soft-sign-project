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
        // 각각 화면 상하좌우로부터 얼마나 떨어지는지 표시하는 기능임 (다 50%으로 밀어버리면 화면 가운데로 수렴해버림)
        // marginRight : '50%' 왜 있는 거냐?
        transform: 'translate(-50%, -50%)', // 위치를 이동 시킴 (아마 right와 bottom을 쓸 수 없기 때문에 대신 쓰는 듯)
    },
};

/* 팝업창 */
const SignaturePopUp = ({ drawDataStore, setDrawDataStore, openPopUp, closePopUp }) => {

    const SignatureCanvasRef = useRef();

    const onSubmit = (e) => {
        setDrawDataStore({
            ...drawDataStore,
            base64Data: SignatureCanvasRef.current.getCanvas().toDataURL('image/png')
        });
        closePopUp();
        console.log(drawDataStore.base64Data);
    };

    // 취소 콜백 함수는 싸인 위치에 있는 싸인 이미지를 제거하는 게 아니라 유지를 해야함
    const onCancel = (e) => {
        closePopUp();
    };

    return (
        <div>
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
                            ref={SignatureCanvasRef} // 확인버튼을 누르면 해당 ref의 current에서 canvas를 가져옴
                            penColor='black'
                            canvasProps={{ className: 'SigCanvas' }}
                        />
                    </div>
                    <SignatureButtons onSubmit={onSubmit} onCancel={onCancel} />
                </form>
            </Modal>
        </div>
    );
};

export default SignaturePopUp;