import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
