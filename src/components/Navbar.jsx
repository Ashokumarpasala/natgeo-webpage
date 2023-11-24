import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="d-flex justify-content-between" style={{backgroundColor:"black", color:"whitesmoke"}} >
        <div><img style={{width:"50%",}} src="https://greyboxcreativemain.b-cdn.net/wp-content/uploads/2020/01/National-Geographic-logo.jpg" alt="" /></div>
        <div className=' d-flex m-5 p-5'>
            <h1 style={{fontSize:"80px"}} className=' fw-bold mx-5'>Home</h1>
            <h1 style={{fontSize:"80px"}} className=' fw-bold mx-5'>About</h1>
            <h1 style={{fontSize:"80px"}} className=' fw-bold mx-5'>Animal Help-line</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
