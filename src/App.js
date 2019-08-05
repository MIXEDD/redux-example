import React from 'react';
import Example from './components/Example';
import ExampleFC from './components/ExampleFC';
import './App.css';
import ExampleContext from './components/ExampleContext';
import GlobalStateFC from './context/GlobalStateFC'; 
import ExampleContextFC from './components/ExampleContextFC';
import Form from './components/Form/Form';

// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <GlobalState>
//           <ExampleContext/>
//         </GlobalState>
      
//       </div>
//     );
//   }
// }

const App = props => {

  const submit = (values) => {
    console.log(values);
  };

  return (
      <div className="App">
        {/* <GlobalStateFC>
          <ExampleContextFC/>
        </GlobalStateFC> */}

        <Form/>
      
      </div>
  );
}

export default App;
