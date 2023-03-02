import React from 'react';
import "@styles/createAccount.scss";

const CreateAccount = () => {
  return (
    <div className="login">
        <div className="form-container">
            <h1 className="title">My Account</h1>
            <form action="" className="form">
                <div>
                    <label for="name" className="label">Name</label>
                    <input type="text" id="password" placeholder="Carolina NK" className="input input-name" />
                    <label for="email" className="label">Email address</label>
                    <input type="text" id="email" placeholder="carolinank@example.com" className="input input-email" />
                    <label for="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="**********" className="input input-password" />
                </div>
                <div>
                    <input type="submit" value="Create account" className="primary-button login-button" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateAccount