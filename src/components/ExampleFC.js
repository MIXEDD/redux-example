import React, {useState, useEffect} from 'react';
import * as actions from '../store/actions/index';
import {connect} from 'react-redux';
import ChildComponent from './ChildComponent';
import useTest from '../hooks/useTest';

function ExampleFC(props) {

    const [someState, setSomeState] = useState('string');
    const test = useTest('newly updated', []);
    
    const promiseExample = time => new Promise((resolve,reject) => {
         setTimeout(() => {resolve('success')}, time);
    });

    const promiseExample2 = _ => {
        return new Promise((resolve) => {resolve('promiseExample2')});
    };

    const promiseExample3 = _ => {
        return new Promise((resolve) => {resolve('prmiseExample3')});
    };

    useEffect(() => {
        promiseExample2().then((onResolve) => {
          
            return promiseExample3();
        }).then((onResolve) => {
            
        });
    }, [someState]);

    // will launch on component unmount
    useEffect(() => {
        return () => {
            // console.log('cleanup');
        }
    }, []);

    // on firstName props update (via Redux)
    useEffect(() => {
        // console.log('firstName updated');
    }, [props.firstName]);

    useEffect(() => {
        // console.log('props updated');
    }, [props]);

    const updateState = () => {
        setSomeState(Math.random());
    };

    const updateFirstname = () => {
        props.firstExample(Math.random());
    };

        return (
            <div>
                <ChildComponent firstName={someState} />
                <p>{props.firstName}</p>
                <p>{test}</p>
                <button onClick={updateState}>updateState</button>
                <button onClick={updateFirstname}>update firstName</button>
            </div>
        );
}

const mapStateToProps = state => {
    return {
        firstName: state.firstName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        firstExample: (firstName) => dispatch(actions.firstExample(firstName))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ExampleFC);