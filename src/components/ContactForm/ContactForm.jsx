import Button from '../Button/Button'
import './ContactForm.css'
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from 'react';

const ContactForm = () => {

  const [name, setName ]=useState("Sanjeev")
  const [email, setEmail]=useState("sanjeevcse2k23@gmail.com")
  const [text, setText]=useState("hello")

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value)  
    setEmail(event.target[1].value) 
    setText(event.target[2].value)  

    alert("Hi "+name+", Your Email: "+email+", Your Meaasage: "+text +" >Sumbimited");
  }



  return (
    <div className='contact-form-container main-container'>
        <div className="contact-form">
          <div className="upper-button">
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
            <Button text="VIA CALL" icon={<IoMdCall fontSize="24px" />} />
            </div>
            <Button 
            isOutline ={true}
            text="VIA EMAIL FORM" icon={<MdOutlineEmail fontSize="24px" />} />
    <form onSubmit={onSubmit} 
    action="">
      <div className="input-control">
      <label htmlFor="name">Name</label>
      <input type="text" name='name' />
      </div>
      <div className="input-control">
      <label htmlFor="email">E-Mail</label>
      <input type="email" name='email' />
      </div>
      <div className="input-control">
      <label htmlFor="name">TEXT</label>
      <textarea name='name' rows={7} />
      </div>
      <div className='submit-button' style={{display:"flex", justifyContent:"end"}} >
      <Button text="SUBMIT"  />
      </div>
    </form>
      <div>{"Hi "+name+", Your Email: "+email+", Your Meaasage: "+text +" >Sumbimited"}</div>
    
        </div>
        <div className="contact-img">
          <img src="/images/contact.svg" alt="contact-img" />
        </div>

    </div>
  )
}

export default ContactForm