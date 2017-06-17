import {
  CHANGE_MENUSTATE
} from '../actions'


const menuState = (state={data:[false,false,false,false,false,false,false,true]},action) => {
  switch (action.type) {
    case CHANGE_MENUSTATE:
      return {...state,data:action.data}
    default:
      return state
  }
  
}

export default menuState;
