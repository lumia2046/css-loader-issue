import fetch from 'isomorphic-fetch'
import commonTableData from './jsonData/commonTable.json'


export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const CHANGE_MENUSTATE = 'CHANGE_MENUSTATE'
export const SET_HASH_URL = 'SET_HASH_URL'
const requestData = () => ({
  type:REQUEST_DATA
})

const receiveData = (data,columns,pagination) => ({
  type:RECEIVE_DATA,
  data,
  columns,
  pagination
})


export const getCommonTableDataByPage = (url,pageSize=5,current=1,columns) => {
  return dispatch => {
    if(commonTableData){
      let data = commonTableData.data;
      let pagination = {total:commonTableData.total,current:current,pageSize:pageSize}
      dispatch(requestData());
      dispatch(receiveData(data,columns,pagination));
    } 

  }
}


export const changeMenuState = (index) => {
  let menuState = [false,false,false,false,false,false,false,false]
  menuState[index] = true
  return {
    type:CHANGE_MENUSTATE,
    data:menuState
  }
}

export const setHashUrl = (hashUrl) => {
  
  return {
    type:SET_HASH_URL,
    data:hashUrl
  }
}
