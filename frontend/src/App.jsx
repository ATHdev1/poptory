import { useEffect, useState } from 'react';
import Home from './pages/Home/Home.jsx';
import Navbar from './components/navbar/navbar.jsx';
import { Routes, Route } from 'react-router-dom';

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
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='*' element={<h3>404 error</h3>}></Route>
        </Routes>
        <Home />
      </div>
    </div>
  );
}

export default App;
