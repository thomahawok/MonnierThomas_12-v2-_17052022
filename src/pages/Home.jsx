//@ts-check

import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Link to user page
 * @returns JSX.Element
 */
function Home() {
  return (
    <section className="homeSection">
      <Link className="homeSection__userNav__link" to="UserMocked/12">
        User Mock 12
      </Link>
      <Link className="homeSection__userNav__link" to="UserMocked/18">
        User Mock 18
      </Link>
      <Link className="homeSection__userNav__link" to="User/12">
        User API 12
      </Link>
      <Link className="homeSection__userNav__link" to="User/18">
        User API 18
      </Link>
    </section>
  )
}

export default Home
