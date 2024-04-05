
import React from 'react'
import {Outlet} from 'react-router-dom'
import Sdebar from './Sdebar'

function Dashboard() {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <Sdebar/>
        <Outlet/>
    </div>
  )
}

export default Dashboard