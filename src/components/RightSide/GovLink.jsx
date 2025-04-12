import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';


const GovLink = () => {
      return (
            <div className='mt-3 bangla'>
                  <h1 className='text-center tracking-wide bg-[#609513]  py-2 rounded-t-md text-white'>
                        গুরুত্বপূর্ণ লিঙ্ক সমূহ
                  </h1>
                  <div className='mt-3 space-y-3'>
                        <Link to={'https://dshe.gov.bd/site/view/notices'}><h1 className='flex items-center gap-2 border-b border-gray-400 pb-2 text-[#609513] text-sm'><IoMdCheckmarkCircle size={15} /> <span className='mt-0.5 text-gray-800'>মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড</span></h1></Link>
                        <Link to={'https://dshe.gov.bd/'}><h1 className='flex items-center border-b border-gray-400 pb-2 gap-2 mt-2 text-[#609513] text-sm'><IoMdCheckmarkCircle size={15} /> <span className='mt-0.5 text-gray-800'>মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর</span></h1></Link>
                        <Link to={'https://techedu.gov.bd/'}><h1 className='flex items-center border-b border-gray-400 pb-2 gap-2 mt-2 text-[#609513] text-sm'><IoMdCheckmarkCircle size={15} /> <span className='mt-0.5 text-gray-800'>বাংলাদেশ কারিগরি শিক্ষা অধিদপ্তর</span></h1></Link>
                        <Link to={'https://tmed.gov.bd/'}><h1 className='flex items-center border-b border-gray-400 pb-2 gap-2 mt-2 text-[#609513] text-sm'><IoMdCheckmarkCircle size={15} /> <span className='mt-0.5 text-gray-800'>কারিগরি ও মাদ্রাসা শিক্ষা বিভাগ</span></h1></Link>
                  </div>
            </div>
      );
};

export default GovLink;
