import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 * Component - LineChart Graph of session Longer
 * @param {object[]} userSessionAverage user’s average session data
 * @param {Number} userSessionAverage[].day Day of the week
 * @param {Number} userSessionAverage[].sessionLength Session duration
 * @returns {React.ReactElement} JSX.Element - average session chart
 */

function AverageSessions({ userSessionAverage }) {
  // REPLACE NUMBER DAY BY GOOD LABEL
  const weekdays = ['L ', 'M ', 'M ', 'J ', 'V ', 'S ', 'D ']

  return (
    <article className="averageSessions">
      <h2>Durée moyenne des sessions</h2>

      <ResponsiveContainer width="100%" height={263}>
        <LineChart
          data={userSessionAverage}
          margin={{
            top: 0,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            dot={false}
            strokeWidth={2}
            unit=" min"
          />

          <CartesianGrid stroke="transparent" />
          <XAxis
            tickLine={true}
            axisLine={true}
            tickMargin={50}
            tick={{
              fill: 'transparent',
              opacity: 0.5,
              // @ts-ignore
              AlignValue: 'right',
              fontSize: 50,
            }}
            padding={{ left: 0, right: 0 }}
            hide={true}
          />
          <YAxis hide={true} domain={['dataMin-30', 'dataMax+50']} />
          <text
            x="50%"
            y="95%"
            textAnchor="middle"
            fontSize="12"
            fontWeight="500"
            fill="white"
            opacity="0.5"
          >
            {weekdays}
          </text>

          <Tooltip
            itemStyle={{
              color: 'black',
              fontSize: 8,
              fontWeight: 500,
            }}
            formatter={(value, name, unit) => [value, unit]}
            labelStyle={{ display: 'none' }}
            cursor={{
              stroke: 'black',
              strokeOpacity: 0.1,
              strokeWidth: 60,
              height: 263,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  )
}

AverageSessions.propTypes = {
  userSessionAverage: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    })
  ).isRequired,
}

export default AverageSessions
