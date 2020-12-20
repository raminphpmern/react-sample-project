import React from 'react';

function Signup() {
    return (
        <div>
            <form>
                <p><input type="text" name="name" placeholder="Name" /></p>
                <p><input type="email" name="email" placeholder="Email Id" /></p>
                <p><input type="password" name="password" placeholder="Password" /></p>
                <p><input type="password" name="cfpassword" placeholder="Confirm Password" /></p>
                <p><input type="submit" name="submit" value="Signup" /></p>
            </form>
        </div>
    );
}

export default Signup;