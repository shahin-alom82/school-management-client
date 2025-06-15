import React from 'react';
import logo from '../../assets/logo.png'
const MiddleHeader = () => {
      return (

            <div className='flex lg:items-start items-center lg:gap-6 gap-2 max-w-screen-lg mx-auto lg:px-0 px-4 lg:mt-4' >
                  {/* [#01a2a6] */}
                  <img src={logo} alt="logo_image" className='lg:h-48 h-20 lg:mt-0 mt-3' />
                  <div className='lg:text-center mt-4'>
                        <h1 className='bangla tracking-wide lg:text-6xl text-[19px] font-bold text-[#609513]'>আছিম বহুমূখী উচ্চ বিদ্যালয়</h1>
                        <h1 className='tracking-wide font-bold lg:text-3xl text-xs mt-1 text-[#800000] uppercase'>Assim Multilateral High School</h1>
                        <h1 className='bangla tracking-wide lg:text-xl text-[8px] mt-2 text-gray-800'>ডাকঘরঃ আছিম, উপজেলাঃ ফুলবাড়িয়া, জেলাঃ ময়মনসিংহ</h1>
                        <h1 className='bangla tracking-wide mt-1 lg:text-[18px] text-[8px] text-gray-800'>বিদ্যালয় কোডঃ ৬০০২, স্থাপিতঃ ১৯৪৭ খ্রিস্টাব্দ</h1>
                  </div>
            </div >
      );
};

export default MiddleHeader;