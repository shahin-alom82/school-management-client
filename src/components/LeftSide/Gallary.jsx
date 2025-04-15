import React from 'react';
import img from "../../assets/banner1.jpg";
import img2 from "../../assets/banner3.jpg";
import Marquee from 'react-fast-marquee';

const Gallary = () => {
      return (
            <div className='bangla mt-4'>
                  <Marquee speed={100} pauseOnHover={true} gradient={false}>
                        <div className='flex gap-4'>
                              <img src={img} alt="img" className='lg:h-[260px] h-20 w-[460px]' />
                              <img src={img2} alt="img" className='lg:h-[260px] h-20 w-[460px]' />
                        </div>
                  </Marquee>
            </div>
      );
};

export default Gallary;