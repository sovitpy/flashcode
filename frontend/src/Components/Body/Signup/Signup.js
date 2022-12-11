import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, email, password };
    axios
      .post('/api/v1/users/signup', user)
      .then((res) => {
        if (res.status.toString().startsWith('2')) {
          setError('');
          setSuccess(res.data.message);
          window.location.reload();
        } else {
          setSuccess('');
          setError(res.data.message);
        }
        const token = res.data.token;
        localStorage.setItem('token', token);
      })
      .catch((err) => {
        setSuccess('');
        console.log(err);
        setError(err.response.data.message);
      });
  };

  return (
    <div className="user-form__container">
      <div className="userform__box">
        <div className="">
          <p className="form__heading">SIGN UP</p>

          <form onSubmit={handleSubmit} className="userform">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit-button">Sign Up</button>
            <Link className="signup-button" to="/login">
              Already have an account? Login here!
            </Link>
            {error && <p className="validation-error">Error: {error}</p>}
            {success && <p className="validation-success">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
