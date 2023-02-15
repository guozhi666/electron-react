import { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/actions';
import { login } from '../../api/index'
import { formatImg } from '../../utils/index';
import './login.css'

function Login() {
  const navigate  = useNavigate()
  const dispatch = useDispatch();
  const form = Form.useForm()[0];
  const formItemStyle = {color:'black',backgroundColor:'white',borderColor:'blueSkye'}

  const [codeImg,setCodeImg] = useState('');
  const [uuid,setUuid] = useState('');
  useEffect(() =>{
    setImgSrc();
  },[]);
  const setImgSrc = () =>{
    console.log('验证码')
    login.captchaImage({type:'math'}).then((respone:any)=>{
      if(respone){
          setCodeImg(formatImg(respone));
          setUuid(respone.uuid);  
      }
    })
  }

  const getLabel = (text:string) =>{
    const style= {color:'#74d8fe',fontSize:14,fontWeight:500};
    return <label style={style}>{text}</label>;
  }

  const toHome = () =>{
    //获取用户名密码
    form.validateFields().then(rep =>{
      rep.uuid = uuid;
      // login.login(rep).then((res:any) => {

      // }) 
      dispatch(updateUser({
        userName: '用户名',
        nickName: '昵称'
      }))
      localStorage.setItem('TOKEN', 'token')
      navigate('/home?id=1&name=test')
    })
  }

  return (
    <>
      <div className='login_wrapper'>
        <div className='login_form'>
          <Form
            name="basic"
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 15}}
            initialValues={{ username:'admin',password:'123456',code:'1' }}
            form={form}
            colon={false}
          >
            <Form.Item 
              label={<h3>账号登录</h3>} 
              labelCol={{ offset: 2}} 
            ></Form.Item>
            <Form.Item
              label={getLabel('用户名:')}
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input 
                autoComplete="off" 
                placeholder="请输入用户名"
                allowClear
                style={formItemStyle}
              />
            </Form.Item>

              <Form.Item
                label={getLabel('密码:')}
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password 
                  placeholder="请输入密码" 
                  autoComplete={''}
                  iconRender={visible => (visible ? <EyeTwoTone style={{color:'#b0b8db'}}/> : <EyeInvisibleOutlined style={{color:'#b0b8db'}} />)}
                  style={formItemStyle}
                />
              </Form.Item>
              <Form.Item 
                  label={getLabel('验证码:')}
              >
                <Form.Item 
                    name="code"  
                    noStyle
                    rules={[{ required: true, message: '请输入验证码!' }]}
                    style={{display:'inline-block'}}
                >
                    <Input 
                        style={{...formItemStyle,width:100,marginRight:8}} 
                        placeholder="请输入验证码" 
                        autoComplete="off"  
                        allowClear
                    />
                </Form.Item>
                <Form.Item style={{display:'inline-block',marginBottom:0,marginTop:'10px'}}>
                    <img src={codeImg} alt="图形验证码" style={{width:80,height:32,objectFit:'cover'}} onClick={() =>setImgSrc()} />
                </Form.Item>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 2, span: 20 }}>
              <Button type="primary" htmlType="submit" onClick={toHome} style={{width:'100%'}}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Login