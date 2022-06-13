//@ts-expect-error
import axios from 'axios'

/**
 * get USER_MAIN_DATA from API
 * @async
 * @param {String} {id} - The user id.
 * @return {Promise<UserInfos>} The data from the URL.
 */

export async function getUserData({ id }) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${id}`)
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

/**User information
 * @typedef {Object} UserInfos
 * @param {String} firstName
 * @param {String} lastName
 * @param {Number} age
 */

/**
 * get USER_ACTIVITY from API
 * async
 * @param {String} {id} - The user id.
 * @return {Promise<UserActivity>} The data from the URL.
 */
export async function getActivity({ id }) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/activity`
    )
    return response.data.data.sessions
  } catch (error) {
    console.error(error)
  }
}

/**
 * User activity
 * @typedef {Object} UserActivity
 * @param {String} day
 * @param {Number} kilogram
 * @param {Number} calories
 */

/**
 * get USER_AVERAGE_SESSIONS from API
 * async
 * @param {String} {id} - The user id.
 * @return {Promise<UserAverageSessions>} The data from the URL.
 */
export async function getAverageSession({ id }) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/average-sessions`
    )
    return response.data.data.sessions
  } catch (error) {
    console.error(error)
  }
}
/**
 * User average-sessions
 * @typedef {Object} UserAverageSessions
 * @param {Number} day
 * @param {Number} sessionLength
 */

/**
 * get USER_PERFORMANCE from API
 * @param {String} {id} - The user id.
 * @return {Promise<UserPerformance>} The data from the URL.
 */
export async function getPerformance({ id }) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/performance`
    )
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * User performance
 * @typedef {Object} UserPerformance
 * @param {Number} value
 * @param {Number} kind
 */
