import "./index.css"

export default function inputFields() {
    return (
        <div>
            <div className='flex justify-center'>
                <input type="text" name='E-mail' placeholder='E-mail' className='mt-14 w-3/4 rounded-lg bg-white text-center py-2 font-bold border-2 border-black' />
            </div>
            <div className='flex justify-center'>
                <input type="password" name='Password' placeholder='Password' className='mt-14 w-3/4 rounded-lg bg-white text-center py-2 font-bold border-2 border-black' />
            </div>
        </div>
    )
}
