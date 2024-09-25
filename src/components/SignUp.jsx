import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // I will later add sign-up logic here


        // On success, navigate to the sign-in page
        navigate('/signin');
    };

    return (
        <div className='container-wrapper'>
            <div className='sign-container'>
                <div className="welcome">
                    <div>
                        <h2>welcome</h2>
                    </div>
                    <div className="signin-link">
                        <p>have an account already?</p>
                        <Link to="/signin">sign in</Link>
                    </div>
                </div>
                <form onSubmit={handleSignUp}>
                    <div className='inner-form'>
                        <div>
                            <i className="fa-regular fa-envelope"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
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
                        <button type="submit">Sign up</button>
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

export default SignUp;
