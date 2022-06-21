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
 * @param {Object[]} userActivity user's physical activity data
 * @param {String} userActivity[].day
 * @param {Number} userActivity[].kilogram
 * @param {Number} userActivity[].calories
 * @returns {React.ReactElement} JSX.Element - physical activity chart
 */
function Activity({ userActivity }) {
  const data = userActivity.map((item) => {
    return { ...item, day: item.day.split('')[9] }
  })

  return (
    <article className="dailyActivity">
      <h2>Activité quotidienne</h2>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          margin={{ top: 0, right: 0, left: 10, bottom: 50 }}
        >
          <CartesianGrid
            strokeDasharray="2 2"
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
            dataKey="calories"
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
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            height={47}
          />

          <Bar
            yAxisId={0}
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
            unit=" kg"
            name="Poids (kg)"
          />

          <Bar
            yAxisId={1}
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
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
