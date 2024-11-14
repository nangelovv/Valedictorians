import React, { useEffect } from 'react'
import {
  ButtonBack, ButtonFirst, ButtonLast, ButtonNext, CarouselProvider, DotGroup, Image, Slide, Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Home() {

  useEffect(() => {
    const targetElement = document.getElementById('carouselButtons');
    const sliderElement = document.getElementById('slider');
    const containerElement = sliderElement?.parentElement;

    if (targetElement && sliderElement && containerElement) {
      const resizeObserver = new ResizeObserver(() => {
        const { left: sliderLeft, right: sliderRight } = sliderElement.getBoundingClientRect();
        const { left: containerLeft, right: containerRight } = containerElement.getBoundingClientRect();

        // Calculate and apply left and right margins
        targetElement.style.marginLeft = `${sliderLeft - containerLeft}px`;
        targetElement.style.marginRight = `${containerRight - sliderRight}px`;
      });

      // Observe both elements for resizing
      resizeObserver.observe(sliderElement);
      resizeObserver.observe(containerElement);

      // Cleanup observer on component unmount
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <CarouselProvider
      totalSlides={3}
      naturalSlideWidth={200}
      naturalSlideHeight={500}
      infinite
      hasMasterSpinner
    >
      <Slider style={{ maxWidth: '75vw', maxHeight: '75vh', margin: 'auto', borderRadius: '1.5rem' }} id='slider'>
        <Slide index={0}>
          <Image src="https://loremflickr.com/100/600?random=1" />
        </Slide>
        <Slide index={1}>
          <Image src="https://loremflickr.com/200/200?random=2" />
        </Slide>
        <Slide index={2}>
          <Image src="https://loremflickr.com/200/200?random=3" />
        </Slide>
      </Slider>
      <div className='d-flex justify-content-between' id='carouselButtons' style={{ position: 'absolute', top: '50%', left: '0', right: '0', transform: 'translateY(-50%)' }}>
        <ButtonBack style={{ all: 'unset' }}><mdui-button-icon style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white'}} icon="chevron_left"></mdui-button-icon></ButtonBack>
        <ButtonNext style={{ all: 'unset' }}><mdui-button-icon style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white'}} icon="chevron_right"></mdui-button-icon></ButtonNext>
      </div>
      <DotGroup style={{ display: 'flex', justifyContent: 'center' }} />
    </CarouselProvider>
  )
}