import React from  'react';

function Login() {
    return (
        <div>
            <form>
                <p><input type="email" name="email" placeholder="Email Id" /></p>
                <p><input type="password" name="password" placeholder="Password" /></p>
                <p><input type="submit" name="submit" value="Login" /></p>
            </form>
        </div>
    );
}

export default Login;