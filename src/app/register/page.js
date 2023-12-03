'use client';

import Image from 'next/image'
import { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userCreated, setUserCreated] = useState(false)
  const [userCreatingUser, setUserCreatingUser] = useState(false)

  const handleFormSubmit = async (e) => {

    e.preventDefault();
    setUserCreatingUser(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      setUserCreatingUser(false);
      setUserCreated(true)

      if (response.status === 200) {
        setUserCreated(true);
        const data = await response.json();
        return data;
      } else {
        console.log('resonsose failed, Error: ' + response.statusText)
      }

    } catch (err) {

      console.warn(err);
      console.error('Error creating user:' + err);

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
          disabled={userCreatingUser}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='password'
          value={password}
          disabled={userCreatingUser}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='submit'
          disabled={userCreatingUser}
        >
          Register
        </button>
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
      {userCreated && (
        <div className='bg-green-500'>
          <span className='text-white text-xl'>
            User Registered
          </span>
        </div>
      )}
    </section>
  )
}

export default Register