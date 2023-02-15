import Login from '../view/Login/Login';
import Home from '../view/Home/Home'
import Violation from '../view/Violation/Violation'
import { RouteObject } from '../utils/interfaceType'

const router:RouteObject[] = [
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

export default router;