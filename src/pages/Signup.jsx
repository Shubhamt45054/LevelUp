import React from 'react'
import Template from '../Components/Template.jsx'
import signupImg from './assets/sign.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join millions in their journey of growth with LevelUp for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Jobs to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
