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
  const [isVisible, setIsVisible] = useState(false);

  /*
  화면에 팝업창을 띄우는 것을 감시하기 위한 콜백함수 
  만약 
  */
  const onToggleVisible = (e) => {
    setIsVisible(!isVisible);
    e.preventDefault();
    if (!isVisible) {
      setDrawDataStore(...drawDataStore, drawDataStore.base64Data = undefined);
    };
  };

  return (
    <div>
      <form>
        <button
          className="TestButton"
          onClick={onToggleVisible}
        >팝업 {(!isVisible) ? "띄우기" : "지우기"} 테스트 버튼
        </button>
        <SignatureVerifyArea
          drawDataStore={drawDataStore}
          setDrawDataStore={setDrawDataStore}
          isVisible={isVisible}
        />
        {isVisible && <SignaturePopUp
          drawDataStore={drawDataStore}
          setDrawDataStore={setDrawDataStore}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />}
      </form>
    </div>
  );
};

export default App;
