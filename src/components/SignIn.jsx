import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        // I will later add authentication logic here

        // Navigate to profile creation page
        navigate('/user/create-profile');
    };

    return (
        <div className='container-wrapper'>
            <div className='sign-container'>
                <div className="welcome">
                    <div>
                        <h2>welcome back</h2>
                    </div>
                    <div className="signin-link">
                        <p>don't have an account yet?</p>
                        <Link to="/signup">sign up</Link>
                    </div>
                </div>
                <form onSubmit={handleSignIn}>
                    <div className='inner-form'>
                        <div>
                            <i className="fa-regular fa-user"></i>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <i className="fa-solid fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Sign In</button>
                    </div>
                </form>
                <div className="line-division">
                    <div className="line"></div>
                    <p>or</p>
                    <div className="line"></div>
                </div>
                <div className="socials-signup">
                    <a href="#"><i className="fa-brands fa-apple"></i></a>
                    <a href="#"><i className="fa-brands fa-google"></i></a>
                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
