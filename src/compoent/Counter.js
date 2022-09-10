import React, { Component } from 'react';

// 클래스형 컴포넌트의 state
class Counter extends Component {
  /*
  // 생성자 메소드
  constructor(props) {
    // 무조건 호출, Component 부모 클래스가 지닌 생성자 함수 호출
    super(props);
    // state 초기값
    this.state = {
      number: 0,
      fixedNumber:0
    };
  }*/
  // 간단한 state 초기값 지정 방식, 객체 형식
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // this 로 state 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            // 이벤트는 콜백형으로
            this.setState(
              (prevState /*, props*/) => ({
                // 속성을 인자로 넘겨줄 수 있고, 생략할 수 있음
                number: number + 1,
              }),
              () => {
                console.log('setState 호출');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
