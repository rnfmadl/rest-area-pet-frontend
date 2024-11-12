import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext'; 
import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { login } = useContext(AuthContext); 
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      login(); // 로그인 시 "Eric"으로 설정
      navigate('/'); 
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <div className="joinForm">
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div className="textForm">
          <input
            name="loginId"
            type="text"
            className="id"
            placeholder="아이디"
            value={loginId} 
            onChange={(e) => setLoginId(e.target.value)}
          />
        </div>
        <div className="textForm">
          <input 
            name="loginPw"
            type="password"
            className="pw"
            placeholder="비밀번호" 
            value={loginPw}
            onChange={(e) => setLoginPw(e.target.value)}
          />
        </div>
        <input 
          type="submit"
          className="btn"
          value="로그인"
        />
      </form>
    </div>
  );
}

export default LoginPage;
