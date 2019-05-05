import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { countUp, countDown } from '../actions/count';
import Button from './button';
import { getCountState } from '../selectors';
import { app, appCount, appNumber, appCounts } from './style.sass';

class App extends Component {
  render() {
    const { count, countUp, countDown } = this.props;
    const buttonName = {
      plus: '+',
      minus: '-'
    };

    const buttonColor = {
      green: 'green',
      red: 'red'
    };

    return (
      <div className={app}>
        <p className={appNumber}>{count}</p>
        <div className={appCount}>
          <div className={appCounts}>
            <Button
              name={buttonName.plus}
              onCount={countUp}
              color={buttonColor.green}
            />
          </div>
          <div className={appCounts}>
            <Button
              name={buttonName.minus}
              onCount={countDown}
              color={buttonColor.red}
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

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      countUp,
      countDown
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
