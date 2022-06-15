import React, { FC } from "react";
import { BsFillCaretDownFill,BsFillCaretLeftFill } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsStarFill,BsCheckLg } from 'react-icons/bs';

import "./index.scss";
import { useNavigate } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";

type CardAboutProps = {
  classList ?: string
};

const CardAbout: FC<CardAboutProps> = ({
  classList
}) => {

  const navigate = useNavigate();

  const goToPage = (path : string) => {
    window.setTimeout(() => {
      navigate(path);
    },1500);
  }

  return (
    <div className={`CardAbout bg-white relative w-10/12 p-6 border my-10 ${classList}`}>
      <h1 className="text-2xl font-semibold mb-5">Ce que vous apprendrez</h1>
      <div className="grid grid-cols-2 gap-6 ">

        <div className="flex text-sm items-start justify-start">
          <span className="translate-y-1 w-8 h-8 flex items-center justify-center p-2 rounded-full border"><BsCheckLg className="text-green-600" size={20} /></span>
          <span className="ml-4">Excellentes capacités manuelles et précision</span>
        </div>
        
        <div className="flex text-sm items-start justify-start">
          <span className="translate-y-1 w-8 h-8 flex items-center justify-center p-2 rounded-full border"><BsCheckLg className="text-green-600" size={20} /></span>
          <span className="ml-4">Compétences techniques en menuiserie</span>
        </div>

        <div className="flex text-sm items-start justify-start">
          <span className="translate-y-1 w-8 h-8 flex items-center justify-center p-2 rounded-full border"><BsCheckLg className="text-green-600" size={20} /></span>
          <span className="ml-4">Connaissance des outils du métier (instruments manuels et machines automatiques)</span>
        </div>
        
        <div className="flex text-sm items-start justify-start">
          <span className="translate-y-1 w-8 h-8 flex items-center justify-center p-2 rounded-full border"><BsCheckLg className="text-green-600" size={20} /></span>
          <span className="ml-4">Compétences dans la réalisation d'éléments sur mesure</span>
        </div>

        <div className="flex text-sm items-start justify-start">
          <span className="translate-y-1 w-8 h-8 flex items-center justify-center p-2 rounded-full border"><BsCheckLg className="text-green-600" size={20} /></span>
          <span className="ml-4">Connaissance des procédures de montage et de pose</span>
        </div>

        <div className="flex text-sm items-start justify-start">
          <span className="translate-y-1 w-8 h-8 flex items-center justify-center p-2 rounded-full border"><BsCheckLg className="text-green-600" size={20} /></span>
          <span className="ml-4">Capacités d'organisation du travail</span>
        </div>
      </div>
      <div className="absolute w-full py-3 px-3 left-0 right-0 bottom-0 bg-white">
        <span className="text-sm text-blue-600 cursor-pointer flex items-center">
          <span className="pr-2">Voir plus </span>
          <span><HiOutlineChevronDown/></span>
        </span>
      </div>
    </div>
  );
};

export default CardAbout;
