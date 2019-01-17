import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { countUp, countDown } from '../actions/count';
import { createStructuredSelector } from 'reselect';
import Button from './button';
import { getCountState } from '../selectors';
import { app, appCount, appNumber, appCounts } from './style.sass';

class App extends Component {
    render() {
        const { count, countUp, countDown } = this.props;
        const countColor = {
            green: 'green',
            red: 'red'
        };

        return (
            <div className={app}>
                <p className={appNumber}>{count}</p>
                <div className={appCount}>
                    <div className={appCounts}>
                        <Button
                            name="+"
                            onCount={countUp}
                            color={countColor.green}
                        />
                    </div>
                    <div className={appCounts}>
                        <Button
                            name="-"
                            onCount={countDown}
                            color={countColor.red}
                        />
                    </div>
                </div>
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
