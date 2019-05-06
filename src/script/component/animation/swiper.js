// @flow
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Slides = styled.div`
  width: 100%;
  height: 100px;
  background-color: #000;
  color: #fff;
`;

let SliderDom = null;

const params = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // 1フレーム時に表示する数
  slidesToScroll: true, // スワイプの真偽

  /**
   * スライド時に発火
   * @param {number} - 現在何番目のスライドか返す
   */
  afterChange: e => {
    console.log(e);
    console.log(SliderDom);
  },

  /**
   * スライド時に発火
   * @param {number} - 前回何番目のスライドか返す
   */
  beforeChange: e => {
    console.log(e);
  },

  // ページネーションを変更できる。
  customPaging: e => {
    return <button> {e + 1} </button>;
  },

  /**
   * スワイプ時に発火
   * @param {string} - スワイプした方向を返す。
   */
  onSwipe: e => {
    console.log(e);
  }
};

const SimpleSwiper = () => (
  <div>
    <button
      onClick={e => {
        e.preventDefault();
        SliderDom.slickNext();
      }}
    >
      次に進む
    </button>
    <button
      onClick={e => {
        e.preventDefault();
        SliderDom.slickPrev();
      }}
    >
      前に進む
    </button>
    <button
      onClick={e => {
        e.preventDefault();
        SliderDom.slickPause();
      }}
    >
      自動を再生停止
    </button>
    <button
      onClick={e => {
        e.preventDefault();
        SliderDom.slickPlay();
      }}
    >
      自動を再生開始
    </button>
    <Slider
      ref={el => {
        SliderDom = el;
      }}
      {...params}
    >
      <Slides>Slide 1</Slides>
      <Slides>Slide 2</Slides>
      <Slides>Slide 3</Slides>
    </Slider>
  </div>
);
export default SimpleSwiper;
