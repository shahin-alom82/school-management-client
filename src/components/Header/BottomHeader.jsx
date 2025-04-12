import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container';
import { GrAnnounce, GrHome } from 'react-icons/gr';
import { GiTeacher } from 'react-icons/gi';
import { PiChalkboardTeacherDuotone, PiExam, PiStudentFill } from 'react-icons/pi';
import { SiGoogleclassroom } from 'react-icons/si';
import { FiLogIn } from 'react-icons/fi';

const BottomHeader = () => {
      const nav = [
            { title: "Home", path: "/", icon: <GrHome size={18}/> },
            { title: "Teacher Portal", path: "/teacher-portal", icon: <PiChalkboardTeacherDuotone size={18} />},
            { title: "Student Portal", path: "/student-portal", icon: <PiStudentFill size={18}/> },
            { title: "Notice Board", path: "/notice-board", icon: <GrAnnounce size={18}/> },
            { title: "Class Routines", path: "/class-routines", icon: <SiGoogleclassroom size={18}/> },
            { title: "Exam Result", path: "/exam-result", icon: <PiExam size={20}/>},
            { title: "Public Exam Result", path: "/exam-result", icon: <PiExam size={20}/>},
            { title: "Login", path: "/login", icon: <FiLogIn size={18}/> },
      ]
      return (
            <div className='bg-[#01a2a6] mt-5 hidden md:block'>
                  <Container>
                        <div className='flex items-center justify-between py-3'>
                              {
                                    nav.map((item) => (
                                          <div className='text-white relative group'>
                                                <NavLink className='flex items-center gap-2 tracking-wide' to={item?.path}>
                                                      {item?.icon}
                                                      {item?.title}
                                                      {/* underline */}
                                                      <span
                                                            className={`absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full`}
                                                      ></span>
                                                </NavLink>
                                          </div>

                                    ))
                              }
                        </div>
                  </Container>
            </div>
      );
};

export default BottomHeader;