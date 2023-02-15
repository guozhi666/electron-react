import { combineReducers } from 'redux';
import { UPDATE_USER } from './actions';

const userInfo = (state:any={nickName:'',userName:''},action:any) =>{
  switch(action.type){
      case UPDATE_USER:
          return Object.assign({},state,{
              ...action.data
          })
      default:
          return state;
  }
}

const todoApps = combineReducers({
  userInfo,
});
export default todoApps;