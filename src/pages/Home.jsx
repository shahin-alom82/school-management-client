import React from 'react';
import Container from '../components/Container';
import SortDetails from '../components/LeftSide/SortDetails';
import Banner from '../components/LeftSide/Banner';
import HeadTeacher from '../components/RightSide/HeadTeacher';
import GovLink from '../components/RightSide/GovLink';
const Home = () => {
      return (
            <Container>
                  <div className='flex flex-col lg:flex-row gap-4 mt-3'>
                        <div className='lg:w-6/8'>
                              <Banner />
                              <SortDetails />
                        </div>
                        <div className='lg:w-2/8'>
                              <HeadTeacher />
                              <GovLink />
                        </div>
                  </div>
            </Container>
      );
};

export default Home;