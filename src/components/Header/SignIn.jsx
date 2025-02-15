import React, { useState, useEffect } from 'react';
import './Signin.css';

const SignIn = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    useEffect(() => {
        const container = document.getElementById('container-fluid');
        setTimeout(() => {
            container-fluid.classList.add('sign-in');
        }, 200);
    }, []);

    const toggle = () => {
        const container= document.getElementById('container-fluid');
        container-fluid.classList.toggle('sign-in');
        container-fluid.classList.toggle('sign-up');
        setIsSignIn(!isSignIn);
    };

    return (
        <div id="container-fluid" className="container-fluid">
            <form action="Login" method="post">
                <div className="row">
                    {/* SIGN UP */}
                    <div className="col align-items-center flex-col sign-up">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-up">
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Confirm password" />
                                </div>
                                <button>
                                    Sign up
                                </button>
                                <p>
                                    <span>
                                        Already have an account?
                                    </span>
                                    <b onClick={toggle} className="pointer">
                                        Sign in here
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END SIGN UP */}

                    {/* SIGN IN */}
                    <div className="col align-items-center flex-col sign-in">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-in">
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <button>
                                    Sign in
                                </button>
                                <p>
                                    <b>
                                        Forgot password?
                                    </b>
                                </p>
                                <p>
                                    <span>
                                        Don't have an account?
                                    </span>
                                    <b onClick={toggle} className="pointer">
                                        Sign up here
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END SIGN IN */}
                </div>

                {/* CONTENT SECTION */}
                <div className="row content-row">
                    {/* SIGN IN CONTENT */}
                    <div className="col align-items-center flex-col">
                        <div className="text sign-in">
                            <h2>Welcome</h2>
                        </div>
                    </div>

                    {/* SIGN UP CONTENT */}
                    <div className="col align-items-center flex-col">
                        <div className="text sign-up">
                            <h2>Join with us</h2>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;