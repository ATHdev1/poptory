import { useEffect, useState } from 'react';
import LoginForm from './pages/LoginForm/LoginForm.jsx';
import Home from './pages/Home/Home.jsx';

function App() {
  const [msg, setMsg] = useState('Loading...')

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('Error: ' + err.message))
  }, [])

  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App
