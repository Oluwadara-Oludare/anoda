import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-neutral-200">
      <div className='pt-5 md:p-1 block md:flex md:gap-9 md:m-0 justify-center items-center'>
        <div className="block ml-5">
          <Image
            className='rounded-full w-[50px] md:w-[70px]'
            src='/assets/download.png'
            width={120}
            height={140}
            alt="Footer logo"
          />
          <p className="text-[10px] md:text-[16px] lg:[23px] text-black mt-5 md:mt-7 lg:mt-10">
            An enterprise for making the soujourn of an undergraduate an impactful one
          </p>
          <div className="flex gap-1 mt-3 md:mt-5 lg:mt-8 w-[30px] md:[45px] lg:[60px]">
            <Image
              className='rounded-full'
              width={40}
              height={40}
              src="data:image/jpeg;base64,..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
