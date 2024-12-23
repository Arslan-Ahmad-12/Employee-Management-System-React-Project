import React from 'react'
import Header from '../others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
      <div>
        <form>
          <h3>Task Title</h3>
          <input type="text" placeholder='Make a UI design'/>
          <h3>Description</h3>
          <textarea cols="30" rows="10"></textarea>
          <h3>Date</h3>
          <input type="" name="" id="" />
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
