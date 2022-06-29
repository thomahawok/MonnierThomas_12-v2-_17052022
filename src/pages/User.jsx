import { useParams } from 'react-router-dom'
import { useFetch, dataFormatting, GetDatas } from '../services/getter'
import UserHello from '../components/UserHello'
import Activity from '../components/Activity'
import AverageSessions from '../components/AverageSessions'
import Perform from '../components/Perform'
import Score from '../components/Score'
import Nutrients from '../components/Nutrients'
import Loader from '../components/Loader'

/**
 * Function that returns the user page
 * @returns {React.ReactElement} JSX.Element - the user main page with API data
 */

function User() {
  const { id } = useParams()

  const {
    userData,
    userActivity,
    userAverageSession,
    userPerformance,
    userDataLoading,
    userActivityLoading,
    userAverageSessionLoading,
    userPerformanceLoading,
  } = GetDatas(id)

  return (
    <section className="containerUser">
      {userDataLoading ? (
        <div className="userHello">
          <p>Chargement du prénom...</p>
          <Loader />
        </div>
      ) : userData.firstName === undefined ? (
        <div className="userHello">
          <p>Name no available</p>
        </div>
      ) : (
        <UserHello userFirstName={userData.firstName} />
      )}

      {userActivityLoading ? (
        <div className="dailyActivity">
          <p>Chargement du rapport d'activité quotidienne...</p>
          <Loader />
        </div>
      ) : userActivity === undefined ? (
        <div className="dailyActivity">
          <p>Activity no available</p>
        </div>
      ) : (
        <Activity userActivity={userActivity} />
      )}

      {userAverageSessionLoading || userAverageSession === undefined ? (
        <div className="averageSessions">
          <p>Chargement des durées moyennes de sessions...</p>
          <Loader />
        </div>
      ) : userAverageSession === undefined ? (
        <div className="averageSessions">
          <p>Average sessions no available</p>
        </div>
      ) : (
        <AverageSessions userSessionAverage={userAverageSession} />
      )}

      {userDataLoading || userData.userScore === undefined ? (
        <div className="score">
          <p>Chargement du score...</p>
          <Loader />
        </div>
      ) : userData.userScore === undefined ? (
        <div className="score">
          <p>Score no available</p>
        </div>
      ) : (
        <Score userScore={userData.userScore} />
      )}

      {userDataLoading || userData.userKey === undefined ? (
        <div className="nutrient">
          <p>Chargement des donnés d'alimentation...</p>
          <Loader />
        </div>
      ) : userData.userKey === undefined ? (
        <div className="nutrient">
          <p>Nutrients no available</p>
        </div>
      ) : (
        <Nutrients userKeyData={userData.userKey} />
      )}

      {userPerformanceLoading || userPerformance === undefined ? (
        <div className="perform">
          <p>Chargement des données de performances...</p>
          <Loader />
        </div>
      ) : userPerformance === undefined ? (
        <div className="perform">
          <p>Performances no available</p>
        </div>
      ) : (
        <Perform userPerform={userPerformance} />
      )}
    </section>
  )
}

export default User
