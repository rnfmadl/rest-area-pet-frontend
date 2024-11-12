import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
  background-color: #343a40;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const NavButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  margin-left: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      {user ? (
        <>
          <span style={{ color: 'white', marginRight: '16px' }}>
            {user.name}님 환영합니다.
          </span>
          <NavButton onClick={logout}>로그아웃</NavButton>
        </>
      ) : (
        <>
          <NavButton onClick={() => navigate('/login')}>로그인</NavButton>
          <NavButton onClick={() => navigate('/signup')}>회원가입</NavButton>
        </>
      )}
    </HeaderWrapper>
  );
}

export default Header;
