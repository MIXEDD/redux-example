import React, {useContext, useEffect} from 'react';
import Context from '../context/context';
import Rainbow from '../hoc/rainbow';

const ExampleContextFC = props => {

    const context = useContext(Context);


        // return (
        //     <Context.Consumer>
        //         {context => (
        //                     <div>
        //                         <p>{context.firstName}</p>
        //                         <button onClick={() => context.changeFirstName(Math.random())}>Change</button>
        //                     </div>
        //         )}

        //     </Context.Consumer>
        // );
        
        return(
        <div>
            <p>{context.firstName}</p>
            <button onClick={() => context.changeFirstName(Math.random())}>Change</button>
         
        </div>
        );
}

export default Rainbow(ExampleContextFC);