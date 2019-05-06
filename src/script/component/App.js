// @flow
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { countUp, countDown } from '../actions/count';
import { getCountState } from '../selectors';

import Button from './button';
import Gsap from './animation/gsap';
import Swiper from './animation/swiper';

type Props = {
  count: number,
  countUp: () => void,
  countDown: () => void
};

type State = {
  plus: string,
  minus: string
};

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;

class App extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      plus: '+',
      minus: '-'
    };
  }

  state: State;

  render() {
    const { count, countUp, countDown } = this.props;

    const buttonColor = {
      green: 'green',
      red: 'red'
    };

    return (
      <Fragment>
        <p>{count}</p>
        <ButtonWrap>
          <Button name={this.state.plus} onCount={countUp} color={buttonColor.green} />
          <Button name={this.state.minus} onCount={countDown} color={buttonColor.red} />
        </ButtonWrap>
        <Gsap />
        <Swiper />
      </Fragment>
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
