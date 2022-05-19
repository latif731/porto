import React,{useRef, useState} from 'react'
import './form.css'

import {Container, Row, Col} from 'reactstrap'
import emailjs from 'emailjs-com';

const Form = () => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        message:"",
    })

    const [focus, setFocus] = useState(false)

    const inputs = [
        {
            id:1,
            name:"name",
            type:"text",
            placeholder:"Your Name",
            label:"name",
            errorMessage:"namine sinten?",
            required: true,
        },
        {
            id:2,
            name:"email",
            type:"text",
            placeholder:"Your Email",
            label:"email",
            errorMessage:"emaile nopo geh?",
            required: true,
        },
        {
            id:3,
            name:"message",
            type:"text",
            placeholder:"Your Message",
            label:"message",
            errorMessage:"mbok bilih paringaken pesan",
            required: true,
        },
    ]
    const usernameRef = useRef()
    console.log(usernameRef)

    // console.log(username)
    const form = useRef();

    const handleFocus = (e) => {
        setFocus(true)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.target)   
    //   console.log(Object.fromEntries(data.entries()))
  
      emailjs.sendForm('service_0jub4mf', 'template_1kkca2v', form.current, 'qthmjywzsbN5PJcdx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
  return (
    <form className='form' ref={form} onSubmit={handleSubmit}>
        {inputs.map((input) => (
        <div className="form_input">
            <input 
            key={input.id} 
            type={input.type} 
            name={input.name} 
            ref={usernameRef} 
            placeholder={input.placeholder} 
            value={values[input.name]}
            onChange={onChange}
            required
            onBlur={handleFocus}
            focus={focus.toString()}
            />
            <span className='error'>{input.errorMessage}</span>
        </div>
        ))}
        <button className="submit_button" type='submit'>
            Submit
        </button>
    </form>
  )
}

export default Form