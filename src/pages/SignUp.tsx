import { useState } from 'react'
import { emailsignup } from '../services/emailsignup'
import logo from '../assets/twitter-logo.svg'
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {

    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const navigator = useNavigate()

    const handleSignUp = () => {
        if(password==confirmPassword) {
            emailsignup(email, password, username)
            navigator('/feed')
        }
    }

    return (
        <div className='flex justify-center items-center h-screen dark:bg-neutral-900'>
            <div>
                <img src={logo} alt='twitter clone logo' className='mx-auto w-1/5' />
                <div className='flex flex-col justify-center items-center'>
                    <p className='my-5 text-white font-extralight'>Sign Up</p>
                    <div className='flex flex-col'>
                    <input type="text" placeholder='Username' className='my-1 rounded-full py-1 px-4 placeholder:text-neutral-500 text-neutral-800 active:border-none' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <input type="email" placeholder='Email' className='my-1 rounded-full py-1 px-4 placeholder:text-neutral-500 text-neutral-800 active:border-none' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='Password' className='my-1 rounded-full py-1 px-4 placeholder:text-neutral-500 text-neutral-800 active:border-none' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <input type="password" placeholder='Confirm Password' className='my-1 rounded-full py-1 px-4 placeholder:text-neutral-500 text-neutral-800 active:border-none' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <button className=' text-white bg-blue-500 rounded-full py-2 my-5 hover:bg-blue-400 font-bold' onClick={(e)=>handleSignUp()}>Sign Up</button>
                    <button className=' text-white bg-red-500 rounded-full py-2 my-5 hover:bg-red-400 font-bold'>Sign Up using Google</button>
                    <a href='./login' className='text-center text-white bg-gray-800 rounded-full py-2 my-5 hover:bg-gray-700 font-bold'>Already a member ?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}