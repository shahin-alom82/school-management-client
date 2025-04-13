import React from 'react';
import img from "../../assets/banner1.jpg";
import Marquee from 'react-fast-marquee';

const Counter = () => {
      return (
            <div className='bangla mt-4'>
                  <Marquee>
                        <div className='flex gap-4'>
                              <img src={img} alt="img" className='lg:h-[260px] h-20' />
                              <img src={img} alt="img" className='lg:h-[260px] h-20' />
                        </div>
                  </Marquee>
            </div>
      );
};

export default Counter;