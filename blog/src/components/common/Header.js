import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';

const HeaderBlock = styled.div``;

const wrapper = styled(Responsive)``;

const Spacer = styled.div``;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <wrapper>
          <div className="logo">REACTERS</div>
          <div className="right">
            <Button>로그인</Button>
          </div>
        </wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};
