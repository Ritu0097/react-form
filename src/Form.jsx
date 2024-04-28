import React, { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailBorderColor, setEmailBorderColor] = useState('blue');
  const [passwordBorderColor, setPasswordBorderColor] = useState('blue');
  const [confirmPasswordBorderColor, setConfirmPasswordBorderColor] = useState('blue');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  const validPassword = new RegExp(/^.{8,}$/);

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value === '') {
      setEmailBorderColor('blue');
      setEmailError('');
    } else if (validEmail.test(value)) {
      setEmailBorderColor('green');
      setEmailError('');
    } else {
      setEmailBorderColor('red');
      setEmailError('Invalid email format');
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value === '') {
      setPasswordBorderColor('blue');
      setPasswordError('');
    } else if (validPassword.test(value)) {
      setPasswordBorderColor('green');
      setPasswordError('');
    } else {
      setPasswordBorderColor('red');
      setPasswordError('Password must be at least 8 characters');
    }
  };

  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value === '') {
      setConfirmPasswordBorderColor('blue');
      setConfirmPasswordError('');
    } else if (value === password) {
      setConfirmPasswordBorderColor('green');
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordBorderColor('red');
      setConfirmPasswordError('Password do not match');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      emailBorderColor === 'green' &&
      passwordBorderColor === 'green' &&
      confirmPasswordBorderColor === 'green'
    ) {
      alert('Form submitted successfully');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setEmailBorderColor('blue');
      setPasswordBorderColor('blue');
      setConfirmPasswordBorderColor('blue');
    } else {
      alert('Form cannot be submitted!!');
    }
  };

  return (
    <div>
      <div className="signupForm">
        <form id="form" className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              <b>Email:</b>
            </label>
            <br />
            <input
              id="email"
              type="email"
              placeholder="Example@email.com"
              required
              value={email}
              onChange={handleEmail}
              style={{ borderColor: emailBorderColor }}
            />
            <p id="emailError" style={{ color: 'red' }}>
              {emailError}
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <b>Password:</b>
            </label>
            <br />
            <input
              id="password"
              type="password"
              placeholder="Your Password"
              required
              value={password}
              onChange={handlePassword}
              style={{ borderColor: passwordBorderColor }}
            />
            <p id="passwordError" style={{ color: 'red' }}>
              {passwordError}
            </p>
          </div>
          <div className="form-group mypass">
            <label htmlFor="confirmPassword">
              <b>Confirm Password:</b>
            </label>
            <br />
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={handleConfirmPassword}
              style={{ borderColor: confirmPasswordBorderColor }}
            />
            <p id="confirmPasswordError" style={{ color: 'red' }}>
              {confirmPasswordError}
            </p>
          </div>
          <input type="submit" value="Sign Up" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Form;