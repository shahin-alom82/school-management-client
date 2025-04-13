import React from 'react';
import { FaCaretRight } from 'react-icons/fa';
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"

const Cart = () => {

      const cart = [
            {
                  title: "আমাদের স্কুল",
                  icon: <FaCaretRight />,
                  path1: "সংক্ষিপ্ত পরিচিতি",
                  path2: "প্রধান শিক্ষক",
                  path3: "সহকারী প্রধান শিক্ষক",
                  path4: "কর্মচারী",
                  img: img4
            },
            {
                  title: "বিভাগ সমূহ",
                  icon: <FaCaretRight />,
                  path1: "বিজ্ঞান শাখা",
                  path2: "মানবিক শাখা",
                  path3: "কারিগরি শাখা",
                  path4: "কমার্স শাখা",
                  img: img3
            },
            {
                  title: "ভর্তি ও উপবৃত্তি বিষয়ক",
                  icon: <FaCaretRight />,
                  path1: "ভর্তির বিজ্ঞপ্তি ও ভর্তি বিষয়ক তথ্য",
                  path2: "ভর্তির ফলাফল",
                  path3: "উপবৃত্তি আবেদন ফরম",
                  path4: "উপবৃত্তি প্রাপ্ত শিক্ষার্থীর তালিকা",
                  img: img1
            },
            {
                  title: "পরীক্ষা ও ফলাফল বিষয়ক",
                  icon: <FaCaretRight />,
                  path1: "পর্ব সমাপনী পরীক্ষার বিজ্ঞপ্তি ও রুটিন",
                  path2: "পরীক্ষার সীট প্ল্যান",
                  path3: "পরীক্ষার্থীদের জন্য নির্দেশনাবলী",
                  path4: "ফলাফল",
                  img: img2
            }
      ]





      return (
            <div className='bangla grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6'>
                  {
                        cart?.map((item) => (
                              <div className='border-2 border-gray-300 py-4 px-4'>
                                    <h1 className='lg:text-xl text-gray-800'>{item?.title}</h1>
                                    <div className='flex flex-col lg:flex-row gap-10'>
                                          <img src={item?.img} alt={item?.img} className='mt-2' />
                                          <div className='mt-2'>
                                                <div className='flex items-center gap-0.5'>
                                                      <h1 className='text-[#609513]'>{item?.icon}</h1>
                                                      <h1 className='mt-1 text-sm text-gray-700 cursor-pointer'>{item?.path1}</h1>
                                                </div>
                                                <div className='flex items-center gap-0.5'>
                                                      <h1 className='text-[#609513]'>{item?.icon}</h1>
                                                      <h1 className='mt-1 text-sm text-gray-700 cursor-pointer'>{item?.path2}</h1>
                                                </div>
                                                <div className='flex items-center gap-0.5'>
                                                      <h1 className='text-[#609513]'>{item?.icon}</h1>
                                                      <h1 className='mt-1 text-sm text-gray-700 cursor-pointer'>{item?.path3}</h1>
                                                </div>
                                                <div className='flex items-center gap-0.5'>
                                                      <h1 className='text-[#609513]'>{item?.icon}</h1>
                                                      <h1 className='mt-1 text-sm text-gray-700 cursor-pointer'>{item?.path4}</h1>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        ))
                  }
            </div>
      );
};

export default Cart;