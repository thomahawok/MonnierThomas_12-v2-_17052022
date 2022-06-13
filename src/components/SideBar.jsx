//@ts-check
import { NavLink } from 'react-router-dom'
import yoga from '../assets/yoga.svg'
import natation from '../assets/natation.svg'
import cycle from '../assets/cycle.svg'
import force from '../assets/force.svg'

/**
 * Component - SideBar
 * @returns {React.ReactElement} JSX.Element - SideBar component
 */
function SideBar() {
  /**
   * Logos
   * @param {yoga} yoga // yogaLogo
   * @param {natation} natation// natationaLogo
   * @param {cycle} cycle// cycleLogo
   * @param {force} force// forceLogo
   */
  return (
    <nav className="sideNav">
      <NavLink className="sideNav__link" to="/">
        <img className="nav__logo" src={yoga} alt="yoga" />
      </NavLink>
      <NavLink className="sideNav__link" to="">
        <img className="nav__logo" src={natation} alt="natation" />
      </NavLink>
      <NavLink className="sideNav__link" to="">
        <img className="nav__logo" src={cycle} alt="cycle" />
      </NavLink>
      <NavLink className="sideNav__link" to="">
        <img className="nav__logo" src={force} alt="force" />
      </NavLink>
      <p>Copiryght, SportSee 2020</p>
    </nav>
  )
}

export default SideBar
