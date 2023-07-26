import styled from 'styled-components';
import palette from '../../lib/styles/palette';

/**
 * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트
 */

/* 화면 전체를 채우는 style 생성 */
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};

  /* flext 속성을 이용한 내용 중앙 정렬 */
  display: flex;
`;

const AuthTemplate = ({ children }) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};

export default AuthTemplate;
