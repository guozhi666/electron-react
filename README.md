## 使用注意事项

### 路由相关内容

- 基础路由路由跳转：
```
import { useNavigate } from 'react-route-dom';

const navigate = useNavigate()

navigate('/home/xxx')
```

- 基础路由回退
```
import { useNavigate } from 'react-route-dom';

const navigate = useNavigate()

navigate(-1)
```


- 路由传参方法一 useSearchParams 
```
import { useNavigate, useSearchParams } from 'react-route-dom';

// 父组件
function toHome() {
  const navigate = useNavigate()
  navigate('/home?id=xxx&name=xxx')
}

// 子组件
function homePage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const id = searchParams.get('id');
  const name = searchParams.get('name');
}
```

- 路由传参方法二 useParams
```
import { Routes, Route, useParams } from 'react-router-dom';

// 组件页面
function ProfilePage() {
  // 通过Router前置定义userId字段，然后通过useParams方法获取字段内容
  let { userId } = useParams();
}

// 路由配置
function App() {
  return (
    <Routes>
      <Route path="users">
        <Route path=":userId" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
```

- 路由传参方法三 state传参
```
// 父组件
<div>
  <Link
    to="/home"
    state={
      id: 1,
      name: Test
    }
  >
</div>

// 子组件
import { useLocation } from 'react-router-dom
function Home() {
  const {state:{id, name}} = useLocation()
}
```