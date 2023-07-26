import styled from 'styled-components'; // 스타일링시 사용할 라이브러리

/**
 * 회원가입 또는 로그인 폼을 보여주는 컴포넌트
 * 최상위 컴포넌트 선언시 이름 뒤 Block으로 지정
 * Block이 아닐시 wrapper / styled 작명 예정
 */

const AuthFormBlock = styled.div``;

const AuthForm = () => {
  return <AuthFormBlock>AuthForm</AuthFormBlock>;
};

export default AuthForm;
