import React from 'react';
import Container from './Container';
import { BiLeaf } from "react-icons/bi";

const Footer = () => {
      return (
            <div className='bg- mt-10 text-gray-800 text-sm'>
                  <Container>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-2 py-4 text-center lg:text-left'>
                              <h1 className='font-medium tracking-wide text-gray-800'>Assim Multilateral High School</h1>
                              <h1 className='flex items-center gap-1 text-sm'>
                                   Developed By
                                    <span className='flex items-center gap-1 font-medium'>
                                          <BiLeaf className='text-[#609513] text-lg' />
                                          Shahin Alom
                                    </span>
                              </h1>
                        </div>
                  </Container>
                  <h1 className='text-center text-sm py-4 px-4 border-t border-[#b4c4a4] bangla'>
                         {new Date().getFullYear()} সমস্ত অধিকার সংরক্ষিত।
                  </h1>
            </div>
      );
};

export default Footer;
