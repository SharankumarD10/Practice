import React, { useState , useNavigate} from 'react'
import './Login.css';
function Login() {
   
  document.title="Login/signup page";
    const[Username, setUsername] = useState('');
    const[Password, setPassword] = useState('');
    const[Errorr, setErrorr] = useState(false);

    const nav = useNavigate();
    const navlogin=()=>{
      nav("/Home")
    }
    const formhandler=(event)=>{

      if(Username.length==0 && Password.length==0)
      {
        setErrorr(true);
        alert("Enter the GODDAMN Details!!")
      }
      
      if(Username&&Password)
      {

        const loginObj = {
          name:Username,
          pwd:Password
        }
        console.log(loginObj);
        alert(JSON.stringify(loginObj));
      }
    }

  return (
    <div>Login<hr/>
    <h3>SIGNUP/LOGIN</h3>

    <form className='formed' onSubmit={formhandler}>
      
      Username: <input type="text" value={Username} placeholder="Enter Your Name" onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
      Password: <input type="password" value={Password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/><br/><br/><br/>
      
      <button onClick={navlogin}>Login</button>  <br/>
      
    </form>
    </div>
  )
}

export default Login