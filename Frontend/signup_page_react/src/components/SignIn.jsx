import React,{ useState } from 'react'

export default function SignIn() {
  const [userInput,setUserInput] = useState({
    userName:"",
    password:""
  })

  const [resData,setResData] = useState({
    ok:"",
    msg:""
  })

  function handleInput(e) {
    e.preventDefault();
    const elemname = e.target.name;
    setUserInput({...userInput,[elemname]:e.target.value});

  }


  function handleSubmit() {
    const p = fetch("http://localhost:3000/signin", {
      method:"POST",
      body: JSON.stringify(userInput),
      headers: {
        'Content-Type':"application/json"
      }
    });
    p.then((res) => {
      return res.JSON
    })
    p.then((data) => {
      setResData(data)
      console.log(data)
    })
  }
  
  return (
    <>
      UserName: <input 
                    type="text" 
                    name="userName" 
                    placeholder="UserName" 
                    onChange={handleInput}/> 
      <br/>
      Password: <input 
                    type="text" 
                    name="password" 
                    placeholder="Password" 
                    onChange={handleInput}/>
      <br/>
      
      <button onClick={handleSubmit}>SignIn</button>

      <h3>Welcome {resData.ok == 1? userInput.userName:" "}</h3>
    </>
  )
}