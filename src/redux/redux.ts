import { createStore  } from 'redux';
import todoApps from './reducers';
//创建redux store来存放应用的状态
export default createStore(todoApps)