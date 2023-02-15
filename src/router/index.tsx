import Login from '../view/Login/Login';
import Home from '../view/Home/Home'
import Violation from '../view/Violation/Violation'

const router = [
  {
    path:'/',
    key:'login',
    element: <Login/>
  },
  {
    path:'/home',
    key: 'home',
    element: <Home/>,
    children: [
      {
        path:'/violation',
        key: 'violation',
        element: <Violation/>
      },
    ]
  },
  
]

export default router;