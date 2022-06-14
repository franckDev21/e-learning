import React, { FC } from "react";
import { BsFillCaretDownFill,BsFillCaretLeftFill } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

import "./index.scss";

type CardCourseProps = {
  image ?: string,
  categorie ?: string,
  title ?: string,
  description ?: string,
  imgProf ?: string,
  classColor ?: string,
  endCard ?: boolean
};

const CardCourse: FC<CardCourseProps> = ({image,title,description,categorie,imgProf,classColor,endCard = false}) => {

  return (
    <div className=" mt-6 cursor-pointer card-courses relative">
      <div className="flex flex-col ">
        <div className="w-72 h-40 relative card-courses__img">
          <span className={`px-2 py-2 absolute top-0 left-0 z-20 text-white ${classColor}`} >
            {categorie}
          </span>
          <img
            src={image}
            className="absolute left-0 w-full h-full object-cover z-10 "
            width={200}
            alt="web"
          />
        </div>
      </div>

      <h1 className=" font-bold mt-1 w-72">
        {title}
      </h1>

      <p className="text-gray-400 text-sm w-72">
       {description}
      </p>

      <div className="flex mt-4">
        <div className="w-10 h-10 overflow-hidden  rounded-full bg-white relative">
          <img src={imgProf} className="absolute w-full h-full object-cover" alt="prof" />
        </div>
        <div>
          <h2 className="text-sm font-semibold ml-2">Laure Tsague</h2>
          <p className="text-xs text-gray-400 ml-2">
            Lorem, ipsum dolor.
          </p>
        </div>
      </div>

      <div className={`card-courses__popup -translate-y-full  ${endCard ? 'card-courses__popup--end top-full right-0 ': ' top-1/3 left-full'}  absolute cursor-default  ml-4 py-4 px-6 w-96 rounded-md shadow-md bg-white z-50`}>
        <h1 className="text-xl font-semibold mb-3">{title}</h1>

        <span className="text-xs block text-gray-600">Mise à jour <span className="text-primary font-semibold">mai 2022</span></span>
        <span className="text-xs block text-gray-500 my-2">Tous les niveaux</span>

        <p className="text-sm text-gray-600 font-light mb-3">
          {description}
        </p>

        <ul>
          <li className="flex items-center justify-start text-sm text-gray-600 mb-4 font-light">
            <span><AiOutlineCheck /></span>
            <span className="pl-3">Durant ce cours, vous allez apprendre fondamentaux du développement web.</span>
          </li>
          <li className="flex items-center justify-start text-sm text-gray-600 mb-4 font-light">
            <span><AiOutlineCheck /></span>
            <span className="pl-3">Les languages de programmation : HTML , JavaScript</span>
          </li>
          <li className="flex items-center justify-start text-sm text-gray-600 mb-4 font-light">
            <span><AiOutlineCheck /></span>
            <span className="pl-3">Créer des boucles pour parcourir chaque élément d'un dataset</span>
          </li>
        </ul>

        <button className="px-4 py-3 block rounded-md active:scale-95 bg-orange-400 text-white">Commencer la formation</button>

        <span className={`absolute ${endCard ? 'left-1/2 -translate-x-1/2 -top-6 rotate-90':'-translate-y-1/2 top-1/2 -left-7 '}`}><BsFillCaretLeftFill color="#fff" size={50} /></span>
      </div>
    </div>
  );
};

export default CardCourse;
