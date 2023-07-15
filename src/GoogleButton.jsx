import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig';
import './index.css';
import google from './assets/googleIcon.png';

export default function Googlebutton() {
    const handleGoogle = async () => {
        const provider = await new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
    return (
        <div className='flex justify-center'>
            <button className='bg-white border-2 border-black rounded-lg w-2/4' onClick={handleGoogle}>
                <div className='flex flex-row items-center justify-center'>
                    <img srcSet={google} className='h-[3rem] w-[3rem]' />
                    <p className='font-bold text-black'>Google</p>
                </div>
            </button>
        </div>
    )
}
