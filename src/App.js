import React, {useState} from 'react';
// 함수를 사용해 app 컴포넌트를 생성한다.
function App() {
  const [text, setText] = useState('Kossie');
// -----------------------------------------------
  const onSubmit = () => {
    alert("submitted")
  };
// ------------------------------------------------
  const onKeyUp = (event) => {
    if(event.keyCode === 13){
      onSubmit();
    }
    console.log('key up')
  };
// -----------------------------------------------
  // let text = "Haneul"

  const updateText =() => {
    // text = 'Coder';
    setText('Coder')
    console.log(text)
  };
// -------------------------------------------------
  return (  
    <div className="App">
      <input onKeyUp={onKeyUp}></input>
      <button onClick={onSubmit}>submit</button>

      <br/><br/>
      <span>{text}</span>
      <button onClick={updateText}>update</button>
    </div>
  );
}
// ------------------------------------------------
export default App;

// ()=> alert("submit") onClick내부에는 함수 형식이 들어가야한다.
// onKeyUp 함수 내부에 event의 keyCode 값이 13(enter)일 때 onSubmit() 함수를 실행하도록 설정한다.
// jsx에서 변수를 사용하고 싶을 때는 {} 중괄호 사이에 넣어 주면 된다.
// useState를 활용하면 setText를 활용해 변수를 쉽게 변화 시킬 수 있다.