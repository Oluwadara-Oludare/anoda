import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blog_data } from '@/public/assets/assets'


const BlogItem = ({ title, description, category, image, id, author_img,author, date}) => {
  return (
    <div className='justify-center  block md:flex  md:gap-5 lg: gap-7 mt-8 md:mt-10 lg:mt-12  pb-10 border-b border-black m-5 md:ml-12 mr-12'>
      <div className='block  md:w-[450px] lg:w-[600px]'>
      <Link href={`/blogs/${id}`}>
          <div className='flex gap-1'><Image className='rounded-full' src={author_img} width={75} height={60} alt="Author Image" /><p className='mt-3 mb-3 sm:text-sm md:text-md lg:text-lg tracking-tight text-gray-950'>{author}</p></div>
          <h1 className=" sm:text-3xl md:text-2xl lg:text-5xl  font-medium tracking-tight text-black">{title}</h1>
          <p className="mb-3 sm:text-sm md:text-md lg:text-lg tracking-tight text-gray-950 justify-center items-center">{description}</p>
         <p className=" mt-2 px-4 inline-block bg-slate-700 text-white text-sm">{category}</p>
         
         
      </Link>
      <div  className='flex flex-auto gap-3 md:gap-7 lg:gap-10 mt-5 w-[150px] md:w-[40px] lg:w-[auto]'>
            <div className='flex gap-1 '><Image  className=' h-[31px] w-[37px]' width={50} height={40} src='/assets/calender.png'/>
            <p className="mb-3 mt-1 sm:text-sm md:text-md lg:text-xl tracking-tight text-gray-950   w-[150px]">{date}</p></div>
            <div className=' mt-1 flex gap-1 h-[20px] md:h-[25px] lg:h-[31px] w-[15px] md:w-[20px] lg:w-[26px]'><Image width={60} height={9} src='/assets/heart.png'/>
            <p className="mb-3  sm:text-sm md:text-md lg:text-xl tracking-tight text-gray-950">24</p></div>
            <div className='mt-1 flex gap-1 h-[20px] md:h-[25px] lg:h-[31px] w-[15px] md:w-[20px] lg:w-[26px] ml-9'><Image width={60} height={9} src='/assets/comment.png'/>
            <p className="mb-3 sm:text-sm md:text-md lg:text-xl tracking-tight text-gray-950">13</p></div>
         </div>
</div>
      <div className="flex justify-center items-center">
        <Image 
          src={image} 
          width={300} 
          height={300} 
          className="lg:w-[360px] md:w-[300px] w-[260px] mt-2 md:mt-19 lg:mt-20 border-b border-black" 
          alt="Blog Image" 
        />
      </div>

    </div>
  );
}

export default BlogItem;
