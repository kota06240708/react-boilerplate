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

const params = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SimpleSwiper = () => (
  <div>
    <Slider {...params}>
      <Slides>Slide 1</Slides>
      <Slides>Slide 2</Slides>
      <Slides>Slide 3</Slides>
    </Slider>
  </div>
);
export default SimpleSwiper;
