import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const Addmisssion = () => {
      const addmisssion = [
            { icon: <IoMdCheckmarkCircle />, title: "ভর্তি ফর্ম" },
            { icon: <IoMdCheckmarkCircle />, title: "ভর্তি প্রক্রিয়া" },
            { icon: <IoMdCheckmarkCircle />, title: "অন্যান্য তথ্য" },
      ]
      return (
            <div className='mt-4 bangla'>
                  <h1 className='text-center tracking-wide bg-[#609513]  py-2 rounded-t-md text-white'>
                        ভর্তি ও ফর্ম ফিলাপ
                  </h1>
                  <div className='mt-3'>
                        {
                              addmisssion.map((item) => (
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

export default Addmisssion;