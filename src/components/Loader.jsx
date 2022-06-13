//@ts-check
/**
 * Component - Loader
 * @returns {React.ReactElement} JSX.Element - loader element
 */

function Loader() {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader
