import React from 'react'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import About from './Components/About/About'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'

import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
    <div>
     <Router>
       <Header></Header>

       <Routes>
         
       <Route exact path='/' element={<Home />}>
         </Route>

         <Route exact path='/home' element={<Home />}>
         </Route>

         <Route exact path='/services' element={<Services />}>
         </Route>

         <Route exact path='/about' element={<About />}>
         </Route>

<Route exact path='/login' element={<Login />}></Route>
<Route exact path='/contact' element={<Contact />}></Route>
       

       </Routes>


     </Router>
    </div>
  )
}

export default App
