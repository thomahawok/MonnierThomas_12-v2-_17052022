import React from 'react'
import { Link } from 'react-router-dom'
//import SideBar from '../components/SideBar'
/**
 * HOME PAGE
 * @returns {JSX}
 */
function Home() {
  return (
    <section className="homeSection">
      <Link exact className="homeSection__userNav__link" to="UserMocked/12">
        User Mock 12
      </Link>
      <Link exact className="homeSection__userNav__link" to="UserMocked/18">
        User Mock 18
      </Link>
      <Link exact className="homeSection__userNav__link" to="User/12">
        User API 12
      </Link>
      <Link exact className="homeSection__userNav__link" to="User/18">
        User API 18
      </Link>
    </section>
  )
}

export default Home
