import React, {Component} from 'react';
import * as actions from '../store/actions/index';
import {connect} from 'react-redux';


class Example extends Component{

    componentDidMount() {
        this.props.firstExample('Maksimilian');
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