import React from 'react';
import img from "../../assets/principle-photo.png"

const HeadTeacher = () => {
 
      return (
            <div>
                  <h1 className='text-center tracking-wide bg-[#609513] bangla py-2 rounded-t-md text-white'>প্রধান শিক্ষক</h1>
                  <div className='mt-3'>
                        <img src={img} alt="principle-photo" />
                        <h1 className='bangla text-center tracking-wide text-gray-800 text-xl mt-3 font-medium'>মোহাম্মাদ আব্দুর রাজ্জাক দুলাল</h1>
                  </div>
            </div>
      );
};

export default HeadTeacher;