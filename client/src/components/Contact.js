import React from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'

const ContactContainer = styled.div`
  
  width: 40%;
  
  padding: 60px 30% 60px 30%;
  
  @media (max-width: 500px) {
    width: calc(100% - 6 * ${props => props.theme.padding.lr});
    padding: 60px calc(3 * ${props => props.theme.padding.lr});
  }

  

  background: ${props => props.theme.colours.darkPrimary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    width: 100%;
    padding-top: 0px;
    font-size: 50px;
    color: ${props => props.theme.colours.lightPrimary};
  }

  > p {
    line-height: 1.5;
    width: 100%;
    padding-top: 15px;
    font-size: 17px;
    color: ${props => props.theme.colours.lightPrimary};
  }

`

const FormContainer = styled.form`

  
  
  width: 100%;

  padding: 20px 0 40px 0;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
  > button {
    font-weight: 500;
    height: 50px;
    width: 30%;
    
    

    margin: 10px 0 0 0;

    border: 2px solid ${props => props.theme.colours.lightPrimary};
    outline: none;

    border-radius: 19px;

    transition: all 0.3s ease;

    cursor: pointer;
    
    background-color: white;

    @media (max-width: 500px) {
      width: 100%;

    }
    


    &:hover {
      
      //transform: scale(1.07);
      transform: translateY(-7px);

    }
    
    


  }

  > #message {
    > textarea {
      height: 150px;
    }
  }




`

const FormInputContainer = styled.div`

  position: relative;
  
  width: calc(100% - 10px);

  > p {
    color: ${props => props.theme.colours.lightPrimary};
    font-size: 15px;
    font-weight: bold;
    
    > span {
      position: absolute;
      top: -7px;
      display: none;
      color: ${props => props.theme.colours.secondary};
      font-weight: lighter;
    }
    
  }

  > input, textarea {
    resize: none;
    padding: 5px 5px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    height: 30px;
    // border: 2px solid ${props => props.theme.colours.lightPrimary};
    outline: none;
    border-radius: 5px;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 17px;
    background: ${props => props.theme.colours.lightPrimary};
    
    &::placeholder {
      color: black;
    }
    
  }
  

`

export default function Contact () {
  
  
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [button, setButton] = React.useState('Send Message')
  
  
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  const submitEmail = (e) => {
    e.preventDefault()
    
    if (validateEmail(e.target.email.value) && e.target.name.value && e.target.message.value) {
      emailjs.sendForm("service_s9q2xdl",
        "nunc_template",
        e.target,
        "user_VzMT9JXmLsbS2ElAGFGwp",
      ).
      then(result => {
        setButton('Message Sent');
          
          setTimeout(() => {
            setName('');
            setEmail('');
            setMessage('');
            setButton('Send Message')
          }, 5000)
        })
    } else {
      if (!validateEmail(e.target.email.value)) { document.getElementById("emailerror").style.display = 'inline'; }
      if (!e.target.name.value) { document.getElementById("nameerror").style.display = 'inline'; }
      if (!e.target.message.value) { document.getElementById("messageerror").style.display = 'inline'; }
      setTimeout(() => {document.getElementById("emailerror").style.display = 'none';}, 5000)
      setTimeout(() => {document.getElementById("nameerror").style.display = 'none';}, 5000)
      setTimeout(() => {document.getElementById("messageerror").style.display = 'none';}, 5000)
      
    }
  }
  
  return (
    <ContactContainer id={'contact'}>
      <h2>Contact Us</h2>
      <p>We're always eager to hear about the projects you're working on, whether you know you want to live stream, or you just want to know more about it, reach out and we can help find a solution for you.</p>
      
      <FormContainer onSubmit={submitEmail}>
        <FormInputContainer>
          {/*<p>Name</p>*/}
          <p><span id={"nameerror"}><i>*It'd be nice to know who you are!</i></span></p>
          <input placeholder={"Name"} name={'name'} type='text' value={name} onChangeCapture={(e) => setName(e.target.value)} />
        </FormInputContainer>
        
        <FormInputContainer>
          <p><span id={"emailerror"}><i>*Please enter a valid email!</i></span></p>
          <input placeholder={"Email"} name='email' type='text' value={email} onChangeCapture={(e) => setEmail(e.target.value)}/>
        </FormInputContainer>
        
        <FormInputContainer id={'message'}>
          {/*<p>Message</p>*/}
          <p><span id={"messageerror"}><i>*Didn't you want to say anything?</i></span></p>
          <textarea placeholder={'Your message'} name={'message'} value={message} onChangeCapture={(e) => setMessage(
  e.target.value)}/>
        </FormInputContainer>
        
        <button>{button}</button>
      </FormContainer>
    </ContactContainer>
  )
  
}