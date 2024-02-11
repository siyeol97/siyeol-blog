import styled from 'styled-components';

export default function Navbar() {
  return (
    <Wrapper>
      <Nav>
        <MainTItle>Dev Story</MainTItle>
        <Menu>
          <MenuItem>메뉴1</MenuItem>
          <MenuItem>메뉴2</MenuItem>
          <MenuItem>메뉴3</MenuItem>
        </Menu>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const MainTItle = styled.span`
  font-size: 24px;
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const MenuItem = styled.span``;
