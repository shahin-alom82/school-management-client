import React from 'react';
import img from "../../assets/banner1.jpg";
import Marquee from 'react-fast-marquee';

const Counter = () => {
      return (
            <div className='bangla mt-4'>
                  <Marquee>
                        <div className='flex gap-4'>
                              <img src={img} alt="img" className='h-[260px]' />
                              <img src={img} alt="img" className='h-[260px]' />
                        </div>
                  </Marquee>
            </div>
      );
};

export default Counter;