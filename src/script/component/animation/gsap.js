// @flow
import React, { Component, Fragment } from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax } from 'gsap';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 20px;
  font-size: 2rem;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

class Gsap extends Component {
  constructor(props) {
    super(props);
    this.myCard = null; // 文言のDOMを取得
    this.myCards = {}; // 複数のDOMを格納する

    this.myTween = new TimelineMax(); // tweenを格納
  }

  componentDidMount() {
    Object.keys(this.myCards).forEach(i => {
      this.myTween.from(this.myCards[i], 1, {
        y: 20,
        opacity: 0,
        delay: i * 0.008
      });
    });
  }

  render() {
    return (
      <Fragment>
        <Text
          ref={el => {
            this.myCard = el; // 一つだけを格納
            this.myCards[0] = el; // 順番を担保するやり方。
          }}
        >
          animation
        </Text>
        <Text
          ref={el => {
            this.myCards[1] = el; // 順番を担保するやり方。
          }}
        >
          animation02
        </Text>
        <Text
          ref={el => {
            this.myCards[2] = el; // 順番を担保するやり方。
          }}
        >
          animation03
        </Text>
      </Fragment>
    );
  }
}

export default GSAP()(Gsap);
