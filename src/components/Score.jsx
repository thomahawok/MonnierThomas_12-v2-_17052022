import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 * Component - RadialChart Graph of todayScrore
 * @param {number} userScore - The score of the user
 * @returns {React.ReactElement} JSX.Element - Graph of score
 */
function Score({ userScore }) {
  const scorePercentage = [{ value: userScore * 100 }]
  const newScore = userScore * 100

  //return a percentage of the score
  return (
    <article className="score">
      <h2>Score</h2>

      <ResponsiveContainer width="100%" height={263}>
        <RadialBarChart
          data={scorePercentage}
          innerRadius={80}
          barSize={10}
          startAngle={80}
          endAngle={440}
          fill={'#FF0000'}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="value" cornerRadius={5} background />
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            fontSize="26"
            fontWeight="700"
            fill="black"
          >
            {newScore}%
          </text>
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="16"
            fill="gray"
            fontWeight="500"
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </article>
  )
}

Score.propTypes = {
  userScore: PropTypes.number,
}

export default Score
