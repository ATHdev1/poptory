import { useEffect, useState } from 'react'

function App() {
  const [msg, setMsg] = useState('Loading...')

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('Error: ' + err.message))
  }, [])

  return <h1>{msg}</h1>
}

export default App
