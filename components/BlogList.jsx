import { blog_data } from '@/public/assets/assets';
import React, { useState } from 'react';
import BlogItem from './BlogItem';

const BlogList = () => {
    const [menu, setMenu] = useState('All');

    const filteredBlogs = menu === 'All' ? blog_data : blog_data.filter(item => item.category === menu);

    return (
        <div>
            <div className="flex gap-3 text-sm md:text-md lg:text-lg md:gap-9 lg:gap-12  md:pl-22 lg:pl-40 m-2 md:m-3 lg:m-5  mt-0 border-b border-black">
                <button onClick={() => setMenu('All')} className={menu === 'All' ? 'bg-black  text-white py-1 px-4 rounded-sm' : ''}>All</button>
                <button onClick={() => setMenu('Diploma')} className={menu === 'Diploma' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Diploma</button>
                <button onClick={() => setMenu('Balloting')} className={menu === 'Balloting' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Balloting</button>
                <button onClick={() => setMenu('YR 1')} className={menu === 'YR 1' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>YR 1</button>
                <button onClick={() => setMenu('Admission')} className={menu === 'Admission' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Admission</button>
            </div>
            <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-12 xl:mx-25">
                {filteredBlogs.map((item, index) => (
                    <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} author={item.author} author_img={item.author_img} date={item.date} />
                ))}
            </div>
        </div>
    );
}

export default BlogList;
