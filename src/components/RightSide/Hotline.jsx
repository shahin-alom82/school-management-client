import React from 'react';
import hotline from "../../assets/hotline.jpg"

const Hotline = () => {
      return (
            <div className='bangla mt-3'>
                  <h1 className='text-center tracking-wide bg-[#609513]  py-2 rounded-t-md text-white'>
                        জরুরি হটলাইন
                  </h1>
                  <div className='mt-3'>
                        <img src={hotline} alt="hotline-image" />
                  </div>
            </div>
      );
};

export default Hotline;