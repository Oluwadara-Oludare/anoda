'use client'
import { blog_data } from '@/public/assets/assets';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Head from 'next/head';

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlogData = () => {
    const blogPost = blog_data.find((post) => Number(params.id) === post.id);
    if (blogPost) {
      setData(blogPost);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator
  }

  if (!data) {
    return <div>Blog post not found.</div>; // Handle case where post is not found
  }

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Head>
      <div className='py-6 px-6 md:px-12 lg:px-20'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <Image src='/assets/download.png' width={100} height={100} alt='Logo' className='w-[140px] sm:w-auto' />
          </Link>
        </div>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-4xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-110px] mb-12'>
        <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt={data.title} />
        <div className="flex items-center mt-7 pl-5">
          <Image 
            className="border border-white rounded-lg" 
            src={data.author_img} 
            width={60} 
            height={60} 
            alt="Author's image"
          />
          <p className="ml-2 text-lg">{data.author}</p>
        </div>

        <h1 className='my-9 text-[24px] font-semibold'>Introduction:</h1>
        <p>{data.description}</p>
        {/* Add your content paragraphs here */}
        <div className='my-22'>
          <p className='text-black font-semibold my-5'>Share this article on Social Media</p>
          <div className="flex gap-2">
            {/* Social media sharing links */}
            <Link href={`https://twitter.com/share?url=${window.location.href}`} target="_blank">
              <Image className='rounded-lg' width={40} height={40} src="/path/to/twitter-icon.png" alt="Share on Twitter" />
            </Link>
            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank">
              <Image className='rounded-lg' width={40} height={40} src="/path/to/facebook-icon.png" alt="Share on Facebook" />
            </Link>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
