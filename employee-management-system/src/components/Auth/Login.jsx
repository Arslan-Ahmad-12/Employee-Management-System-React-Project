import React, { useState } from 'react'

const Login = () => {
    
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');

    const submitHandler = (e) => {
       e.preventDefault()

       setEmail("");
       setPassword("");

    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600' >
                <form onSubmit={(e) => {
                   submitHandler(e)
                 }}
                className='flex flex-col items-center justify-center p-20'>
                    <input type="email"
                        required
                        placeholder='enter your email'
                        className='border-2 border-emerald-600 rounded-full py-4 px-5 text-xl text-white outline-none bg-transparent mt-3'
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}

                    />
                    <input type="password"
                        placeholder='enter password'
                        className='border-2 border-emerald-600 rounded-full py-4 px-5 text-xl text-white outline-none bg-transparent mt-3'
                        value={password}
                        required
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                    />
                    <button
                        className='mt-5 border-2 border-none bg-emerald-600 rounded-full py-4 px-20 text-xl text-white outline-none bg-transparent '
                    >Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
