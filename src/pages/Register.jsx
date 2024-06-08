import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import React from 'react'

function Register() {
  const { login, register } = useKindeAuth();
  return (
    <div className='flex gap-8'>
      <button className='btn btn-primary' onClick={register} type="button">Register</button>
      <button className='btn btn-primary' onClick={login} type="button">Log In</button>
    </div>
  )
}

export default Register
