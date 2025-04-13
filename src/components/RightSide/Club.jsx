import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const Club = () => {

      const club = [

            { icon: <IoMdCheckmarkCircle />, title: "ডিভেটিং ক্লাব" },
            { icon: <IoMdCheckmarkCircle />, title: "সাইন্স ক্লাব" },
            { icon: <IoMdCheckmarkCircle />, title: "কম্পিউটার ক্লাব" },
            { icon: <IoMdCheckmarkCircle />, title: "রক্তদান ক্লাব" },
            { icon: <IoMdCheckmarkCircle />, title: "সাংস্কৃতিক ক্লাব" }

      ]

      return (
            <div className='mt-4 bangla'>
                  <h1 className='text-center tracking-wide bg-[#609513]  py-2 rounded-t-md text-white'>
                        ক্লাব
                  </h1>
                  <div className='mt-3'>
                        {
                              club.map((item) => (
                                    <div className='flex items-center gap-2 border-b border-gray-400 pb-2  text-sm'>
                                          <h1 className='text-[#609513]'>{item?.icon}</h1>
                                          <h1 className='mt-1 text-gray-800'>{item?.title}</h1>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      );
};

export default Club;