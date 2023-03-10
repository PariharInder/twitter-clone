import { redirect } from 'react-router-dom'
import logo from '../assets/twitter-logo.svg'

export const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen dark:bg-neutral-900'>
            <div>
                <img src={logo} alt='twitter clone logo' className='mx-auto w-1/5' />
                <div className='flex flex-col justify-center items-center'>
                    <p className='my-5 text-white font-extralight'>Welcome back</p>
                    <div className='flex flex-col'>
                    <input type="text" placeholder='Username' className='my-1 rounded-full py-1 px-4 placeholder:text-neutral-500 text-neutral-800 active:border-none' />
                    <input type="email" placeholder='Password' className='my-1 rounded-full py-1 px-4 placeholder:text-neutral-500 text-neutral-800 active:border-none'/>
                    <div className='flex items-center justify-between mx-2'>
                        <div className='mr-8'>
                            <input type="checkbox" name="remember-me" id="remember-me" className='mr-2'/>
                            <label htmlFor="checkbox" className='text-gray-300 font-extralight italic'>Remember me</label>
                        </div>
                        <a href="/#"  className='text-gray-300 font-extralight italic underline'>Forgot Password?</a>
                    </div>
                    <button className=' text-white bg-blue-500 rounded-full py-2 my-5 hover:bg-blue-400 font-bold'>Log In</button>
                    <a href='./signup' className=' text-white text-center bg-gray-800 rounded-full py-2 my-5 hover:bg-gray-700 font-bold'>Not a member yet?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}