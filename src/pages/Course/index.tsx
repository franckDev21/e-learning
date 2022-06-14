import React, { FC } from "react";
import { BsFillCaretDownFill,BsFillCaretLeftFill } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

import "./index.scss";
import Layout from "../../containers/Loyout";
import Banner from "../../containers/Banner";

type CourseProps = {
};

const Course: FC<CourseProps> = () => {

  return (
    <Layout>
      <Banner
        left={
          <>
            <div className="container mx-auto relative z-20 py-10 text-5xl leading font-extrabold ">
              <span style={{color: '#003667'}} className='bg-white px-6 inline-block py-2'>TOUS LES COURS</span>
            </div>
          </>
        }
      />
    </Layout>
  );
};

export default Course;
