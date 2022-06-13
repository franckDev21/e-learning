import React, { FC, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { VscTriangleDown,VscTriangleUp } from 'react-icons/vsc';
import { ImSearch } from 'react-icons/im';
import { IoSchoolSharp } from 'react-icons/io5';
import { ImBook } from 'react-icons/im';
import { GrPersonalComputer } from 'react-icons/gr';
import { AiOutlineAndroid,AiOutlineComment,AiFillSound } from 'react-icons/ai';
import { FaDesktop } from 'react-icons/fa';
import { BiBuildings } from 'react-icons/bi';
import Logo from "../../assets/images/logo.png";

import "./index.scss";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {

  const [showSearchBar,setShowSearchBar] = useState(true);

  const [showFormationOverline,setShowFormationOverline] = useState(false);
  const overlyFormationHeaderRef = useRef(null);

  const [showProgrammeOverline,setShowProgrammeOverline] = useState(false);
  const overlyProgrammeHeaderRef = useRef(null);

  const showOverlyFormations = () => {

    if(overlyProgrammeHeaderRef.current){
      let div : HTMLElement = overlyProgrammeHeaderRef.current
      if(div.classList.contains('active')){
        div.classList.remove('active')
      }
    }

    setShowProgrammeOverline(false);
    setShowFormationOverline(step => !step)

    if(overlyFormationHeaderRef.current){
      let div : HTMLElement = overlyFormationHeaderRef.current
      div.classList.toggle('active')
    }
    
  }

  const showOverlyProgramme = () => {

    if(overlyFormationHeaderRef.current){
      let div : HTMLElement = overlyFormationHeaderRef.current
      if(div.classList.contains('active')){
        div.classList.remove('active')
      }
    }
    
    setShowFormationOverline(false);
    setShowProgrammeOverline(step => !step)

    if(overlyProgrammeHeaderRef.current){
      let div : HTMLElement = overlyProgrammeHeaderRef.current
      div.classList.toggle('active')
    }
    
  }

  return (
    <header className="py-4 bg-white text-gray-600 header">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="-translate-y-2 cursor-pointer">
            <img src={Logo} width={100} className='rounded-md translate-y-2' alt="logo" />

            {/* <Link to="/" className="logo uppercase font-semibold text-2xl" style={{color: '#003667'}} >
            <span className="text-purple-600 text-4xl">D</span>IGITAL<span className="text-purple-600 text-4xl">.</span>COLLEGE
            </Link>
            <span className="text-sm block text-gray-500">La formation de qualité pour tous </span> */}
          </div>

          <div onClick={(e) => showOverlyFormations() } className="ml-10 flex items-end cursor-pointer py-2 px-3 rounded-md hover:bg-purple-50 bg-opacity-30">
            <Link to='/' className="font- mr-3" >Formations</Link>
            <span className="w-4 h-4 -translate-y-0.5"> 
              {!showFormationOverline ? <VscTriangleDown size={14} /> : <VscTriangleUp size={14} />} 
            </span>
          </div>
          <span style={{width: 1}} className="h-6 bg-gray-300 mx-4"></span>
          <div onClick={(e) => showOverlyProgramme()} className="flex items-end cursor-pointer py-2 px-3 rounded-md hover:bg-purple-50 bg-opacity-30">
            <Link to='/' className="">Programmes</Link>
          </div>
        </div>
        <div className="flex items-center  w-1/2 justify-end">

          {showSearchBar && <div className="bg-gray-100 rounded-md  w-3/5 mr-3">
            <input type="text" placeholder="Rechercher un cour ou une formation ..." className="px-3 py-2 w-full rounded-md  h-auto bg-transparent focus:ring-1  focus:border-1 focus:ring-purple-400 focus:outline-none" />
          </div>}

          <span onClick={() => setShowSearchBar(step => !step)} className="cursor-pointer"><ImSearch size={23} /></span>
          <Link to='/auth' className="ml-6 transition-all hover:bg-orange-50 px-4 py-2 rounded-md uppercase text-sm font-semibold border-2 border-orange-400 text-orange-500">se connecter</Link>
        </div>
      </div>

      <div ref={overlyFormationHeaderRef} className="header__overly z-20 border-t">

        {/* Formations */}
        <div className="container mx-auto pt-4 pb-10 flex">
          <div className="w-1/4">
            <div className="text-gray-900 font-bold text-3xl">Nos formations</div>
            <span className="text-sm text-gray-400">100% en ligne et à votre rythme.</span>
          </div>
          <div className="ml-5 grid grid-cols-2 gap-4 justify-start items-center">

            <div className="header__card py-3 px-6 max-w-sm rounded-lg cursor-pointer flex items-start justify-start hover:bg-purple-100" onClick={(e) => {e.currentTarget.classList.toggle('active')}} >
              <span className="w-8 text-purple-600 h-8 bg-purple-100 rounded-full flex-none mr-3 flex justify-center items-center">
                <IoSchoolSharp />
              </span>
              <div className="">
                <h1 className="text-gray-900 font-semibold mb-2">Formations diplômantes</h1>
                <p className="text-sm ">Apprenez un métier d’avenir grâce à des projets concrets et un mentor individuel.</p>
              </div>
            </div>

            <div className="header__card py-3 px-6 max-w-sm rounded-lg cursor-pointer flex items-start justify-start hover:bg-purple-100" >
              <span className="w-8 text-purple-600 h-8 bg-purple-100 rounded-full flex-none mr-3 flex justify-center items-center">
                <ImBook />
              </span>
              <div className="">
                <h1 className="text-gray-900 font-semibold mb-2">Cours en libre accès</h1>
                <p className="text-sm ">Développez vos connaissances avec plus de 500 cours régulièrement mis à jour.</p>
              </div>
            </div>

            <span className="py-3 px-6"></span>

          </div>
        </div>

      </div>

      <div ref={overlyProgrammeHeaderRef} className="header__overly z-20 border-t">
        {/* Programmes */}
        <div className="container mx-auto pt-4 pb-10 flex">
          <div className="w-1/4">
            <div className="text-gray-900 font-bold text-3xl">Nos programmes</div>
            <span className="text-sm text-gray-400">100% en ligne et à votre rythme.</span>
          </div>
          <div className="ml-5 grid grid-cols-2 gap-4 justify-start items-center">

            <div className="header__card py-3 px-6 max-w-sm rounded-lg cursor-pointer flex items-start justify-start hover:bg-purple-100" onClick={(e) => {e.currentTarget.classList.toggle('active')}} >
              <span className="w-8 text-purple-600 h-8 bg-purple-100 rounded-full flex-none mr-3 flex justify-center items-center">
                <FaDesktop  />
              </span>
              <Link to='/programme/informatique' className="">
                <h1 className="text-gray-900 font-semibold mb-2">Informatiques</h1>
                <p className="text-sm ">Apprenez un métier d’avenir grâce à des projets concrets et un mentor individuel.</p>
              </Link>
            </div>

            <div className="header__card py-3 px-6 max-w-sm rounded-lg cursor-pointer flex items-start justify-start hover:bg-purple-100" >
              <span className="w-8 text-purple-600 h-8 bg-purple-100 rounded-full flex-none mr-3 flex justify-center items-center">
                <AiOutlineAndroid  />
              </span>
              <div className="">
                <h1 className="text-gray-900 font-semibold mb-2">Électronique</h1>
                <p className="text-sm ">Développez vos connaissances avec plus de 500 cours régulièrement mis à jour.</p>
              </div>
            </div>

            <div className="header__card py-3 px-6 max-w-sm rounded-lg cursor-pointer flex items-start justify-start hover:bg-purple-100" onClick={(e) => {e.currentTarget.classList.toggle('active')}} >
              <span className="w-8 text-purple-600 h-8 bg-purple-100 rounded-full flex-none mr-3 flex justify-center items-center">
                <AiFillSound />
              </span>
              <div className="">
                <h1 className="text-gray-900 font-semibold mb-2">Communication</h1>
                <p className="text-sm ">Apprenez un métier d’avenir grâce à des projets concrets et un mentor individuel.</p>
              </div>
            </div>

            <div className="header__card py-3 px-6 max-w-sm rounded-lg cursor-pointer flex items-start justify-start hover:bg-purple-100" >
              <span className="w-8 text-purple-600 h-8 bg-purple-100 rounded-full flex-none mr-3 flex justify-center items-center">
                <BiBuildings />
              </span>
              <div className="">
                <h1 className="text-gray-900 font-semibold mb-2">Architecture et génie civil</h1>
                <p className="text-sm ">Développez vos connaissances avec plus de 500 cours régulièrement mis à jour.</p>
              </div>
            </div>

            <span className="py-3 px-6"></span>

          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
