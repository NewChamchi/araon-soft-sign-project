import './App.css';
import './index.css';
import React from 'react';
/* 모든 컴포넌트는 대문자로 시작해야함 - JSX */
import SignatureTemplate from './components/SignatureTemplate';
import SignatureHeader from './components/SignatureHeader';
import SignatureTextArea from './components/SignatureTextArea';
import SignaturePermission from './components/SignaturePermission';
import SignatureContents from './components/SignatureContents';

/*
signature 등록 프로젝트 개발
*/
function App() {
  return (
    <div>
      <SignatureTemplate>
        <SignatureHeader/>
        <SignatureContents>
          <SignatureTextArea/>
          <SignaturePermission/>
          <SignaturePermission/>
        </SignatureContents>
        <SignatureContents>
          <SignatureTextArea/>
          <SignaturePermission/>
          <SignaturePermission/>
        </SignatureContents>
      </SignatureTemplate>
    </div>
  );
};

export default App;
