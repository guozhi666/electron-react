import { useNavigate } from "react-router-dom"

function Violation() {
  const navigate = useNavigate()

  console.log('rrr');
  function routeBack() {
    navigate(-1)
  }
  return (
    <>
      <div>
        <div>违章通知单</div>
        <div onClick={routeBack}>
          back
        </div>
      </div>
    </>
  )
}

export default Violation