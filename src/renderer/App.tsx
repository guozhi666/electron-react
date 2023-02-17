import { Route,Routes,HashRouter} from 'react-router-dom';
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd';
import {Provider} from 'react-redux';
import store  from '../redux/redux';
import router from '../router/index';
import './App.css';
import Login from '../view/Login/Login';
import Home from '../view/Home/Home'
import Violation from '../view/Violation/Violation'
import User from '../view/System/User/User'
import Role from '../view/System/Role/Role'
import Menu from '../view/System/Menu/Menu'
import Dept from '../view/System/Dept/Dept'
import Post from '../view/System/Post/Post'
import Dict from '../view/System/Dict/Dict'

const renderEmpty =() =>{
	return <div className="renderEmpty">
		{/* <img alt="" src={noData } /> */}
		<p>暂无数据</p>
	</div>
}

console.log('router', router);

export default function App() {

  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN} renderEmpty={renderEmpty}>
        <HashRouter>
          <Routes>
            {/* {router.map((item:any,index:number) => {
              if (item.children && item.children.length > 0) {
                item.children.map((m:any, n:number) => <Route path={m.path} element={m.element} key={index+'_'+n} />)
              } else {
                return <Route path={item.path} element={item.element} key={index} />
              }
            })} */}
            <Route path='/login' element={<Login></Login>}/>
            <Route path='/' element={<Home></Home>}>
              <Route path='violation' element={<Violation></Violation>}></Route>
              <Route path='system/user' element={<User></User>}></Route>
              <Route path='system/role' element={<Role></Role>}></Route>
              <Route path='system/menu' element={<Menu></Menu>}></Route>
              <Route path='system/dept' element={<Dept></Dept>}></Route>
              <Route path='system/post' element={<Post></Post>}></Route>
              <Route path='system/dict' element={<Dict></Dict>}></Route>
            </Route>
          </Routes>
        </HashRouter>
      </ConfigProvider>
    </Provider>
  );
}
