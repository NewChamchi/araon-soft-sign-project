import './App.css';
import './index.css';
import React, { useState } from 'react';
/* 모든 컴포넌트는 대문자로 시작해야함 - JSX */
import SignaturePopUp from './components/SignaturePopUp';
import SignatureVerifyArea from './components/SignatureVerifyArea';

const testData = { userId: 1, base64Data: "" };
/*
signature 등록 프로젝트 개발
*/
function App() {
  const [drawDataStore, setDrawDataStore] = useState(testData);
  const [isPopUp, setIsPopUp] = useState(false);

  /*
  화면에 팝업창을 띄우는 것을 감시하기 위한 콜백함수 
  */
  // const onTogglePopUp = (e) => {
  //   setIsPopUp(!isPopUp);
  //   e.preventDefault();
  //   if (!isPopUp) {
  //     setDrawDataStore(...drawDataStore, drawDataStore.base64Data = undefined);
  //   };
  // };

  const openPopUp = (e) => {
    setIsPopUp(true);
    e.preventDefault();
  }

  const closePopUp = (e) => {
    setIsPopUp(false);
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <button
          className="TestButton"
          onClick={openPopUp}
        >팝업 띄우기 테스트 버튼
        </button>
        <SignatureVerifyArea
          drawDataStore={drawDataStore}
        />
        {isPopUp && <SignaturePopUp
          drawDataStore={drawDataStore}
          setDrawDataStore={setDrawDataStore}
          openPopUp={openPopUp}
          closePopUp={closePopUp}
          />}
        {/* {isPopUp && <SignaturePopUp
          drawDataStore={drawDataStore}
          setDrawDataStore={setDrawDataStore}
          isPopUp={isPopUp}
          setIsPopUp={setIsPopUp}
        />} */}
      </form>
    </div>
  );
};

export default App;
