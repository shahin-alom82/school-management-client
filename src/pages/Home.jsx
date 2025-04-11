import React from 'react';
import Container from '../components/Container';
import LeftSide from '../components/LeftSide/Banner'
import RightSide from '../components/RightSide/HeadTeacher'
import SortDetails from '../components/LeftSide/SortDetails';
const Home = () => {
      return (
            <Container>
                  <div className='flex flex-col lg:flex-row gap-4 mt-3'>
                        <div className='lg:w-6/8'>
                              <LeftSide />
                              <SortDetails />
                        </div>
                        <div className='lg:w-2/8'>
                              <RightSide />
                        </div>
                  </div>
            </Container>
      );
};

export default Home;