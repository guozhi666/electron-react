
export const UPDATE_USER='UPDATE_USER';

//用户信息更新
export const updateUser=(data:any) =>{
  return {
      type:UPDATE_USER,
      data
  }
}