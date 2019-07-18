import React, {Component} from 'react';
import Context from '../context/context';

class Example extends Component{

    static contextType = Context;

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

        console.log(this.context);

        this.promiseExample2().then((onResolve) => {
            console.log(onResolve);
            return this.promiseExample3();
        }).then((onResolve) => {
            console.log(onResolve);
        });
    }

    render() {
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
            <p>{this.context.firstName}</p>
            <button onClick={() => this.context.changeFirstName(Math.random())}>Change</button>
        </div>
        );
    }
}

export default Example;