import React from 'react';
import Helmet from 'react-helmet';
import Slider from 'react-slick';

import './slick.css';

interface Props {
  children: React.ReactNode;
}

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  infinite: true,
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Carousel: React.FC<Props> = ({ children }) => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Helmet>
    <Slider {...settings}>{children}</Slider>
  </>
);

export default Carousel;
