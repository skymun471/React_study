import React, {useState} from 'react';
// 함수를 사용해 app 컴포넌트를 생성한다.
function App() {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    // alert("submitted")
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
// -------------------------------------------------
  return (  
    <div className="App">
      <form onSubmit={onSubmit}>
        <input placeholder='Username'
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        /><br/>

        <input placeholder='Password' 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        /><br/>

        <button>Login</button>
      </form>
    </div>
  );
}
// ------------------------------------------------
export default App;

// ()=> alert("submit") onClick내부에는 함수 형식이 들어가야한다.
// onKeyUp 함수 내부에 event의 keyCode 값이 13(enter)일 때 onSubmit() 함수를 실행하도록 설정한다.
// jsx에서 변수를 사용하고 싶을 때는 {} 중괄호 사이에 넣어 주면 된다.
// useState를 활용하면 setText를 활용해 변수를 쉽게 변화 시킬 수 있다.
// onchange={} text 값이 바뀔 떄마다 이벤트를 보내준다.
// onSubmit={} 형태는 이벤트 발동이다. {} 안에 함수를 실행 할 수 있다.