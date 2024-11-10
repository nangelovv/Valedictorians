import React from 'react'
import {
  ButtonBack, ButtonFirst, ButtonLast, ButtonNext, CarouselProvider, DotGroup, Image, Slide, Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Home() {
  return (
    <CarouselProvider
      totalSlides={3}
      naturalSlideWidth={200}
      naturalSlideHeight={500}
      infinite
    >
      <Slider style={{ maxWidth: '75vw', maxHeight: '75vh', margin: 'auto' }}>
        <Slide index={0}>
          <Image src="https://picsum.photos/700/400" isBgImage/></Slide>
        <Slide index={1}>
          <Image src="https://picsum.photos/600/400" isBgImage/></Slide>
        <Slide index={2}>
          <Image src="https://picsum.photos/500/400" isBgImage/></Slide>
      </Slider>
      <div className='d-flex justify-content-center'>
      <ButtonBack style={{all: 'unset'}}><mdui-button-icon icon="chevron_left"></mdui-button-icon></ButtonBack>
      <ButtonNext style={{all: 'unset'}}><mdui-button-icon icon="chevron_right"></mdui-button-icon></ButtonNext>
      </div>
      <DotGroup style={{display: 'flex', justifyContent: 'center'}}/>
    </CarouselProvider>
  )
}