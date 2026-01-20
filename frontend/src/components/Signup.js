import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email && password) {
      alert('Signup successful! Please login.');
      navigate('/');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
      <p>
        Already have an account?{' '}
        <span
          style={{ color: '#d4b996', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Signup;
