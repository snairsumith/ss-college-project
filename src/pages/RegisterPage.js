import React from 'react';

const RegisterPage = () => {
    return (
        <div>
            <h1>Register Page</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}> 
                <input type="text" placeholder="Username" style={{padding: '10px 20px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px'}} />
                <input type="password"  placeholder="Password" style={{padding: '10px 20px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px'}} />
                <button style={{backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px'}}>Register</button>
                <p></p>
                <a href="/">Login</a>
                
            </div>
        </div>
    )
}

export default RegisterPage;