import React, {useEffect, useState} from 'react';
// 함수를 사용해 app 컴포넌트를 생성한다.
function App() {
  const [count, setCount] = useState(0);
  const [haneul, setHaneul] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  useEffect(() =>{
    console.log(count, haneul)
  },[count, haneul]) //[]안에 useState 값을 설정해주면 그 값이 바뀔때만 useEffect가 실행된다.

  useEffect(()=>{
    console.log("First rendering")
  },[]) // []값을 빈 공간으로 설정하면 초기 처음에만 실행되고 다음에는 실행되지 않는다.
 // -------------------------------------------------
  return (  
    <div className="App">
      <h1>Haneul coder</h1>
      <button onClick={increment}>Click</button>
      <button onClick={()=> setHaneul(haneul + 1)}>Click</button>
    </div>
  );
}
// ------------------------------------------------
export default App;

// useEffect를 사용하면 컴포넌트가 렌더링 될때마다 어떤 실행을 요청 할 수 있다.