//rafce
import React from 'react'
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function Home(){
return <h1>This is my Home Page</h1>
}
function About(){
 return <h1>This is my About page</h1>
}
function Contact(){
return <h1>This is my Contact Page</h1>
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      </BrowserRouter>
      <Routes>
        <Route path="/" elemen={<Home/>}/>
        <Route path="/About" elemen={<About/>}/>
        <Route path="/Contact" elemen={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App