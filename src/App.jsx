import GoogleButton from './GoogleButton'
import './index.css'
// import inputFields from './inputFields'

function FormCard() {
  return (
    <div className='container mx-auto flex justify-center'>
      <div className='absolute top-[14rem]'>
        <div className='w-[27rem] h-[30rem] bg-slate-500 rounded-lg'>
          <form action="App.jsx" method="post" className='flex flex-col'>
            <div>
              <div className='flex justify-center'>
                <input type="text" name='E-mail' placeholder='E-mail' className='mt-14 w-3/4 rounded-lg bg-white text-center py-2 font-bold border-2 border-black' />
              </div>
              <div className='flex justify-center'>
                <input type="password" name='Password' placeholder='Password' className='mt-14 w-3/4 rounded-lg bg-white text-center py-2 font-bold border-2 border-black' />
              </div>
            </div>
            <div className="flex justify-center mt-5 text-white font-bold">
              <div className='flex flex-row'>
                <p className="pr-2">See password?</p>
                <input type="checkbox" id="Check1" className='' />
              </div>
            </div>
            <p className="mt-5 underline underline-offset-2 flex justify-center text-white font-bold">Forgot Password?</p>
            <GoogleButton />
            <p></p>
          </form>
        </div>
      </div>
    </div >

  )
}

export default FormCard
