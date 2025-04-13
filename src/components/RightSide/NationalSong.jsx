import React from 'react';
import mp4 from "../../assets/song24.mp4"

const NationalSong = () => {
      return (
            <div className='mt-4 bangla'>
                  <h1 className='text-center tracking-wide bg-[#609513]  py-2 rounded-t-md text-white'>
                        জাতীয় সংগীত
                  </h1>
                  <video controls className="w-full mt-3">
                        <source src={mp4} type="video/mp4" />
                        Your browser does not support the video tag.
                  </video>
            </div>
      );
};

export default NationalSong;