import React, {Component} from 'react';
import Context from './context';

class GlobalState extends Component {

    state = {
        firstName: 'some name'
      };
    
      changeFirstName = value => {
        this.setState({firstName: value});
      };

    render() {
        return (
            <Context.Provider value={{
                firstName: this.state.firstName,
                changeFirstName: this.changeFirstName
              }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default GlobalState;