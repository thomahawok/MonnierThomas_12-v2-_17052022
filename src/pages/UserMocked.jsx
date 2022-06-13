//@ts-check
import React from 'react'
import { useParams } from 'react-router-dom'
import UserHello from '../components/UserHello'
import Activity from '../components/Activity'
import AverageSessions from '../components/AverageSessions'
import Perform from '../components/Perform'
import Score from '../components/Score'
import Nutrients from '../components/Nutrients'

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../datas/mockedUsersDatas'
/**
 * MOKED USER PAGE
 * @returns {React.ReactElement} JSX.Element - the user main page with mocked data
 */

function UserMocked() {
  const { id } = useParams()
  const idNum = parseInt(id, 10)

  const user = USER_MAIN_DATA.findIndex(function (item) {
    return idNum === item.id
  })

  const userFirstName = USER_MAIN_DATA[user].userInfos.firstName
  const userActivity = USER_ACTIVITY[user].sessions
  const userSessionAverage = USER_AVERAGE_SESSIONS[user].sessions
  const userPerform = USER_PERFORMANCE[user].data
  const userScore = USER_MAIN_DATA[user].todayScore
  const userKeyData = USER_MAIN_DATA[user].keyData

  return (
    <section className="containerUser">
      <UserHello userFirstName={userFirstName} />
      <Activity userActivity={userActivity} />
      <AverageSessions userSessionAverage={userSessionAverage} />
      <Perform userPerform={userPerform} />
      <Score userScore={userScore} />
      <Nutrients userKeyData={userKeyData} />
    </section>
  )
}

export default UserMocked
