import React from 'react';

const Login = (props) => {
    const { email, password , setEmail , setPassword , handLogin , handleSignup , hasAccount,sethasAccount , emailError , passwordError } = props;

    return (
        <section className="login">
            <div className="loginContainer">
            <label>Username</label>
            <input type="text" autoFocus required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input type="password" required  value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            
            <div className="btnContainer">
                {hasAccount ? (
                    <>
                    <button onClick={handLogin}>Sign In</button>
                    <p>Don't Have Account ? <span onClick={()=> sethasAccount(!hasAccount)}>Sign Up</span></p>
                    </>
                ) : (
                    <>
                    <button onClick={handleSignup}>Sign Up</button>
                    <p>Have Account ? <span onClick={()=> sethasAccount(!hasAccount)}>Sign In</span></p>
                    </>
                )}
            </div>

            </div>
        </section>
    )
}

export default Login ; 