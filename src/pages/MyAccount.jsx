import React from 'react';
import "@styles/myAccount.scss";

const MyAccount = () => {
  return (
    <div className="login">
        <div className="form-container">
            <h1 className="title">My Account</h1>
            <form action="" className="form">
                <div>
                    <label for="name" className="label">Name</label>
                    <p className="value">Carolina NK</p>
                    <label for="email" className="label">Email address</label>
                    <p className="value">carolinank@example.com</p>
                    <label for="new-password" className="label">Password</label>
                    <p className="value">**********</p>
                </div>
                <div>
                    <input type="submit" value="Edit" className="secondary-button login-button" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default MyAccount