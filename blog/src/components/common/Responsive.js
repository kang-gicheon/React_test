import styled from 'styled-components';

const ResponsiveBlock = styled.div``;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
