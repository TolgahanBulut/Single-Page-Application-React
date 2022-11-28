import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'
import "./index.css"

function DashboardLayout() {
  return (

    <div>
        <Menu />
        <header>
            <h1>React Rooter Header</h1>
        </header>
        <div id='content'>
            <Outlet /> 
        </div>
        <footer>
          <div className='footer'>
          <h1>React Rooter Footer</h1>

          </div>
        </footer>
        
    </div>
  )
}

export default DashboardLayout