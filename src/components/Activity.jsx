//@ts-check

import {
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 * Component - BarChart Graph of Daily activity
 * @param {object} userActivity user's physical activity data
 * @returns {React.ReactElement} JSX.Element - physical activity chart
 */
function Activity({ userActivity }) {
  /**
   *
   * @param {string} value
   * @returns chart legend "Poids" and "Calories brulées"
   */

  function legendValue(value) {
    return <span className="dailyActivity__value">{value} </span>
  }

  return (
    <article className="dailyActivity">
      <h2>Activité quotidienne</h2>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={userActivity}
          margin={{ top: 0, right: 0, left: 10, bottom: 50 }}
        >
          <CartesianGrid
            strokeDasharray="2 2"
            stroke="#DEDEDE"
            horizontal={true}
            vertical={false}
          />

          <XAxis
            dataKey="day"
            tick={{ fill: '#9B9EAC', fontSize: '14', fontWeight: 500 }}
            tickLine={false}
            tickSize={16}
            stroke="#DEDEDE"
          />

          <YAxis
            yAxisId={0}
            dataKey="kilogram"
            stroke="#9B9EAC"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontSize: '14', fontWeight: 500 }}
            domain={['dataMin - 1', 'dataMax + 2']}
          />
          <YAxis
            yAxisId={1}
            // @ts-ignore
            ataKey="calories"
            hide={true}
            domain={['dataMin - 100', 'dataMax + 100']}
          />

          <Tooltip
            itemStyle={{
              color: 'white',
              fontSize: 10,
              fontWeight: 500,
            }}
            formatter={(value, name, unit) => [value, unit]}
            labelStyle={{ display: 'none' }}
            contentStyle={{
              backgroundColor: '#E60000',
            }}
          />

          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            height={47}
            formatter={legendValue}
          />

          <Bar
            yAxisId={0}
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[5, 5, 0, 0]}
            unit=" kg"
            name="Poids (kg)"
          />

          <Bar
            yAxisId={1}
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[5, 5, 0, 0]}
            unit=" Kcal"
            name="Calories brûlées (kCal)"
          />
        </BarChart>
      </ResponsiveContainer>
    </article>
  )
}

Activity.propTypes = {
  userActivity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ).isRequired,
}

export default Activity
