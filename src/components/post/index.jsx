import './styles.css'

export const Form = () =>{
return(
    <div className="containerform">
    <input className='input' id='nome' placeholder='Name'></input>
    <input className='input' id='lastname' placeholder='Last Name'></input>
    <input className='input' id='email' placeholder='Email Address'></input>
    <input className='input' id='password' placeholder='Password'></input>
    <input className='input' id='repetpassword' placeholder='Repeat Password'></input>
    
    <div className='button'>
      <p>CLAIM YOUR FREE TRIAL</p>
    </div>
    <p>By clicking the button. you are agreeing to our <a>Terms and Services</a></p>
  </div>
);
}