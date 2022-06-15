import React, { FC, Fragment, useRef, useState } from "react";
import "./index.scss";
import { MdEmail } from 'react-icons/md';
import { HiChevronDoubleRight } from 'react-icons/hi';

import Jolie from "../../assets/images/banner_2.jpeg";
import { BsStarFill } from "react-icons/bs";


type BannerCourseProps = {
};

const BannerCourse: FC<BannerCourseProps> = () => {

  return (
    <Fragment>
      <div className="bannerCourse flex justify-start responsive pt-10 pb-20 text-white bg-gray-900 items-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-semibold w-6/12 my-4">MENUISERIE - DESSIN GENERAL  (40h)</h1>
          <p className="my-4 text-lg w-6/12"> Il fabrique, répare, installe placards, escaliers, parquets, volets, meubles, boiseries...Il choisit tout d’abord le matériau adapté au travail à réaliser. Ensuite, il trace à l’aide du trusquin, du compas, de l’équerre et de la règle, ..
          </p>
          <p className="text-sm inline-flex justify-between items-center">4,4 
            <span className="flex items-center mx-3">
            <BsStarFill size={10} className='text-orange-300 mx-0.5' />
            <BsStarFill size={10} className='text-orange-300 mx-0.5' />
            <BsStarFill size={10} className='text-orange-300 mx-0.5' />
            </span>
           (<span className="underline cursor-pointer">889 notes</span>) <span className="ml-2">3 679 participants </span>
           
           </p> <br /> <br />
           <span>Créé par : <span className="underline cursor-pointer text-gray-200 ">Ipupa Sammuel</span></span>

        </div>
      </div>
    </Fragment>
  );
};

export default BannerCourse;
