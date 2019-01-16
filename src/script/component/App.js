import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { countUp, countDown } from '../actions/count';
import { createStructuredSelector } from 'reselect';
import Button from './button';
import { getCountState } from '../selectors';

class App extends Component {
    render() {
        const { count, countUp, countDown } = this.props;

        return (
            <div className="app">
                <p>{count}</p>
                <Button name="+" onCount={countUp} />
                <Button name="-" onCount={countDown} />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    count: getCountState
});

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(
            {
                countUp,
                countDown
            },
            dispatch
        )
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
