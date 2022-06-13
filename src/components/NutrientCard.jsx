//@ts-check
import PropTypes from 'prop-types'

/**
 * @param {{icon : string, value: number, nutrientType: string, classNameIcone: string }} props nutrient data
 * @returns {React.ReactElement} JSX.Element - all nutrient card
 */
function NutrientCard({ icon, value, nutrientType, classNameIcone }) {
  return (
    <div className={`nutrient ${nutrientType}`}>
      <div className={`nutrient__icon ${classNameIcone}`}>
        <img src={icon} alt="" className="macros-icon" />
      </div>
      <div className="nutrient__info">
        <h2>{value}</h2>
        <p>{nutrientType}</p>
      </div>
    </div>
  )
}

NutrientCard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  nutrientType: PropTypes.string.isRequired,
  classNameIcone: PropTypes.string.isRequired,
}

export default NutrientCard
