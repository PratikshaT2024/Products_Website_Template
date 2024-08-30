import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Img1 from "../Images/P1.jpg"
import Img2 from "../Images/P2.jpg"
import Img3 from "../Images/P3.jpg"
import Img4 from "../Images/P4.jpg"

const photos = [
    { src: Img1},
    { src: Img2},
    { src: Img3},
    { src: Img4},
]

function Photo({ src }) {
  return (
    <img
      src={src}
      alt="Gallery"
      className="w-full h-96 object-center"
      data-aos="zoom-in"
    />
  );
}

Photo.propTypes = {
  src: PropTypes.string.isRequired
};

function Products3() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto max-w-7xl  px-8 py-6 shadow-lg rounded-lg lg:mt-10" data-aos="fade-up">
      <h1 className="text-3xl font-semibold font-serif text-gray-800 mb-6 text-center">Our Collection</h1>
      <div className="flex flex-wrap justify-center">
        {photos.map((photo, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Photo src={photo.src} />
            </div>
          </div>
        ))}
      </div>
    </div>




  );
}

export default Products3;
