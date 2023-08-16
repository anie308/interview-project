import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logobg from '../assets/loginBg.jpg'

function Login() {
  return (
    <div className={`h-[630px] flex `}>
        <div className='w-full lg:w-[40%] bg-gray-100 h-full p-[20px] lg:px-[80px] flex flex-col items-start lg:items-start justify-center lg:justify-center'>
            <p className='text-[20px] lg:text-[40px] font-roboto font-[700] '>Weve Missed You</p>
            <p className='text-[16px] lg:text-[20px] font-roboto font-[400] '>Kindly signin and get first access to the very best, community and unlock more opportunities.

</p>
            <div className='mt-[20px] w-full flx flex-col space-y-[10'>
            <div className='w-full'>
                <p>Email</p>
                <input type="email" className='h-[45px] w-full outline-none border border-black rounded-[5px] mt-[8px] px-[10px] bg-white' />
            </div>
            <div className='w-full'>
                <p>Password</p>
                <input type="password" className='h-[45px] w-full outline-none border border-black rounded-[5px] mt-[8px] px-[10px] bg-white' />
            </div>
            <div className='w-full mt-[20px]'>
                <button className='bg-primary w-full font-roboto text-white h-[45px] rounded-[5px]'>Login</button>
            </div>
            </div>
            <div className='mt-[30px]'>
                <div>
                    <Link href='/' className='font-roboto text-[16px]'>
                        Forgot Username or password?
                    </Link>
                </div>
                <div>
                    <Link href='/' className='font-roboto text-[16px] '>
                        Dont have an account? <span className='text-primary '>SignUp</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className='hidden lg:flex lg:w-[60%] bg-gray-300'>
            <div>
            <Image src={logobg} alt='login-img' />
            </div>
        </div>
    </div>
  )
}

export default Login