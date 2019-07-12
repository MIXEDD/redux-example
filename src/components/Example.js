import React, {Component} from 'react';
import * as actions from '../store/actions/index';
import {connect} from 'react-redux';


class Example extends Component{

    state = {
        someState: 'string',
    };

    promiseExample = time => new Promise((resolve,reject) => {
         setTimeout(() => {resolve('success')}, time);
    });

    promiseExample2 = _ => {
        return new Promise((resolve) => {resolve('promiseExample2')});
    };

    promiseExample3 = _ => {
        return new Promise((resolve) => {resolve('prmiseExample3')});
    };


    componentDidMount() {
        this.promiseExample2().then((onResolve) => {
            console.log(onResolve);
            return this.promiseExample3();
        }).then((onResolve) => {
            console.log(onResolve);
        });
    }

    render() {
        return (
            <div>
                <p>{this.props.firstName}</p>
            </div>
        );
    }
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

export default connect(mapStateToProps, mapDispatchToProps) (Example);