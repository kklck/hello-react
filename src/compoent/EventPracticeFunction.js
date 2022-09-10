import React, {useState} from "react";

const EventPracticeFunction = () => {
  const [form,setForm] = useState({
    username:'',
    message:''
  });

  const { username, message } = form;
  const onChange = e => {
    const nextForm = {
      ...form,  // spread 문법, 객체를 펼친 것과 같은 의미
      [e.target.name]:e.target.value
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username:'',
      message:''
    })
  }

    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick();
        }
    }

    return (
      <div>
          <h1>이벤트 연습</h1>
          <input
            type="text"
            name="username"
            placeholder="사용자명"
            value={username}
            onChange={onChange}
          />
          <input
            type="text"
            name="message"
            placeholder="아무거나 입력해 보세요"
            value={message}
            onChange={onChange}
            onKeyDown={onKeyPress}
          />
          <button onClick={onClick}>확인</button>
      </div>
    )
}

export default EventPracticeFunction;