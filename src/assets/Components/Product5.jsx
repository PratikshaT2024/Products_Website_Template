
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Img1 from "../Images/P1.jpg"
import Img2 from "../Images/P2.jpg"
import Img3 from "../Images/P3.jpg"
import Img4 from "../Images/P1.jpg"
import Img5 from "../Images/P2.jpg"
import Img6 from "../Images/P1.jpg"
import Form from '../Components/Form';






const cardsData = [

  {
    image: Img1,
    title: "Bumper",
  description: "Get Ready for a Smashing Good Time! "
  },
  {
     image: Img2 ,
    title: "Mirror",
    description: "Clear Vision, Confident Driving."
  },
  {
    image: Img3 ,
    title: "Stering",
    description: "Take Control with Every Turn."
  },
  {
    image: Img4,
    title: "Headlight",
    description: "Drive Safely with Brilliant Headlights."
  },
  {
    image: Img5,
    title: "Clutch Plate",
    description: "Clutch Plates that Keep You in Control."
  },
  {
     image: Img6,
     title: "Brake",
    description: "Powerful Brakes for Smooth, Reliable Stops."
  },
];

function Product5() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const firstHalf = cardsData.slice(0, 3);
  const secondHalf = cardsData.slice(3, 6);

  return (
    <div className="container mx-auto max-w-full px-8 py-6 bg-gray-100 shadow-lg rounded-lg items-center" data-aos="fade-up flex">
    <div className=' flex justify-center'><h1 className="text-3xl font-semibold font-serif text-black mb-6 text-left  ">Want To Buy Produts</h1></div>  
      <div className='flex '>
        <div className='lg:pr-24'><Form/></div>
        
        <div className='flex flex-col '>
            {/* First Row of Cards */}
            <div className="flex  justify-end max-w-7xl">
                    {firstHalf.map((card, index) => (
                        <div key={index} className="w-full sm:w-1/2  lg:w-60 p-2 lg:h-80">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden lg:flex-col h-full p-8" data-aos="zoom-in">
                                <img src={card.image} alt={card.title} className="w-full h-20 lg: object-cover" />
                            <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="font-bold text-xl mb-2">{card.title}</div>
                                    <p className="text-gray-700 text-base">{card.description}</p>
                                </div>
                            </div>
                        </div>
                 </div>
                 ))} 
            </div>

                 {/* Separator */}
            {/* <hr className="border-t-2 border-gray-300 my-6" /> */}

            {/* Second Row of Cards  */}
            <div className=" flex justify-end">
         {secondHalf.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-60  p-2 lg:h-80">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full p-8" data-aos="zoom-in">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                    <div>
                            <div className="font-bold text-xl mb-2">{card.title}</div>
                                <p className="text-gray-700 text-base">{card.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                 ))}
             </div>
         </div>
              <div className=''>
      
        </div>
      </div>
     
    </div>
    
  );
}

export default Product5;