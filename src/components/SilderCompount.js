import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk9DB9SkVnR1AJ71jp0LLD2TSPxL6yEAsONJI2EJZ0awJfYA5HfjQxLQ&s=0",
    title: "Image 1",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYK2qdflW6Exid3CJHTj4kwTsTqhU9CeWUJA&usqp=CAU",
   
    title: "Image 2",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44Cgjo_EuV0HkOuIbqyluXccazsWyPaBwww&usqp=CAU",
    title: "Image 3",
  },
  // Add more image URLs here
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
    fade: true, // Use fade effect for a smooth transition
    cssEase: 'linear', // Use linear easing for fade effect
  };

  return (
    <div style={{ height: '100vh' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.img}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;