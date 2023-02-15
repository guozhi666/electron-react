import { useNavigate } from 'react-router-dom';
import './menu.css'

function Menu() {
  const navigate = useNavigate()
  function toViolation() {
    navigate('/home/violation')
  }
  return (
    <>
      <div className="menu_wrapper">
        <div className='menu_title'>违章通知单系统</div>
        <div>
          <div onClick={toViolation}>to Violation</div>
        </div>
      </div>
    </>
  )
}

export default Menu;