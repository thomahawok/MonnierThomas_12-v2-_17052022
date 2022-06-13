//@ts-expect-error
import axios from 'axios'

/**
 * get USER_MAIN_DATA from API
 * @async
 * @param {string} {id} - The user id.
 * @return {Promise<object>} The data from the URL.
 */

export async function getUserData({ id }) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${id}`)
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

{"data":{"id":18,"userInfos":{"firstName":"Cecilia","lastName":"Ratorez","age":34},"todayScore":0.3,"keyData":{"calorieCount":2500,"proteinCount":90,"carbohydrateCount":150,"lipidCount":120}}}



/**
 * get USER_ACTIVITY from API
 * async
 * @param {string} {id} - The user id.
 * @return {Promise<object>} The data from the URL.
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
 * get USER_AVERAGE_SESSIONS from API
 * async
 * @param {string} {id} - The user id.
 * @return {Promise<object>} The data from the URL.
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
 * get USER_PERFORMANCE from API
 * @param {string} {id} - The user id.
 * @return {Promise<object>} The data from the URL.
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
