import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="py-5 md:px-12 gap-2 lg:px-28 mt-9">
      <div className="flex md:gap-5 lg:gap-9 justify-between items-center">
        <Image 
          src="/assets/download.png" // Ensure this file exists in the 'public' folder
          width={100} 
          height={100} // Adjust height as necessary
          alt="Header Image"
          className="w-[40px] md:w-[60px] lg:w-[80px]" 
        />
        <input 
          placeholder='Search' 
          className='w-[200px] md:w-[300px] lg:w-[600px] ml--7 flex items-center gap-2 text-sm md:text-md lg:text-lg py-1 px-2 sm:py-3 border border-solid border-black' 
        />
        <Image 
          className='ml--9 w-[25px] md:w-[40px] lg:w-[40px]' 
          src='/assets/notification.png' 
          width={40} 
          height={40} // Set the height properly
          alt="Notification Icon" // Always add an alt prop for accessibility
        />
      </div>
    </div>
  );
};

export default Header;
