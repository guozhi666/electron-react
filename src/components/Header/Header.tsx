import { useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, KeyOutlined, LogoutOutlined } from '@ant-design/icons'
import './header.css'

function Header() {
  const stateInfo:any = useStore().getState()
  const navigate = useNavigate()

  const userInfo = stateInfo.userInfo

  function logOut() {
    navigate('/login')
  }

  return (
    <>
      <div className='header_wrapper'>
        <div className='header_left'></div>
        <div className='header_right'>
          <div className='user_nickname'>{userInfo.nickName || '请登录'}</div>
          <div className='user_option_list'>
            <div className='option_item'><UserOutlined /><span>个人中心</span></div>
            <div className='option_item'><KeyOutlined /><span>修改密码</span></div>
            <div className='option_item logOut' onClick={logOut}><LogoutOutlined /><span>退出登录</span></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header