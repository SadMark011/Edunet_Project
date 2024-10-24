import React,{useState} from 'react'

export default function SignUp() {
  const [userInfo,setUserInfo] = useState({
    userName:"",
    roll:"",
    branch:"",
    password:""
  });

  function handleInput(e) {
    // e.preventDefault();
    const elmname = e.target.name
    setUserInfo({...userInfo, [elmname]:e.target.value})
    
  }

  console.log(userInfo)

  function handleSubmit(e) {
    const p = fetch("http://localhost:3000/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(userInfo),
    });
    p.then((res) => {
      return res.json();
    }) 
    .then((data) => {
      console.log(data)
    })
  }
  
  return (
    <>
        UserName: <input type="text" name="userName" placeholder="UserName" onChange={handleInput}/><br/>
        Roll Number: <input type="text" name="roll" placeholder="Roll Number" onChange={handleInput}/><br/>
        Branch: <input type="text" name="branch" placeholder="Branch" onChange={handleInput}/><br/>
        Password: <input type="text" name="password" placeholder="Password" onChange={handleInput}/><br/>
        <button onClick={handleSubmit}>SignUp</button>
    </>
  )
}
