import React from 'react';
import Container from '../components/Container';
import SortDetails from '../components/LeftSide/SortDetails';
import Banner from '../components/LeftSide/Banner';
import HeadTeacher from '../components/RightSide/HeadTeacher';
import GovLink from '../components/RightSide/GovLink';
import NationalSong from '../components/RightSide/NationalSong';
import Hotline from '../components/RightSide/Hotline';
import Club from '../components/RightSide/Club';
import Cart from '../components/LeftSide/Cart';
import Addmisssion from '../components/RightSide/Addmisssion';
const Home = () => {
      return (
            <Container>
                  <div className='flex flex-col lg:flex-row gap-4 mt-3'>
                        <div className='lg:w-6/8'>
                              <Banner />
                              <SortDetails />
                              <Cart />
                        </div>
                        <div className='lg:w-2/8'>
                              <HeadTeacher />
                              <GovLink />
                              <NationalSong />
                              <Addmisssion />
                              <Club />
                              <Hotline />
                        </div>
                  </div>
            </Container>
      );
};

export default Home;