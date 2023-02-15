import { useNavigate, useSearchParams, useLocation, Outlet } from 'react-router-dom'
import { Button } from 'antd'
import { useStore } from 'react-redux';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import './home.css'

function Home() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();


  // @ts-ignore
  const userInfo = useStore().getState().userInfo.userName

  console.log('location', location);
  console.log('searchParams', searchParams.get('id'), searchParams.get('name'))
  function routeBack() {
    navigate(-1)
  }
  return (
    <>
      <div className='home_wrapper'>
        <Menu></Menu>
        <div className='home_info'>
          <Header></Header>
          <div className='home_body'>
            <h2>你好 {userInfo}</h2>
            <Button type='primary' onClick={routeBack}>Back Btn</Button>
            <Outlet />
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default Home