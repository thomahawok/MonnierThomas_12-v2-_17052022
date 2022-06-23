import { useParams } from 'react-router-dom'
import { useFetch } from '../services/service'
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
  /*
  const [userData, setUserData] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [userAvergeSession, setUserAvergeSession] = useState([])
  const [userPerformance, setUserPerformance] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUserData({ id }).then((data) => {
      setUserData({
        userFirstName: data.userInfos.firstName,
        keyData: data.keyData,
        todayScore: data.todayScore,
      })
      setLoading(false)
    })
    getActivity({ id }).then((data) => {
      setUserActivity(data)
      setLoading(false)
    })
    getAverageSession({ id }).then((data) => {
      setUserAvergeSession(data)
      setLoading(false)
    })
    getPerformance({ id }).then((data) => {
      setUserPerformance(data)
      setLoading(false)
    })
  }, [id])
  */
  const userData = useFetch(`http://localhost:3000/user/${id}`)
  const userActivity = useFetch(`http://localhost:3000/user/${id}/activity`)
  const userAvergeSession = useFetch(
    `http://localhost:3000/user/${id}/average-sessions`
  )
  const userPerformance = useFetch(
    `http://localhost:3000/user/${id}/performance`
  )

  return (
    <section className="containerUser">
      {userData.isLoading || userData.data.userInfos.firstName === undefined ? (
        <div className="userHello">
          <p>Chargement du prénom...</p>
          <Loader />
        </div>
      ) : (
        <UserHello userFirstName={userData.data.userInfos.firstName} />
      )}

      {userActivity.isLoading ? (
        <div className="dailyActivity">
          <p>Chargement du rapport d'activité quotidienne...</p>
          <Loader />
        </div>
      ) : (
        <Activity userActivity={userActivity.data.sessions} />
      )}

      {userAvergeSession.isLoading || userAvergeSession === undefined ? (
        <div className="averageSessions">
          <p>Chargement des durées moyennes de sessions...</p>
          <Loader />
        </div>
      ) : (
        <AverageSessions userSessionAverage={userAvergeSession.data.sessions} />
      )}

      {userData.isLoading || userData.data.todayScore === undefined ? (
        <div className="score">
          <p>Chargement du score...</p>
          <Loader />
        </div>
      ) : (
        <Score userScore={userData.data.todayScore} />
      )}

      {userData.isLoading || userData.data.keyData === undefined ? (
        <div className="nutrient">
          <p>Chargement des donnés d'alimentation...</p>
          <Loader />
        </div>
      ) : (
        <Nutrients userKeyData={userData.data.keyData} />
      )}

      {userPerformance.isLoading || userPerformance.data === undefined ? (
        <div className="perform">
          <p>Chargement des données de performances...</p>
          <Loader />
        </div>
      ) : (
        <Perform userPerform={userPerformance.data.data} />
      )}
    </section>
  )
}

export default User
