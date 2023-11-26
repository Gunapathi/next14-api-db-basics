'use client';

import Image from 'next/image'
import { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = async (e) => {

    e.preventDefault();

    try {
      
      const response = await fetch('/api/register', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (data['status'] == 200) {
        return data;
      }

      // CONSOLE DATA
      const data = response.json();
      console.log('data', data);

    } catch (err) {

      console.warn(err);
      console.error('Error sending email:' + err)

    }
  }

  return (
    <section>
      <h1 className='text-primary text-4xl text-center capitalize font-bold mb-4'>
        Register
      </h1>
      <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='submit'
        >Register</button>
        <div className='my-4 text-center text-gray-500'>
          Or Login with Provider
        </div>
        <button className='flex items-center justify-center py-2'>
          <Image
            src={'/images/google.png'}
            alt={'Google'}
            width={24}
            height={24}
            className='mr-3'
          />
          Login With Google</button>
      </form>
      <div>
      </div>
    </section>
  )
}

export default Register