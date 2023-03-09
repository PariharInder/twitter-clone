import logo from '../assets/twitter-logo.svg'

export const Home = () => {
    return (
        <div className='flex justify-center items-center h-screen dark:bg-neutral-900'>
            <div className='p-10 rounded-xl flex items-center'>
                <div>
                    <img src={logo} alt='twitter clone logo' className='mx-auto w-2/5 m-10' />
                    <h2 className='text-3xl text-center text-white mb-4 font-extrabold'>Don't miss what's happening</h2>
                    <div className='mt-4 flex justify-center'>
                        <a href="#" className='m-4 py-2 px-4 bg-blue-500 text-white rounded-full shadow-2xl hover:bg-blue-400 font-bold'>Login</a>
                        <a href="/signup" className='m-4 py-2 px-4 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-200 font-bold'>SignUp</a>
                    </div>
                </div>
            </div>
        </div>
    )
}