import React from 'react';
import illu from '../assets/illu.svg'
const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <img
              src={illu}
              alt="Your SVG"
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 px-4  text-justify">
            <h1 className="text-3xl md:text-7xl font-semibold mb-4">Direct<span className='text-blue-700'>connect</span>with Industry Experts</h1>
            <p className="text-2xl mb-4">
               our aim is to provide first hand information about a company directly from the people working in the company 
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
