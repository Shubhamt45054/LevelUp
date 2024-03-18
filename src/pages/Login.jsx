import React from 'react'
import loginImg from './assets/sign.png'
import Template from '../Components/Template.jsx'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome Back"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Jobs to future-proof your career."
    image={loginImg}
    formType="login"
    setIsLoggedIn={setIsLoggedIn}
  />
  )
}

export default Login