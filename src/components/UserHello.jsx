import PropTypes from 'prop-types'
/**
 * Function that returns the Welcome Title in Profil Page
 * @param {string} userFirstName // Name's user
 * @returns {React.ReactElement} JSX.Element - user's presentation
 */

function UserHello({ userFirstName }) {
  return (
    <article className="userHello">
      <h1>
        Bonjour <span>{userFirstName}</span>
      </h1>
      <p>
        Félicitation ! Vous avez explosé vos objectifs hier
        <span role="img" aria-label="icon">
          👏
        </span>
      </p>
    </article>
  )
}

UserHello.propTypes = {
  userFirstName: PropTypes.string.isRequired,
}

export default UserHello
