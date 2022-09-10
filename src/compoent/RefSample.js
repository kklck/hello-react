import React, { Component } from "react";

/* ref 쓰는 이유
1. 특정 태그에 포커스
2. 스크롤 박스 조작
3. Canvas 요소에 그림 그리기
 */
class RefSample extends Component {
  input = React.createRef();  // 리액트 내장 함수,

  handleFocus = () => {
    this.input.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.input}/>
      </div>
    );
  }
}

export default RefSample;