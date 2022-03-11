import React, { useState, useRef, createRef } from 'react'
import { AiOutlineCheckSquare, AiOutlineClose } from 'react-icons/ai'
import ReCAPTCHA from "react-google-recaptcha";

import emailjs from '@emailjs/browser';


function FormContact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [success, setSuccess] = useState(false);
  const [disable, setDisable] = useState(true);
  const [value, setValue] = useState(null);
  const form = useRef();
  const recaptchaRef = createRef();

  const handleInput = {
    name,
    email,
    subject
  }
  console.log(handleInput);

  const sendEmail = (e) => {

    if (value === null || (handleInput.Input === '' || handleInput.email === '' || handleInput.subject === '')) {
      e.preventDefault();
      console.log('Error!!!');
    }
    else {
      e.preventDefault();
      emailjs.sendForm('service_a3p1shz', 'template_tu9f9bl', form.current, 'gkNaELkMUbtR-0l5y')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      e.target.reset();
      recaptchaRef.current.reset();
      setDisable(true);
      setSuccess(true);
    }
  }

  const handleClick = () => {
    setSuccess(false);
  }

  const onChange = (value) => {
    // console.log('Captcha Value:', value)
    setValue(value);
    setDisable(!disable)
  }


  return (
    <form ref={form} onSubmit={sendEmail} className='contact__form w-full flex flex-col gap-2 text-xs'>
      {
        success &&
        <div className='border-b py-3 mb-4 flex items-center justify-between'>
          <div className='flex gap-2 items-center'>
            <AiOutlineCheckSquare className='text-xl text-green-500' />
            <span>Message sent successfully.</span>
          </div>
          <div className='px-5'>
            <button onClick={handleClick}><AiOutlineClose className='duration-200 hover:text-red-400' /></button>
          </div>
        </div>
      }
      <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} pattern="[a-zA-Z'-'\s]*" placeholder='Full Name' required></input>
      <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' placeholder='Email' required></input>
      <input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' required></input>
      <textarea name='message' rows={7} placeholder='Message' required></textarea>
      <div className='g-recaptcha'>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LcGJcMeAAAAAGDFViOFLToj1MTxEge1l7QyKkx2"
          onChange={onChange}
        />
      </div>
      <button type='submit' className='inline-block bg-purple-500 p-3 mt-3 tracking-widest duration-200 hover:bg-purple-700 disabled:bg-gray-300' disabled={disable}>SEND</button>
    </form>
  )
}


export default FormContact