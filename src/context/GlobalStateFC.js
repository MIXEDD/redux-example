import React, {useState, useReducer} from 'react';
import Context from './context';
import reducer, {SET_FIRSTNAME} from './reducers';

const GlobalStateFC = props => {

    // const [firstName, setFirstName] = useState('some val');
    const [state, dispatch] = useReducer(reducer, {firstName: 'some val'});
    
    const changeFirstName = value => {
        // setFirstName(value);
       
        dispatch({
            type: SET_FIRSTNAME,
            firstName: value
        });
      };
        return (
            <Context.Provider value={{
                firstName: state.firstName,
                changeFirstName: changeFirstName
              }}>
                {props.children}
            </Context.Provider>
        );
}

export default GlobalStateFC;