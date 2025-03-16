import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavbarComponent from './Home/NavbarComponent'
import FrontPage from './Home/FrontPage'
import About from './About/About'
import CartItem from './Store/CartItem'

const router=createBrowserRouter([
{
  path:"/",
  element:<div><NavbarComponent/>
  <FrontPage/></div>
},
{
  path:"/store",
  element:<div>
    <NavbarComponent/>
    <CartItem/>
  
  </div>
},
{
  path:'/About',
  element:<div>
<NavbarComponent/>
<About/>
  </div>
},


])
const App = () => {

  return (
    <div>
  <RouterProvider router={router}/>

    </div>
  )
}

export default App
