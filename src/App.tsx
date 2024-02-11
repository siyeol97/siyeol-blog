import { RouterProvider } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import router from './router';

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
    font-family: Pretendard;
  }
  body {
    font-family: Pretendard;
  }
`;

export default function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
