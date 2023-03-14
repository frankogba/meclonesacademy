import React, { useState }from 'react';

 const Login = (props) => {
    const {email, setEmail } = useState('');
    const {password, setPassword } = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

  return (
    <div className="form-container">
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" id='email' name='email' />

            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id='password' name='password' />

            <button>LOGIN</button>
        </form>

        <div className="reminder">
                    <label><input type="checkbox" />Remember me</label>
                    <a href='#ask.com' className='forget-link'>Forgot passord?</a>
                </div>
                <button type="submit" className="btn">Login</button>

                <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Ragister here.</button>

      
    </div>
  )
}


export default Login; 