import './App.css';
import './index.css';
import React, { useState } from 'react';
/* 모든 컴포넌트는 대문자로 시작해야함 - JSX */
import SignaturePopUp from './components/SignaturePopUp';
import SignatureVerifyArea from './components/SignatureVerifyArea';
import SignatureTemplate from './components/SignatureTemplate';
import SignatureHeader from './components/SignatureHeader';
import SignatureTextArea from './components/SignatureTextArea';
import SignaturePermission from './components/SignaturePermission';
import SignatureContents from './components/SignatureContents';

const testData = { userId: 1, base64Data: "" };

/*
signature 등록 프로젝트 개발
*/
function App() {
  const [drawDataStore, setDrawDataStore] = useState(testData);
  const [isPopUp, setIsPopUp] = useState(false);

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
      <SignatureTemplate>
        <SignatureHeader />
        <SignatureContents>
          <SignatureTextArea />
          <SignaturePermission drawDataStore={drawDataStore} />
          <SignaturePermission drawDataStore={drawDataStore} />
        </SignatureContents>
        <SignatureContents>
          <SignatureTextArea />
          <SignaturePermission drawDataStore={drawDataStore} />
          <SignaturePermission drawDataStore={drawDataStore} />
        </SignatureContents>
      </SignatureTemplate>
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
      </form>
    </div>
  );
};

export default App;
