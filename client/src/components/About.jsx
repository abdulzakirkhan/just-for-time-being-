import React from 'react';
import {Header} from '../components';

const AboutUs = () => {
  return (
    <main className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
      <Header />
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-8">About Us</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p>
              Established in 1997, City Foods  has been serving delicious and high-quality meals to our valued customers. With a passion for culinary excellence, we have crafted a menu that celebrates local flavors and international cuisines.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              At City Foods, our mission is to provide exceptional dining experiences. We are committed to using fresh ingredients, creating flavorful dishes, and ensuring prompt and courteous service. Your satisfaction is our top priority.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <p className="mb-2"><strong>Quality:</strong> We uphold the highest standards in the quality of our ingredients and preparation.</p>
          <p className="mb-2"><strong>Community:</strong> We are dedicated to supporting the local community and sourcing locally whenever possible.</p>
          <p className="mb-2"><strong>Customer Satisfaction:</strong> Your satisfaction is our motivation. We strive to exceed your expectations.</p>
        </div>
      </div>
    </div>
    </main>
  );
};

export default AboutUs;
