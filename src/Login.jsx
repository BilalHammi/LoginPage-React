import { Link } from "react-router-dom";
import Googlebutton from './Googlebutton';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './index.css'

export const Login = () => {
  const show = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  const auth = getAuth();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const SignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("You have Logged into your account!")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        console.log(errorMessage);
      });
  };
  return (
    <>
      <div className='container mx-auto flex justify-center'>
        <h1 className="text-black font-bold text-4xl mt-[7rem]">Login</h1>
        <div className='absolute top-[14rem]'>

          <div className='w-[27rem] h-[31rem] bg-slate-500 rounded-lg'>

            <div className="flex flex-col">
              <div>
                <div className='flex justify-center'>
                  <input type="text" name='E-mail' placeholder='E-mail' className='mt-14 w-3/4 rounded-lg bg-white text-center py-2 font-bold border-2 border-black' required onChange={(e) => setemail(e.target.value)}/>
                </div>
                <div className='flex justify-center'>
                  <input type="password" name='password' id="password" placeholder='Password' className='mt-12 w-3/4 rounded-lg bg-white text-center py-2 font-bold border-2 border-black' required onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div className='flex justify-center'>
                  <input type="submit" value="Submit" className='mt-10 w-3/4 rounded-lg bg-gray-600 text-center py-2 font-bold border-2 border-black hover:bg-black hover:text-white' onClick={SignIn} />
                </div>
              </div>
              <div className="flex justify-center mt-3 text-white font-bold">
                <div className='flex flex-row'>
                  <p className="pr-2">See password?</p>
                  <input type="checkbox" id="Check1" className='' onClick={show} />
                </div>
              </div>
              <p className="mt-3 underline underline-offset-2 flex justify-center text-white font-bold">Forgot Password?</p>
              <div>
                <p className="mt-4 flex justify-center text-white font-bold">Dont have an account
                  <Link to="/register" className="text-blue-400 font-bold ml-2 underline underline-offset-2">Click here!</Link></p>
              </div>
              <div className="flex">
                <p className="w-full text-center my-2 bg-blue px-1 font-bold">Or</p>
              </div>
              <Googlebutton />
            </div> 
          </div>
        </div>
      </div >

    </>
  );
};

export default Login;
