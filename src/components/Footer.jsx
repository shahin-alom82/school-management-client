import React from 'react';
import Container from './Container';
import { BiLeaf } from "react-icons/bi";

const Footer = () => {
      return (
            <div className=' text-white text-sm mt-6'>
                  {/* <h1></h1> */}
                  <Container className={'bg-[#609513] rounded-t-md'}>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-2 py-6 text-center lg:text-left lg:px-4'>
                              <h1 className='font-medium tracking-wide text-white'>Assim Multilateral High School</h1>
                              <h1 className='flex items-center gap-1 text-sm'>
                                    Developed By
                                    <span className='flex items-center gap-1 font-medium'>
                                          <BiLeaf className='text-white text-lg' />
                                          Shahin Alom
                                    </span>
                              </h1>
                        </div>
                  </Container>
                  <Container>
                        <p className='lg:text-center py-6 text-gray-900 px-4 bg-[#ebeff0] tracking-wide lg:text-sm text-xs'>&copy; {new Date().getFullYear()} <span className='text-[#23b792]'>Assim Multilateral High School</span> | Organized By <span className='text-[#23b792]'>SSC Batch - 2019-20</span> All Rights Reserved.</p>
                  </Container>
            </div>
      );
};

export default Footer;
