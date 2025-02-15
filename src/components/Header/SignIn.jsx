import React, { useState } from 'react';
import './Signin.css';

const SignIn = () => {
  const [isStudentSignIn, setIsStudentSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsStudentSignIn(!isStudentSignIn);
  };

  return (
    <div className={`container ${isStudentSignIn ? 'student-sign-in' : 'faculty-sign-in'}`}>
      <div className="row">
        {/* FACULTY SIGN IN */}
        <div className="col align-items-center flex-col faculty-sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form faculty-sign-in">
              <h2>Faculty Sign In</h2>
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" placeholder="Password" />
              </div>
              <button>Sign in</button>
              <p>
                <b onClick={toggleSignIn} className="pointer">Student Sign In</b>
              </p>
            </div>
          </div>
          <div className="text faculty-sign-in">
            <h2>Welcome Faculty</h2>
          </div>
        </div>
        {/* END FACULTY SIGN IN */}

        {/* STUDENT SIGN IN */}
        <div className="col align-items-center flex-col student-sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form student-sign-in">
              <h2>Student Sign In</h2>
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" placeholder="Password" />
              </div>
              <button>Sign in</button>
              <p>
                <b onClick={toggleSignIn} className="pointer">Faculty Sign In</b>
              </p>
            </div>
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