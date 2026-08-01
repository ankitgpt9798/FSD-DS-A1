import React from 'react'
import Card from './components/Card'


const App = () => {
  return (
    <div>
      <Card name="Alice" studentclass="B-Tech DS B" year="3rd Year"/>
      <Card name="Amit" studentclass="B-Tech DS A" year="2rd Year"/>
      <Card name="Aryan" studentclass="B-Tech DS C" year="1rd Year"/>
    </div>
  )
}

export default App