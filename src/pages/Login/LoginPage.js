import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const validateLogin = () => {
        if(username === 'admin' && password === 'admin'){
           alert('Login validated');
        }else{
            alert('Login failed');
        }
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const onMouseHover = () => {
        console.log('Mouse hovered');
        alert('Mouse hovered');
    }
    return (
        <div>
            <h1>Login Page</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}> 
                <input type="text" placeholder="Username" style={{padding: '10px 20px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px'}} onChange={handleUsernameChange} />
                <input type="password"  placeholder="Password" style={{padding: '10px 20px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px'}} onChange={handlePasswordChange} />
                <button style={{backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px'}} onClick={validateLogin}>Login</button>
                <p></p>
            </div>
        </div>
    )
}

export default LoginPage;