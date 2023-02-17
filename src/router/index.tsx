import Login from '../view/Login/Login';
import Home from '../view/Home/Home'
import Violation from '../view/Violation/Violation'
import { createHashRouter } from 'react-router-dom'

const router = [
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'/home',
    element: <Home/>,
    children: [
      {
        path:'violation',
        element: <Violation/>
      },
    ]
  },
  
]

export default createHashRouter(router);