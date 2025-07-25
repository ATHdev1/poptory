import { useEffect, useState } from 'react';
import LoginForm from './pages/LoginForm/LoginForm.jsx';
import Home from './pages/Home/Home.jsx';
import Navbar from './components/navbar/navbar.jsx';

function App() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}`)
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('Error: ' + err.message));
  }, []);

  return (
    <div>
      <Navbar />
      <p style={{ padding: '10px', color: 'green' }}>{msg}</p>
      <div className='page-wrapper'>
        <Home />
      </div>
    </div>
  );
}

export default App;
