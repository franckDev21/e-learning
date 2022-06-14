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
          <span className="ml-4">Durant ce cours, vous allez apprendre fondamentaux du développement web.</span>
        </div>
        
        <div className="flex text-sm items-start justify-start">
          <span className="translate-y-1 w-8 h-8 flex items-center justify-center p-2 rounded-full border"><BsCheckLg className="text-green-600" size={20} /></span>
          <span className="ml-4">Vous allez apprendre à développer des sites web grâce aux langages HTML5, CSS3, JavaScript, PHP, MySQL, NodeJS, MongoDB, Express JS etc ..., .</span>
        </div>

        <div className="flex text-sm items-start justify-start">
          <span className="translate-y-1 w-8 h-8 flex items-center justify-center p-2 rounded-full border"><BsCheckLg className="text-green-600" size={20} /></span>
          <span className="ml-4">Vous allez apprendre à rendre un site web responsive (un site s'adapte à tout type d'écran).</span>
        </div>
        
        <div className="flex text-sm items-start justify-start">
          <span className="translate-y-1 w-8 h-8 flex items-center justify-center p-2 rounded-full border"><BsCheckLg className="text-green-600" size={20} /></span>
          <span className="ml-4">Vous allez tout apprendre sur l'hébergement et la mise en ligne de votre site.</span>
        </div>

        <div className="flex text-sm items-start justify-start">
          <span className="translate-y-1 w-8 h-8 flex items-center justify-center p-2 rounded-full border"><BsCheckLg className="text-green-600" size={20} /></span>
          <span className="ml-4">A la fin du cous, vous serez en mesure de créer et mettre en ligne des sites web statiques et/ou dynamiques.</span>
        </div>

        <div className="flex text-sm items-start justify-start">
          <span className="translate-y-1 w-8 h-8 flex items-center justify-center p-2 rounded-full border"><BsCheckLg className="text-green-600" size={20} /></span>
          <span className="ml-4">Vous serez en mesure d'étudier l’ensemble des solutions techniques disponibles pour réponse à un besoin technique</span>
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
