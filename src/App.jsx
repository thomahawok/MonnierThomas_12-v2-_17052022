//@ts-check
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import User from './pages/User'
import UserMocked from './pages/UserMocked'
import SideBar from './components/SideBar'
import Error from './pages/Error'

/**
 *
 * @returns {React.ReactElement} JSX.Element - the user main page with API data
 */

function App() {
  return (
    <Router>
      <Header />
      <section className="elementsToDisplay">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User/:id" element={<User />} />
          <Route path="/UserMocked/:id" element={<UserMocked />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </Router>
  )
}

export default App
