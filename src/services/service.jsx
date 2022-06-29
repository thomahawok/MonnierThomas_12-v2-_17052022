import axios from 'axios'

/**
 * get USER_MAIN_DATA from API
 * @param {Number} id
 * @returns Object
 */

export async function getUserData({ id }) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * get USER_ACTIVITY from API
 * @param {Number} id
 * @returns Object
 */
export async function getActivity({ id }) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/activity`
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * get USER_AVERAGE_SESSIONS from API
 * @param {Number} id
 * @returns Object
 */
export async function getAverageSession({ id }) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/average-sessions`
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * get USER_PERFORMANCE from API
 * @param {Number} id
 * @returns Object
 */
export async function getPerformance({ id }) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/performance`
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}
