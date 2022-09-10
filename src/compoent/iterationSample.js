import React, { useState } from "react";

const IterationSample = () => {
  //key, value 지정
  const [ names, setNames ] = useState([
    { id:1,text:'눈사람'},
    { id:2,text:'얼음'},
    { id:3,text:'눈'},
    { id:4,text:'바람'}
  ]);

  const [ inputText, setInputText ] = useState('');
  const [ nextId, setNextId ] = useState(5); // 새로운 항목 추가할 때 id

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    // concat : 새로운 항목 추가한 배열, 불변성 유지,
    // push : 기존 배열 자체를 변경
    const nextNames = names.concat({
      id : nextId,
      text : inputText
    });
    setNextId(nextId+1);
    setNames(nextNames);
    setInputText('');
  }

  const onRemove = id => {
    // filter 삭제
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
    {name.id} : {name.text}</li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange}/>
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;