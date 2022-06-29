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
        firstName: data.data.userInfos.firstName,
        userKey: data.data.keyData,
        userScore: data.data.todayScore,
      })
      setUserDataLoading(false)
    })
    getActivity({ id }).then((data) => {
      setUserActivity(data.data.sessions)
      setUserActivityLoading(false)
    })
    getAverageSession({ id }).then((data) => {
      setUserAverageSession(data.data.sessions)
      setUserAverageSessionLoading(false)
    })
    getPerformance({ id }).then((data) => {
      setUserPerformance(data.data.data)
      setUserPerformanceLoading(false)
    })
  }, [id])

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
