import { NavLink } from 'react-router-dom'
import yoga from '../assets/yoga.svg'
import natation from '../assets/natation.svg'
import cycle from '../assets/cycle.svg'
import force from '../assets/force.svg'


/**
 * Component - SideBar
 * @param {yoga} // yogaLogo
 * @param {natation} // natationaLogo
 * @param {cycle} // cycleLogo
 * @param {force} // forceLogo
 * @returns {JSX}
 */
function SideBar() {
  return (
        <nav className="sideNav">
            <NavLink
              exact
              className="sideNav__link"
              to="/"
            >
              <img className="nav__logo" src={yoga} alt="yoga" />
            </NavLink>
            <NavLink
              exact
              className="sideNav__link"
              to=""
            >
              <img className="nav__logo" src={natation} alt="natation" />
            </NavLink>
            <NavLink
              exact
              className="sideNav__link"
              to=""
            >
              <img className="nav__logo" src={cycle} alt="cycle" />
            </NavLink>
            <NavLink
              exact
              className="sideNav__link"
              to=""
            >
              <img className="nav__logo" src={force} alt="force" />
            </NavLink>
            <p>Copiryght, SportSee 2020</p>
        </nav>
  )
}

export default SideBar
