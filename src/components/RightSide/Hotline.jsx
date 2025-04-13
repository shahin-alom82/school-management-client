import React from 'react';
import { MdEmergencyShare } from 'react-icons/md';
import { RiCustomerServiceFill, RiGovernmentLine, RiInformation2Fill } from 'react-icons/ri';
import { BiChild } from 'react-icons/bi';
import { PiCourtBasketballFill } from 'react-icons/pi';
import { GiInjustice } from 'react-icons/gi';
import { FaHandsHoldingChild } from 'react-icons/fa6';

const Hotline = () => {

      const hotline = [

            { title: "সরকারি তথ্য ও সেবা", number: "৩৩৩", icon: <RiGovernmentLine /> },
            { title: "জরুরি সেবা", number: "৯৯৯", icon: <RiCustomerServiceFill /> },
            { title: "নারী  ও শিশু নির্যাতন প্রতিরুধে", number: "১০৯", icon: <FaHandsHoldingChild /> },
            { title: "দুদক ", number: "১০৬", icon: <GiInjustice /> },

      ]



      return (
            <div className='bangla mt-4'>
                  <h1 className='text-center tracking-wide bg-[#609513]  py-2 rounded-t-md text-white'>
                        জরুরি হটলাইন
                  </h1>
                  <div className='mt-3'>
                        {
                              hotline.map((item) => (
                                    <div className='text-gray-800 border-b border-gray-400 pb-2'>
                                          <div className='flex items-center gap-2 mt-1'>
                                                <h1 className='text-[#609513]'>{item?.icon}</h1>
                                                <h1 className='text-sm'>{item?.title}  <span className='font-medium'>({item?.number})</span></h1>
                                          </div>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      );
};

export default Hotline;












