//@ts-check
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 * Component - RadarChart Graph of performance
 * @param {Object[]}  userPerform - The different types of performances
 * @param {number}  userPerform[].value - Performance values
 * @param {string}  userPerform[].kind - Types of performances
 * @returns {React.ReactElement} JSX.Element - Graph of performance
 */

function Perform({ userPerform }) {
  // REPLACE NUMBER DATA BY GOOD LABEL
  const kindName = [
    'Intensité',
    'Vitesse',
    'Force',
    'Endurance',
    'Energie',
    'Cardio',
  ]
  for (let i = 0; i < 6; i++) {
    userPerform[i].kind = kindName[i]
  }

  return (
    <article className="perform">
      <ResponsiveContainer width="100%" height={263}>
        <RadarChart data={userPerform} cx="50%" cy="50%" outerRadius="65%">
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickSize={10}
            tick={{
              fill: 'white',
              fontSize: 10,
              fontWeight: 500,
              y: 200,
            }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  )
}

Perform.propTypes = {
  userPerform: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ).isRequired,
}

export default Perform
