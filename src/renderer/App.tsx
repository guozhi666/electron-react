import { Route, Routes, HashRouter} from 'react-router-dom';
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd';
import {Provider} from 'react-redux';
import {
  GuardConfigProvider,
  GuardedRoute,
  GuardedRoutes,
  GuardMiddleware,
  GuardProvider,
  GuardedRouteObject,
  useGuardedRoutes,
} from 'react-router-guarded-routes'
import store  from '../redux/redux';
// import Routes from '../router/index';
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
// import WithGuarde from '../components/WithGuarde/WithGuarde'

const renderEmpty =() =>{
	return <div className="renderEmpty">
		{/* <img alt="" src={noData } /> */}
		<p>暂无数据</p>
	</div>
}

// const logGuard: GuardMiddleware = (to, from, next, route) => {
//   console.log(to, from) // to Location (see react-router), from Location.
//   console.log(route) // the GuardedRouteObject.
//   // run the next middleware.
//   next()
// }

// const guards = [logGuard]

const routes: GuardedRouteObject[] = [
  { path: '/', element: <div>foo</div> },
  {
    path: '/bar/*',
    element: <div>bar</div>,
    children: [{ path: '/bar/baz', element: <div>baz</div> }],
  },
]
console.log('rrr');



export default function App() {

  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN} renderEmpty={renderEmpty}>
        <HashRouter>
        <Routes>
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
