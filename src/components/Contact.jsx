import React from 'react';
import './contact.css';
import Email from '../assets/Email.svg';
import Facebook from '../assets/Facebook.svg';
import LinkedIn from '../assets/LinkedIn.png';
import GitHub from '../assets/GitHub.png';
import Contact from '../assets/Contact.svg'
import Cancel from '../assets/Cancel.svg';

let toggleHidden = (event) => {
  event.target.parentNode.classList.toggle('hidden');
  event.target.parentNode.querySelector('.toggler').src = event.target.parentNode.className.includes('hidden') ? Contact : Cancel;
}

export default function(props) {
  let parent = React.createRef();
  return (
    <div ref={parent} className={`contact ${props.mobile ? 'mobile hidden' : 'desktop'}`}>
      <a href='https://facebook.com/natelubitz' target="_blank" rel="noopener noreferrer"><img src={Facebook} alt='Facebook' /></a>
      <a href='https://www.linkedin.com/in/nathanial-lubitz-472b54130' target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt='LinkedIn' /> </a>
      <a href='https://github.com/natel97' target="_blank" rel="noopener noreferrer"><img src={GitHub} alt='GitHub' /></a>
      <a href='mailto:nate.lubitz@gmail.com'><img src={Email} alt='Email' /></a>
      {props.mobile && <img className='toggler'onClick={toggleHidden} alt='contact-toggle' src={Contact} />}
      <div onTouchStart={toggleHidden} className='tint'></div>
    </div>
  )
}
