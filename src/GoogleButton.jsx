import './index.css'

export default function GoogleButton() {
    return (
        <div className='flex justify-center mt-14'>
            <button className='bg-white border-2 border-black rounded-lg w-2/4'>
                <div className='flex flex-row items-center justify-center'>
                    <img srcSet='googleIcon.png' className='h-[3rem] w-[3rem]' />
                    <p className='font-bold text-black'>Google</p>
                </div>
            </button>
        </div>
    )
}