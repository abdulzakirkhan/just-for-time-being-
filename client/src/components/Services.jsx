import React from 'react';
// import backgroundImage from './serpi.jpg'; // Import your background image
import {Header} from '../components';

const Services = () => {
  // const backgroundStyles = {
  //   backgroundImage: `url(${backgroundImage})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // };

  return (
    <main className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
      <Header />
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="bg-opacity-75 min-h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Welcome to Our Restaurant</h1>
          <p className="text-lg mb-8">We offer a cozy atmosphere for your dining experience. Enjoy delicious meals with your family and friends, or have it delivered to your doorstep.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg shadow-md bg-gray-100">
              <h2 className="text-xl font-semibold mb-4">Lunch and Dinner</h2>
              <p>Indulge in our exquisite lunch and dinner menus featuring a variety of mouthwatering dishes.</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-100">
              <h2 className="text-xl font-semibold mb-4">Family Tables</h2>
              <p>Reserve our family tables for a cozy and intimate dining experience with your loved ones.</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-100">
              <h2 className="text-xl font-semibold mb-4">Private Rooms</h2>
              <p>Experience privacy and luxury in our private rooms, perfect for special occasions and gatherings.</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-100">
              <h2 className="text-xl font-semibold mb-4">Efficient Delivery</h2>
              <p>We prioritize timely deliveries, ensuring your food reaches your doorstep fresh and piping hot.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default Services;
