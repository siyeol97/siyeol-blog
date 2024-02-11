import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function Layout() {
  return (
    <Wrapper>
      <Navbar>Layout</Navbar>
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
