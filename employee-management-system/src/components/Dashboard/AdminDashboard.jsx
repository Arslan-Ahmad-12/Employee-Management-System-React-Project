import React from 'react'
import Header from '../others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header />
      <div>
        <form className='flex items-start justify-between w-full bg-red-200'>
          <div className='w-1/2 '>
            <div>
              <h3>Task Title</h3>
              <input type="text" placeholder='Make a UI design' />
            </div>
            <div>
              <h3>Date</h3>
              <input type="date" name="" id="" />
            </div>
            <div>
              <h3>Asign to </h3>
              <input type="text" placeholder='employee name' />
            </div>
            <div>
              <h3>Category </h3>
              <input type="text" placeholder='design, dev , etc' />
            </div>
          </div>
          <div>
            <h3>Description</h3>
            <textarea cols="30" rows="10"></textarea>
          </div>

          <button>Create Taske</button>
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
