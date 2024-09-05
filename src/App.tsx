import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, login, logout } from '../';

function App() {
  const [count, setCount] = useState(0)
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  
  const handleLogin = () => {
    dispatch(login("TOKEN"));
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  console.log('STORE', store);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button text={`Count is : ${count}`} onClick={() => setCount(count + 1)} />
        <Button text={"Login"} onClick={handleLogin} />
        <Button text={"Logout"} onClick={handleLogout} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
