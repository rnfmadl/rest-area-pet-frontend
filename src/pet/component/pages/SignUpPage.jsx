import React, { useState } from 'react';
import './SignUpPage.css';

function SignUpPage() {
  const [formData, setFormData] = useState({
    loginId: '',
    loginPw: '',
    loginPwConfirm: '',
    name: '',
    email: '',
    nickname: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // 비밀번호 확인 로직 추가
    if (formData.loginPw !== formData.loginPwConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }


      alert('회원가입이 완료되었습니다!');
      
      // 홈페이지로 이동
      window.location.href = '/login';
  };

  return (
    <div className="joinForm">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="textForm">
          <input name="loginId" type="text" className="id" placeholder="아이디" onChange={handleChange} />
        </div>
        <div className="textForm">
          <input name="loginPw" type="password" className="pw" placeholder="비밀번호" onChange={handleChange} />
        </div>
        <div className="textForm">
          <input name="loginPwConfirm" type="password" className="pw" placeholder="비밀번호 확인" onChange={handleChange} />
        </div>
        <div className="textForm">
          <input name="name" type="text" className="name" placeholder="이름" onChange={handleChange} />
        </div>
        <div className="textForm">
          <input name="email" type="email" className="email" placeholder="이메일" onChange={handleChange} />
        </div>
        <div className="textForm">
          <input name="nickname" type="text" className="nickname" placeholder="닉네임" onChange={handleChange} />
        </div>
        <input type="submit" className="btn" value="J O I N" />
      </form>
    </div>
  );
}

export default SignUpPage;
