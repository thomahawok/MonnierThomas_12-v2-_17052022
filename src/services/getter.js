import { useState, useEffect } from 'react'
import {
  getUserData,
  getActivity,
  getAverageSession,
  getPerformance,
} from './service'

export function GetDatas(id) {
  const [userData, setUserData] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [userAverageSession, setUserAverageSession] = useState([])
  const [userPerformance, setUserPerformance] = useState([])
  const [userDataLoading, setUserDataLoading] = useState(true)
  const [userActivityLoading, setUserActivityLoading] = useState(true)
  const [userAverageSessionLoading, setUserAverageSessionLoading] =
    useState(true)
  const [userPerformanceLoading, setUserPerformanceLoading] = useState(true)

  useEffect(() => {
    getUserData({ id }).then((data) => {
      setUserData({
        firstName: data.userInfos.firstName,
        userKey: data.keyData,
        userScore: data.todayScore,
      })
      setUserDataLoading(false)
    })
    getActivity({ id }).then((data) => {
      setUserActivity(data)
      setUserActivityLoading(false)
    })
    getAverageSession({ id }).then((data) => {
      setUserAverageSession(data)
      setUserAverageSessionLoading(false)
    })
    getPerformance({ id }).then((data) => {
      setUserPerformance(data.data)
      setUserPerformanceLoading(false)
    })
  }, [id])

  console.log(userData)
  console.log(userActivity)
  console.log(userAverageSession)
  console.log(userPerformance)

  return {
    userData,
    userActivity,
    userAverageSession,
    userPerformance,

    userDataLoading,
    userActivityLoading,
    userAverageSessionLoading,
    userPerformanceLoading,
  }
}
/*
const userFirstnameData = userData.data.userInfos.firstName
const userScoreData = userData.data.todayScore
const userKeyData = userData.data.keyData

const userActivityData = userActivity.data.sessions
const userAverageSessionData = userAverageSession.data.sessions

const userPerformanceData = userPerformance.data.data

const userDataLoading = userData.isLoading
const userActivityLoading = userActivity.isLoading
const userAverageSessionLoading = userAverageSession.isLoading
const userPerformanceLoading = userPerformance.isLoading
*/
