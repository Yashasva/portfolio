import React,{useState} from "react";
import emailjs from 'emailjs-com';
import apikey from "./apikey";

function Contact(props){

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    

    const emailHandler = event => {
        setEmail(event.target.value);
    }

    const subjectHandler = event =>{
        setSubject(event.target.value);
    }

    const messageHandler = event =>{
        setMessage(event.target.value);
    }

    const submitHandler = event =>{
        event.preventDefault();
        console.log(event);
        const mail = {
            email: email,
            subject: subject,
            message: message
        }

        emailjs.send(apikey.SERVICE_ID, apikey.TEMPLATE_ID, mail, apikey.USER_ID);

        setEmail('');
        setSubject('');
        setMessage('');

        console.log(mail);

        props.onSubmitForm(email);
    }

     return <form onSubmit={submitHandler}>
         <h3 className="contact-heading">CONTACT ME!</h3>
         <div className="form-input">
            <input type="text" placeholder="email" onChange={emailHandler} value={email}/>
         </div>
         <div className="form-input">
            <input type="text" placeholder="Subject" onChange={subjectHandler} value={subject}/>
         </div>
         <div className="form-input">
            <textarea type="text" placeholder="message" onChange={messageHandler} value={message}/>
         </div>
         <div>
             <button type="submit" className="btn">Send</button>
         </div>
     </form>
}

export default Contact;