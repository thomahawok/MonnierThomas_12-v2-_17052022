import PropTypes from 'prop-types'
/**
 * Component Welcome Title in Profil Page
 * @param {string} props.userFirstName // Name's user
 * @returns {JSX}
 */

function UserHello({ userFirstName }) {
  //console.log(userFirstName.userInfos)

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
