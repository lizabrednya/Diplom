// Define actions
export const handleLoggin = () => {
  return{
      type: "SIGN_IN"
  }
}
  
// Define reducer
export const loggedReducer = (state=false, action: any) => {
    switch(action.type){
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
}

export const handleTheme = () => {
  return{
      type: "CHANGE"
  }
}

export const themeReducer = (state=false, action: any) => {
  switch(action.type){
      case 'CHANGE':
          return !state;
      default:
          return state;
  }
}