import { useState } from 'react';
import './App.css';
import LoginDisplay from './components/Button';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <h2>Conditional Rendering</h2>
      <LoginDisplay isLoggedIn={isLoggedIn} username="Alice" />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}

export default App;
