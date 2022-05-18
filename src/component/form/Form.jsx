import React,{useRef} from 'react'
import './form.css'

import {Container, Row, Col} from 'reactstrap'
import emailjs from 'emailjs-com';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0jub4mf', 'template_1kkca2v', form.current, 'qthmjywzsbN5PJcdx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
        <div className="form_input">
            <input type="text" name='name' placeholder='Your Name'/>
        </div>
        <div className="form_input">
            <input type="email" name='email' placeholder='Your Email'/>
        </div>
        <div className="form_input">
            <textarea placeholder='Write Message' name='message'>
            </textarea>
        </div>
        <button className="submit_button" type='submit'>
            Submit
        </button>
    </form>
  )
}

export default Form