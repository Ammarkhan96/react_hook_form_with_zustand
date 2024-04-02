// App.tsx
import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import FileAttachment from './components/FileAttachment';

function App() {
  const [signedUp, setSignedUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignup = () => {
    setSignedUp(true);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {!signedUp ? (
        <Signup onSignup={handleSignup} />
      ) : (
        <div>
          {!loggedIn ? (
            <Login onLogin={handleLogin} />
          ) : (
            <FileAttachment />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
