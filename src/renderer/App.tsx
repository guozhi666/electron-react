import { Route,Routes,HashRouter} from 'react-router-dom';
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd';
import {Provider} from 'react-redux';
import store  from '../redux/redux';
// import router from '../router/index';
import './App.css';
import Login from '../view/Login/Login';
import Home from '../view/Home/Home'
import Violation from '../view/Violation/Violation'

const renderEmpty =() =>{
	return <div className="renderEmpty">
		{/* <img alt="" src={noData } /> */}
		<p>暂无数据</p>
	</div>
}

export default function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN} renderEmpty={renderEmpty}>
        <HashRouter>
          <Routes>
            {/* {router.map((item:any,index:number) => <Route path={item.path} element={item.element} key={index} />)} */}
            {/* {router.map((item:any,index:number) => {
              if (item.children && item.children.length > 0) {
                return item.children.map((m:any, n:number) => <Route path={m.path} element={m.element} key={index} />)
              } else {
                return <Route path={item.path} element={item.element} key={index} />
              }
            })} */}
            <Route path='/login' element={<Login></Login>}/>
            <Route path='/home' element={<Home></Home>}>
              <Route path='violation' element={<Violation></Violation>}></Route>
            </Route>
          </Routes>
        </HashRouter>
      </ConfigProvider>
    </Provider>
  );
}
