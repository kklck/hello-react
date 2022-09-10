import "./App.css";
import React, { Component } from "react";
import ScrollBox from "./compoent/ScrollBox";
import IterationSample from "./compoent/iterationSample";

class App extends Component {
  render() {
    return (
      <IterationSample/>
    );
  }
}
/*
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    )
  }
}
 */
/*
class App extends Component {
  render() {
    return (
      <ValidationSample/>
    )
  }
}

 */

/*
// 클래스형 컴포넌트 이벤트용
const App = () => {
  return <EventPracticeFuntion/>;
};
 */

/*
// 함수형 컴포넌트 useState 사용
const App = () => {
  return <Say/>;
}
*/

/*
// 클래스향 컴포넌트 state 사용
const App = () =>{
  return <Counter/>;
};
 */

/*
const App = () => {
  //return <MyComponent name="react"/>; // 부모 컴포넌트에서 자식의 속성을 지정
  //return <MyComponent children 값은 자식 컴포넌트 태그 사이로 전달 >리액트</MyComponent>
  //return <MyComponent name={3} >리액트</MyComponent> // 필수 속성에서 string 으로 지정했다면 에러
  return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
};
*/

/*
// 클래스 컴포넌트 : state, 라이프사이클, 임의 메소드 정의 가능
class App extends Component{
  render() {
    const name = 'react';
    return <div className="react">{name}</div>
  }
}
*/


/*
// 함수 컴포넌트 : 편함, 메모리 사용 적음, 파일 크기 적음, Hooks 으로 state, 라이프사이클 사용, 리액트 공식 매뉴얼 권장
function App() {
  const name = "리액트"; // const, let : if문 안과 밖에 같은 변수 선언하여 다르게 사용 가능 <-> var : 둘 다 같은 변수
  //const : 수정 불가 <-> let : 수정가능(for 문 존재할 때 주로 사용)
  const number = 0; // {number && <h1> 숫자 0 인데 뭐가 나오나</h1>}
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  // return 렌더링하여 내용 나타냄 -> React.createElement()
  return (
    // html 코드 같지만, JSX 라 부름, DOM 의 트리구조 유지를 위해 여러 컴포넌트는 하나의 부모 컴포넌트가 존재하여야 함.
    <div>
      <div className="react">{name}</div>
    </div>
  );
}
 */

export default App;
