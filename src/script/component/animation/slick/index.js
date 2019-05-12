// @flow
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { TweenLite } from 'gsap';

const Slides = styled.div`
  width: 180px;
  height: 180px;
  color: #fff;
  margin-left: 20px;
  transform: translateX(60px);
`;

const SlidesInner = styled.div`
  width: 180px;
  height: 180px;
  background-color: #000;
  color: #fff;
`;

let SliderWrapDom = null;
let SliderDom = null;

const params = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // 1フレーム時に表示する数
  slidesToScroll: true, // スワイプの真偽
  variableWidth: true,

  /**
   * スライド時に発火
   * @param {number} - 現在何番目のスライドか返す
   */
  afterChange: e => {
    console.log(e);
    // console.log(SliderDom);

    const current = SliderWrapDom.querySelector('.slick-current');
    const lists = SliderWrapDom.querySelectorAll('.slick-slide');

    for (var i = 0; i < lists.length; i++) {
      if (!lists[i].classList.contains('slick-current')) {
        TweenLite.to(lists[i], 0.5, {
          opacity: 1
        });
      } else {
        console.log('ok');
      }
    }

    TweenLite.to(current, 0.5, {
      opacity: 0,
      onComplete: () => console.log('test')
    });
  },

  /**
   * スライド時に発火
   * @param {number} - 前回何番目のスライドか返す
   */
  // beforeChange: e => {
  //   console.log(e);
  // },

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
    <div
      ref={el => {
        SliderWrapDom = el;
      }}
    >
      <Slider
        ref={el => {
          SliderDom = el;
        }}
        {...params}
      >
        <Slides className="lists">
          <SlidesInner style={{ background: 'url(/assets/assets_img_1.jpg) center center no-repeat' }} />
        </Slides>
        <Slides className="lists">
          <SlidesInner style={{ background: 'url(/assets/assets_img_2.jpg) center center no-repeat' }} />
        </Slides>
        <Slides className="lists">
          <SlidesInner style={{ background: 'url(/assets/assets_img_3.jpg) center center no-repeat' }} />
        </Slides>
        <Slides className="lists">
          <SlidesInner style={{ background: 'url(/assets/assets_img_4.jpg) center center no-repeat' }} />
        </Slides>
        <Slides className="lists">
          <SlidesInner style={{ background: 'url(/assets/assets_img_3.jpg) center center no-repeat' }} />
        </Slides>
        <Slides className="lists">
          <SlidesInner style={{ background: 'url(/assets/assets_img_4.jpg) center center no-repeat' }} />
        </Slides>
        <Slides className="lists">
          <SlidesInner style={{ background: 'url(/assets/assets_img_3.jpg) center center no-repeat' }} />
        </Slides>
        <Slides className="lists">
          <SlidesInner style={{ background: 'url(/assets/assets_img_4.jpg) center center no-repeat' }} />
        </Slides>
      </Slider>
    </div>
  </div>
);
export default SimpleSwiper;
