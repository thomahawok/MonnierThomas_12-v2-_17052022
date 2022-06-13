//@ts-check
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  getUserData,
  getActivity,
  getAverageSession,
  getPerformance,
} from '../services/service'

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
  /**
   *
   * @param {{keyData: object, todayScore: number,  userFirstName: string}}  userData - The informations of the user
   * @param {Object}  userData.keyData - The nutrients informations
   * @param {number}  userData.todayScore - User score
   * @param {string}  userData.userFirstName - User firstname
   */

  const { id } = useParams()
  const [userData, setUserData] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [userAvergeSession, setUserAvergeSession] = useState([])
  const [userPerformance, setUserPerformance] = useState([])

  useEffect(() => {
    getUserData({ id }).then((data) =>
      setUserData({
        userFirstName: data.userInfos.firstName,
        keyData: data.keyData,
        todayScore: data.todayScore,
      })
    )
    getActivity({ id }).then((data) => setUserActivity(data))
    getAverageSession({ id }).then((data) => setUserAvergeSession(data))
    getPerformance({ id }).then((data) => setUserPerformance(data))
  }, [id])

  return (
    <section className="containerUser">
      {userData === [] || userData.userFirstName === undefined ? (
        <div className="userHello">
          <p>Chargement du prénom...</p>
          <Loader />
        </div>
      ) : (
        <UserHello userFirstName={userData.userFirstName} />
      )}

      {userActivity.length === 0 ? (
        <div className="dailyActivity">
          <p>Chargement du rapport d'activité quotidienne...</p>
          <Loader />
        </div>
      ) : (
        <Activity userActivity={userActivity} />
      )}

      {userAvergeSession.length === 0 || userAvergeSession === undefined ? (
        <div className="averageSessions">
          <p>Chargement des durées moyennes de sessions...</p>
          <Loader />
        </div>
      ) : (
        <AverageSessions userSessionAverage={userAvergeSession} />
      )}

      {userData === [] || userData.todayScore === undefined ? (
        <div className="score">
          <p>Chargement du score...</p>
          <Loader />
        </div>
      ) : (
        <Score userScore={userData.todayScore} />
      )}

      {userData === [] || userData.keyData === undefined ? (
        <div className="nutrient">
          <p>Chargement des donnés d'alimentation...</p>
          <Loader />
        </div>
      ) : (
        <Nutrients userKeyData={userData.keyData} />
      )}

      {userPerformance === [] || userPerformance.data === undefined ? (
        <div className="perform">
          <p>Chargement des données de performances...</p>
          <Loader />
        </div>
      ) : (
        <Perform userPerform={userPerformance.data} />
      )}
    </section>
  )
}

export default User
