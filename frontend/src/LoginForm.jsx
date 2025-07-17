import { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // 기본 폼 제출 방지
    console.log('ID:', id);
    console.log('Password:', password);
    // 실제 로그인 로직은 여기에 작성 (예: API 요청)
  };

  return (
    <div className='logInBox'>
      <h2 style={{ fontFamily: 'Jua' , textAlign: 'center'}}>팝토리</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '10px' }}>
          <input type="text" value={id} placeholder='아이디' onChange={(e) => setId(e.target.value)} required className='logInInput' />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input type="password" value={password} placeholder='비밀번호' onChange={(e) => setPassword(e.target.value)} required className='logInInput' />
        </div>
        <button type="submit" className='logInInput' style={{backgroundColor: "#7FB285"}}>로그인</button>
      </form>
    </div>
  );
}

export default LoginForm;