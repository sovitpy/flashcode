import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    axios
      .post('http://localhost:3001/api/v1/users/login', user)
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
        <p className="form__heading">LOGIN</p>

        <form onSubmit={handleSubmit} className="userform">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit-button">Login</button>
          <Link className="signup-button" to="/signup">
            Don't have an account? Sign up here!
          </Link>
          {error && <p className="validation-error">{error}</p>}
          {success && <p className="validation-success">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
