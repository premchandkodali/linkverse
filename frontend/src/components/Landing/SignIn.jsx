import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import './Signin.css';

const SignIn = () => {
  const [isStudentSignIn, setIsStudentSignIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { setAuthState } = useOutletContext();

  const toggleSignIn = () => {
    setIsStudentSignIn(!isStudentSignIn);
    setMessage('');
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const userType = isStudentSignIn ? 'student' : 'faculty';
    const response = await fetch(`http://localhost:3000/api/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, userType }),
    });

    const data = await response.json();
    if (data.success) {
      setMessage('Sign in successful');
      setAuthState({ isAuthenticated: true, userType, username });
      console.log('Navigating to dashboard with username:', username); // Add this line to debug
      if (userType === 'student') {
        navigate('/StudComp/StudentHome', { state: { username } }); // Navigate to the student dashboard
      } else {
        navigate('/FacComp/FacultyHome', { state: { username } }); // Navigate to the faculty dashboard
      }
    } else {
      setMessage('Retry');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`container-fluid ${isStudentSignIn ? 'student-sign-in' : 'faculty-sign-in'}`}>
      <div className="row">
        {/* FACULTY SIGN IN */}
        <div className="col align-items-center flex-col faculty-sign-in">
          <div className="form-wrapper align-items-center">
            <form className="form faculty-sign-in" onSubmit={handleSignIn}>
              <h2>Faculty Sign In</h2>
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className={`bx ${showPassword ? 'bxs-show' : 'bxs-hide'} toggle-password`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
              <button type="submit">Sign in</button>
              <p>
                <b onClick={toggleSignIn} className="pointer">Student Sign In</b>
              </p>
              {message && <p>{message}</p>}
            </form>
          </div>
          <div className="text faculty-sign-in">
            <h2>Welcome Faculty</h2>
          </div>
        </div>
        {/* END FACULTY SIGN IN */}

        {/* STUDENT SIGN IN */}
        <div className="col align-items-center flex-col student-sign-in">
          <div className="form-wrapper align-items-center">
            <form className="form student-sign-in" onSubmit={handleSignIn}>
              <h2>Student Sign In</h2>
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className={`bx ${showPassword ? 'bxs-show' : 'bxs-hide'} toggle-password`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
              <button type="submit">Sign in</button>
              <p>
                <b onClick={toggleSignIn} className="pointer">Faculty Sign In</b>
              </p>
              {message && <p>{message}</p>}
            </form>
          </div>
          <div className="text student-sign-in">
            <h2>Welcome Students</h2>
          </div>
        </div>
        {/* END STUDENT SIGN IN */}
      </div>
    </div>
  );
};

export default SignIn;