// import { Carousel } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

export default class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <img src='http://lorempixel.com/output/cats-q-c-640-480-2.jpg' />
        <img src='http://lorempixel.com/output/cats-q-c-640-480-2.jpg' />
        <img src='http://lorempixel.com/output/cats-q-c-640-480-2.jpg' />
      </Carousel>
    );
  }
}