import React from 'react'
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  return (
    
    <div className=' main_container z-10 sticky left-0 right-0 px-5 py-5 lg:px-10 flex justify-between item-center'>
      <p className='font=bold text-lg'>SPATHA TASK MANAGER</p>
      <div className='flex ie-center gap'> 

        <div className="logo">
      <Avatar>7</Avatar>
      </div>
      <div  style={{ 
      backgroundColor: "#2c3e50", 
      padding: "15px", 
      color: "white" 
    }} className='nav_list_ditails'><ul style={{display:'flex', justifyContent:'space-around',listStyle:'none'}}className="nav-links">
        <li>Home</li>
        <li>Orders</li>
        <li>Contact</li>
      </ul></div>

      </div>

    </div>
  )
}

export default Navbar
