import PropType from 'prop-types';
import {Component} from "react"; // 필수 속성, 속성의 타입 지정

// 클래스형 컴포넌트
class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        이름은 {name}입니다<br/>
        children 값은 {children}입니다.<br/>
        좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    )
  }
}
/*
// 콜백형 컴포넌트, 함수를 파라미터로 전달할 때 용이
const MyComponent = props => {
  return <div>나의 새로운 컴포넌트 {props.name} 입니다.<br/>
    children 값은 {props.children} 입니다.
  </div>;
};
*/

/*
//속성 선언 축약 가능
const MyComponent = props => {
  const { name, children } = props;
  return (
    <div>
      제 이름은 {name}입니다.<br/>
      children 값은 {children}입니다.
    </div>
  )
}
 */
/*
const MyComponent = ({ name, favoriteNumber, children }) => {
  return <div>
    제 이름은 {name}입니다.<br/>
    children 값은 {children}입니다.<br/>
    좋아하는 숫자는 {favoriteNumber} 입니다.
  </div>
}
 */
// 부모에서 속성을 지정하지 않은 경우
MyComponent.defaultProps = {
  name: '기본 이름'
};

// 필수 속성, 속성 타입 지정
MyComponent.proptype = {
  name:PropType.string,
  favoriteNumber: PropType.number.isRequired
};


export default MyComponent;