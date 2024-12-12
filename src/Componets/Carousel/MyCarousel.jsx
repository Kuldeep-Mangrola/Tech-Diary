import React from "react";
import { Carousel } from "react-bootstrap";
import { slides } from "../../assets/image/assest"; 

function MyCarousel() {
  return (
    <Carousel
      controls
      indicators
      interval={3000}
      pause="hover"
      className="w-full overflow-hidden"
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          
          <div
            className="relative w-full h-[500px] overflow-hidden"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-6 bg-white/80 backdrop-blur-md rounded-lg shadow-xl max-w-[400px]">
              <h2 className="text-4xl font-extrabold text-[#F7444E] leading-tight">
                {slide.title1}
              </h2>
              <h3 className="text-3xl font-bold text-[#002C3E] mt-2">
                {slide.title2}
              </h3>
              <p className="mt-4 text-lg text-gray-800">{slide.description}</p>
            </div> */}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
