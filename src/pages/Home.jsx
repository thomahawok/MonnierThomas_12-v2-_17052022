//@ts-check

import React from 'react'
import { Link } from 'react-router-dom'

/**
 * links to user pages based on data type (mocked or retrieve from API)
 * @returns {React.ReactElement} JSX.Element - Link to user page
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
