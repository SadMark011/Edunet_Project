import React from 'react'

export default function SignUp() {
  return (
    <>
        UserName: <input type="text" name="username" placeholder="UserName"/><br/>
        Roll Number: <input type="text" name="roll" placeholder="Roll Number"/><br/>
        Branch: <input type="text" name="branch" placeholder="Branch"/><br/>
        Password: <input type="text" name="password" placeholder="Password"/><br/>
        <button>SignUp</button>
    </>
  )
}
