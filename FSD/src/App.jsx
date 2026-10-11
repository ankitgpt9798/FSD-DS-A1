import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import login from '../src/components/login'
// import AdminDashboard from './pages/AdminDashboard'
// import UserDashboard from './pages/UserDashboard'

const App= () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<login/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/user' element={<UserDashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
