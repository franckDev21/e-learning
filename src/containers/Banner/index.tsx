import React, { FC, useRef, useState } from "react";
import "./index.scss";

import Jolie from "../../assets/images/jolie.jpeg";


type BannerProps = {
  left ?: React.ReactNode,
  right ?: React.ReactNode,
};

const Banner: FC<BannerProps> = ({left,right}) => {

  return (
    <div className="banner pt-14 flex justify-center items-center bg-gradient-to-r from-violet-500 to-violet-500">
      {!left ? 
        <img src={Jolie} width={500} className='rounded-tl-md rounded-tr-md' alt="" /> : <>{left}</>
      }

      {!right ? 
        <div className="ml-4 max-w-md pb-10">
          <h1 className="text-5xl font-bold flex flex-col justify-start items-start">
            <span style={{backgroundColor: '#003667'}} className="text-white py-2 px-4 font-extrabold">Votre avenir</span>
            <span style={{backgroundColor: '#003667'}} className="text-white py-2 px-4 font-extrabold">commence ici</span>
          </h1>
  
          <p className="text-white w-8/12 leading-7 my-3">
            Apprenez à apprendre. <br />
            Découvrez les compétences de demain.
            Et prenez votre carrière en main.
          </p>
  
          <button className="bg-white rounded-md text-violet-500 mt-3 px-6 py-3 uppercase text-sm font-semibold">En savoir plus</button>
        </div> : <>{right}</>
      }

    </div>
  );
};

export default Banner;
