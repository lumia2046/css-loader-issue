import {
  SET_HASH_URL
} from '../actions'



const hashUrl = (state={oldURL:'/',currentUrl:'/'},action) => {
  switch (action.type) {
    case SET_HASH_URL:
      return {...action.data}
    default:
      return state
  }
  
}

export default hashUrl;