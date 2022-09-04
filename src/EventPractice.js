import React, { Component } from 'react';

// 클래스형 컴포넌트
class EventPractice extends Component {
  state = {
    username:'',
    message: ''
  };
/*
  constructor(props) {
    super(props);
    // 임의 메소드 호출 과정에서 이벤트 등록 시 this 끊어질(undefined) 수 있기 때문에 bind
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
 */
/*
  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleClick(e) {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }
*/

  // 바벨의 transform-class-properties, constructor 생성자 생략가능
  // target.name 이용하여 여러 값을 쉽게 변경
  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value // name : [username, message]
    });
  }

  handleClick = () => {
    alert(this.state.username+': '+this.state.message);
    this.setState({
      username:'',
      message: ''
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleClick();
    }
  }
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          /*onChange={(e) => {
            //console.log(e.target.value);
            this.setState({ message: e.target.value });
          }}*/
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />
        <button
          /*onClick={() => {
            alert(this.state.message);
            this.setState({
              message: ''
            });
          }}*/
          onClick={this.handleClick}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;