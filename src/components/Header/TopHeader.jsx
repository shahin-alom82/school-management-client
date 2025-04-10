import React, { useEffect, useState } from 'react';
import Container from '../Container';
import moment from 'moment';
import { TfiEmail } from 'react-icons/tfi';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';

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
                        <h1 className='text-center bangla text-[#01a2a6] tracking-wide'>পড় তোমার রবের নামে, যিনি তুমাকে সৃষ্টি করেছেন।</h1>
                  </div>
                  <div className='bg-[#01a2a6] py-3 text-white'>
                        <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
                              {/* Contact Info */}
                              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
                                    {/* Live Date & Time */}
                                    <div className='flex items-center gap-2'>
                                          <span className='border py-1 px-1 rounded-full'><FaRegCalendarAlt size={10} /></span>
                                          <span>{time.format('dddd, Do MMMM,  YYYY')}</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                          <IoMdTime size={20} />
                                          <span>{time.format('h:mm:ss A')}</span>
                                    </div>
                              </div>
                              <div className='flex items-center gap-8'>
                                    <div className="flex items-center gap-2 border-r border-white pr-8">
                                          <span className='border py-1 px-1 rounded-full'><TfiEmail size={10} /></span>
                                          <span className="tracking-wide"> assimhighschool1946@gmail.com</span>
                                    </div>
                                    <div>
                                          <div className="flex items-center gap-2">
                                                <span className='border py-1 px-1 rounded-full'><FiPhoneCall size={10} /></span>
                                                <span className="tracking-wide ">01682247291</span>
                                          </div>
                                    </div>
                              </div>
                        </Container>
                  </div>
            </div>
      );
};

export default TopHeader;