import React, { useEffect, useState } from 'react';
import Container from '../Container';
import moment from 'moment';
import { TfiEmail } from 'react-icons/tfi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiSchoolLine } from 'react-icons/ri';
import { IoTimeOutline } from 'react-icons/io5';

const TopHeader = () => {
      const [time, setTime] = useState(moment());
      useEffect(() => {
            const interval = setInterval(() => {
                  setTime(moment());
            }, 1000);

            return () => clearInterval(interval);
      }, []);

      return (
            <div>
                  <div className='bg-white py-3'>
                        <h1 className='text-center bangla text-[#609513] tracking-wide lg:[18px] text-sm'>পড় তোমার রবের নামে, যিনি তুমাকে সৃষ্টি করেছেন।</h1>
                  </div>
                  {/* [#609513] */}
                  <div className='bg-[#01a2a6] py-3 text-white'>
                        <Container className="flex flex-col md:flex-row lg:items-center justify-between gap-4">
                              {/* Contact Info */}
                              <div className="flex flex-col sm:flex-row lg:items-center gap-4 sm:gap-10">
                                    {/* Live Date & Time */}
                                    <div className='flex items-center gap-2'>
                                          <span className='border py-1 px-1 rounded-full'><FaRegCalendarAlt size={10} /></span>
                                          <span>{time.format('dddd, Do MMMM,  YYYY')}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                          <IoTimeOutline size={20} />
                                          <span className='mt-[1px]'>{time.format('h:mm:ss A')}</span>
                                    </div>
                              </div>
                              <div className='flex flex-col lg:flex-row lg:items-center lg:gap-8 gap-4'>
                                    <div className="flex items-center gap-2">
                                          <span className='border py-1 px-1 rounded-full'><TfiEmail size={10} /></span>
                                          <span className="tracking-wide"> assimhighschool1946@gmail.com</span>
                                    </div>
                                    <div>
                                          <div className="flex items-center gap-2">
                                                <span className='border py-1 px-1 rounded-full'><RiSchoolLine size={10} /></span>
                                                <span className="tracking-wide ">EIIN: 6827291</span>
                                          </div>
                                    </div>
                              </div>
                        </Container>
                  </div>
            </div>
      );
};

export default TopHeader;