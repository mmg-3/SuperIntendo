import React from 'react'
import {Navbar} from './components'
import './components/css/app.scss'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
