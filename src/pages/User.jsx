import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  getUserData,
  getActivity,
  getAverageSession,
  getPerformance,
} from '../services/service'

import SideBar from '../components/SideBar'
import UserHello from '../components/UserHello'
import Activity from '../components/Activity'
import AverageSessions from '../components/AverageSessions'
import Perform from '../components/Perform'
import Score from '../components/Score'
import Nutrients from '../components/Nutrients'

//import { Oval } from 'react-loader-spinner'

/**
 * USER PAGE
 * @returns {JSX}
 */

function User() {
  const { id } = useParams()

  const [userData, setUserData] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [userAvergeSession, setUserAvergeSession] = useState([])
  const [userPerformance, setUserPerformance] = useState([])

  /**
   * Function used to get datas from the API and stores it in the states
   * @param {Number} id
   */

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
  }, [])

  return (
    <>
      <SideBar />
      {userData === [] || userData.userFirstName == undefined ? (
        <div>
          <p>Chargement du prénom...</p>
        </div>
      ) : (
        <UserHello userFirstName={userData.userFirstName} />
      )}

      {userActivity === [] ? (
        <div>
          <p>Chargement du rapport d'activité quotidienne...</p>
        </div>
      ) : (
        <Activity userActivity={userActivity} />
      )}

      {userAvergeSession === [] ? (
        <div>
          <p>Chargement ddes durées moyennes de sessions...</p>
        </div>
      ) : (
        <AverageSessions userSessionAverage={userAvergeSession} />
      )}

      {userData === [] || userData.todayScore == undefined ? (
        <div>
          <p>Chargement du score...</p>
        </div>
      ) : (
        <Score userScore={userData.todayScore} />
      )}

      {userData === [] || userData.keyData == undefined ? (
        <div>
          <p>Chargement des donnés d'alimentation...</p>
        </div>
      ) : (
        <Nutrients userKeyData={userData.keyData} />
      )}

      {userPerformance === [] || userPerformance.data == undefined ? (
        <div>
          <p>Chargement des données de performances...</p>
        </div>
      ) : (
        <Perform userPerform={userPerformance.data} />
      )}
    </>
  )
}

export default User
