export const SET_FIRSTNAME = 'SET_FIRSTNAME';

const changeFirstName = (value, state) => {
    // update object and return it
    const updatedFirstName = {
        firstName: value
    }

    return {...state, ...updatedFirstName};
  };

 const reducer = (state, action) => {
    switch(action.type) {
        case SET_FIRSTNAME: 
            return changeFirstName(action.firstName, state);
        default: return state;    
    }
  };

  export default reducer;