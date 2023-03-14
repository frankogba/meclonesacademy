import React, { useState } from 'react';

const Register = (props) => {
    const {email, setEmail } = useState('');
    const {password, setPassword } = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
  return (
    <div className='register-container'>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">full name</label>
            <input value={email} name="name" id="name" placeholder="full name"/>

            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" id='email' name='email' />

            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id='password' name='password' />

            <button type='submit'>CREATE</button>
        </form>
        <button onClick={() => props.onFormSwitch('Login')}>Already have an account? login here</button>
      
    </div>
  )
}

}

export default Register;