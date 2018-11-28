import React from 'react'
import './contact.css';
import Email from '../assets/Email.svg';
import Facebook from '../assets/Facebook.svg';
import LinkedIn from '../assets/LinkedIn.png';
import GitHub from '../assets/GitHub.png';

export default () => (
  <div className='contact'>
    <a href='https://facebook.com/natelubitz' target="_blank" rel="noopener noreferrer"><img src={Facebook} alt='Facebook' /></a>
    <a href='https://www.linkedin.com/in/nathanial-lubitz-472b54130' target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt='LinkedIn' /> </a>
    <a href='https://github.com/natel97' target="_blank" rel="noopener noreferrer"><img src={GitHub} alt='GitHub'/></a>
    <a href='mailto:nate.lubitz@gmail.com'><img src={Email} alt='Email' /></a>
  </div>
)
