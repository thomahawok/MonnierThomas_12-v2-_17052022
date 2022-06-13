//@ts-check
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo_sportsee.svg'

/**
 * Component - Header
 * @returns {React.ReactElement} JSX.Element - header component
 */

function Header() {
  return (
    <header>
      <nav className="nav">
        <Link to="/">
          <img className="nav__logo" src={logo} alt="SportSee logo" />
        </Link>

        <NavLink className="nav__menu__link" to="/">
          Accueil
        </NavLink>
        <NavLink className="nav__menu__link" to="">
          Profil
        </NavLink>
        <NavLink className="nav__menu__link" to="">
          Réglage
        </NavLink>
        <NavLink className="nav__menu__link" to="">
          Communauté
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
