import React from 'react'
import Card from './components/Card'
import Nav from './components/Navbar'

const App = () => {
  return (
    <div>
      <div className='navbar'>
        <Nav />
      </div>
      <div className = 'card'>
        <h1>Ayush Meena </h1>
        <p> lorem100 ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
        </p>

      </div>
      <Card />
    </div>
  )
}

export default App