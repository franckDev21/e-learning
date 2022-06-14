import React, { FC } from "react";
import { BsBookmarks, BsFillCaretDownFill,BsFillCaretLeftFill, BsQuestionCircle } from 'react-icons/bs';
import { AiFillPlayCircle, AiOutlineCheck } from 'react-icons/ai';
import Belle from "../../../assets/images/belle.jpeg";
import Banner2 from "../../../assets/images/banner_2.jpeg";

import "./index.scss";
import Layout from "../../../containers/Loyout";
import Banner from "../../../containers/Banner";
import { useParams } from "react-router-dom";
import BannerCourse from "../../../containers/BannerCour";
import CardAbout from "../../../components/CardAbout";
import { VscSettings } from "react-icons/vsc";
import { IoTimeSharp } from "react-icons/io5";

type CourseDetailProps = {
};

const CourseDetail: FC<CourseDetailProps> = () => {

  const { name } = useParams();

  return (
    <Layout>
      <BannerCourse/>

      <div className="p-1">
        <div className="container mx-auto flex justify-between items-start">
          <div className="w-8/12">

            <div className="mt-10">
              <h1 className="text-2xl font-bold" style={{color: '#003667'}}>Statut du cours</h1> 
              <div className="w-10/12 border mt-3">
                <div className="bg-primary py-2 text-white font-bold px-20" style={{width: '30%'}}>30 %</div>
              </div>
            </div>


            <div className="my-10">
              <h1 className="text-2xl font-bold" style={{color: '#003667'}}>A Propos de ce Cours</h1> 
              <div className="w-10/12 mt-2 text-gray-600">
                Un développeur ou programmeur Web est une personne qui prend un projet Web, qui a été pensée et réfléchie par un client ou une équipe de conception, et la transforme en site Web. Ils le font en écrivant des lignes de code compliqué. Pour les écrire, ils utilisent différents langages avec une spécificité et une utilité pour chacun d’entre eux. 
              </div>
            </div>

            <CardAbout  />
            
            <div className="mt-20 pb-10 col">

              <div className="flex justify-between items-center">
                <h1 className="text-2xl mb-5 font-bold" style={{color: '#003667'}}>Contenu du cours</h1> 
                <span><span>5 Leçons</span>&nbsp;  &nbsp; 8h 30m</span>
              </div>

              <div className="tabs">

                <div className="tab bg-gray-100 text-gray-700 border">
                  <input hidden type="checkbox" id="chck1" />
                  <label className="tab-label relative w-full flex items-center justify-between text-gray-700" htmlFor="chck1">
                    <span>Présentation de la formation</span>
                    <span className="inline-block mr-10 font-light ">2 sessions . 16 min</span>
                  </label>
                  <div className="tab-content px-4">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex justify-between items-center">
                        <AiFillPlayCircle size={20} />
                        <span className="font-light pl-5 inline-block color-primary cursor-pointer underline">1 Présentation du métier de développeur Web</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-light pl-3 color-primary cursor-pointer underline">Aperçu</span>
                        <span className="text-gray-400 pl-4">06:12</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="flex justify-between items-center">
                        <AiFillPlayCircle size={20} />
                        <span className="font-light pl-5 inline-block color-primary cursor-pointer underline">2 Présentation des grandes parties de la formation</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-light pl-3 color-primary cursor-pointer underline">Aperçu</span>
                        <span className="text-gray-400 pl-4">06:12</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="flex justify-between items-center">
                        <AiFillPlayCircle size={20} />
                        <span className="font-light pl-5 inline-block color-primary cursor-pointer underline">3 Présentation du développement frontend</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-light pl-3 color-primary cursor-pointer underline">Aperçu</span>
                        <span className="text-gray-400 pl-4">05:42</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="flex justify-between items-center">
                        <BsQuestionCircle size={20} />
                        <span className="font-light pl-5 inline-block color-primary cursor-pointer underline">Premier quiz</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="tab  bg-gray-100 text-gray-700 border">
                  <input hidden type="checkbox" id="chck2"/>
                  <label className="tab-label relative w-full flex items-center justify-between text-gray-700" htmlFor="chck2">
                    <span>Les avantages de la formation</span>
                    <span className="inline-block mr-10 font-light ">5 sessions . 35 min</span>
                  </label>
                  <div className="tab-content px-4">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex justify-between items-center">
                        <AiFillPlayCircle size={20} />
                        <span className="font-light pl-5 inline-block color-primary cursor-pointer underline">1 Présentation du métier de développeur Web</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-light pl-3 color-primary cursor-pointer underline">Aperçu</span>
                        <span className="text-gray-400 pl-4">06:12</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="flex justify-between items-center">
                        <AiFillPlayCircle size={20} />
                        <span className="font-light pl-5 inline-block color-primary cursor-pointer underline">2 Présentation des grandes parties de la formation</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-light pl-3 color-primary cursor-pointer underline">Aperçu</span>
                        <span className="text-gray-400 pl-4">06:12</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="flex justify-between items-center">
                        <AiFillPlayCircle size={20} />
                        <span className="font-light pl-5 inline-block color-primary cursor-pointer underline">3 Présentation du développement frontend</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-light pl-3 color-primary cursor-pointer underline">Aperçu</span>
                        <span className="text-gray-400 pl-4">05:42</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="flex justify-between items-center">
                        <BsQuestionCircle size={20} />
                        <span className="font-light pl-5 inline-block color-primary cursor-pointer underline">Deuxième quiz</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="tab  bg-gray-100 text-gray-700 border">
                  <input hidden type="checkbox" id="chck3"/>
                  <label className="tab-label relative w-full flex items-center justify-between text-gray-700" htmlFor="chck3">
                    <span>Introduction aux technologies du web</span>
                    <span className="inline-block mr-10 font-light ">3 sessions . 32 min</span>
                  </label>
                  <div className="tab-content px-4">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex justify-between items-center">
                        <AiFillPlayCircle size={20} />
                        <span className="font-light pl-5 inline-block color-primary cursor-pointer underline">1 Présentation du métier de développeur Web</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-light pl-3 color-primary cursor-pointer underline">Aperçu</span>
                        <span className="text-gray-400 pl-4">06:12</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="flex justify-between items-center">
                        <AiFillPlayCircle size={20} />
                        <span className="font-light pl-5 inline-block color-primary cursor-pointer underline">2 Présentation des grandes parties de la formation</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-light pl-3 color-primary cursor-pointer underline">Aperçu</span>
                        <span className="text-gray-400 pl-4">06:12</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="flex justify-between items-center">
                        <AiFillPlayCircle size={20} />
                        <span className="font-light pl-5 inline-block color-primary cursor-pointer underline">3 Présentation du développement frontend</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-light pl-3 color-primary cursor-pointer underline">Aperçu</span>
                        <span className="text-gray-400 pl-4">05:42</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="flex justify-between items-center">
                        <BsQuestionCircle size={20} />
                        <span className="font-light pl-5 inline-block color-primary cursor-pointer underline">Troisième quiz</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="w-4/12 flex flex-col">
            <div className="w-10/12 rounded-md bg-white shadow-md  -translate-y-80">
              <div className="h-60 cursor-pointer relative flex justify-center items-center">
                <img src={Belle} className="bg-gray-800 absolute w-full h-full top-0 left-0 right-0 bottom-0 z-10" alt="belle"  />
                <div className="bg-gray-500 bg-opacity-70 absolute w-full h-full top-0 left-0 right-0 bottom-0 z-20"></div>
                <span className="relative z-50"><AiFillPlayCircle size={80} color="#fff" /></span>
              </div>

              <div className="px-8 py-4 text-gray-600">
                <div className="flex mb-4 flex-col items-start justify-between">
                  <div className="flex items-center mb-4 w-full justify-between">
                    <span className="flex items-center justify-between">
                      <span className="pr-2"><VscSettings /></span>
                      <span>Niveau</span>
                    </span>
                    <span>Novice</span>
                  </div>
                  <span className="inline-block w-full bg-gray-400" style={{height: 1}}></span>
                </div>

                <div className="flex mb-4 flex-col items-start justify-between">
                  <div className="flex items-center mb-4 w-full justify-between">
                    <span className="flex items-center justify-between">
                      <span className="pr-2"><IoTimeSharp /></span>
                      <span>Durée</span>
                    </span>
                    <span>8.5 heures</span>
                  </div>
                  <span className="inline-block w-full bg-gray-400" style={{height: 1}}></span>
                </div>

                <div className="flex mb-4 flex-col items-start justify-between">
                  <div className="flex items-center mb-4 w-full justify-between">
                    <span className="flex items-center justify-between">
                      <span className="pr-2"><AiFillPlayCircle /></span>
                      <span>Lectures</span>
                    </span>
                    <span>5 lectures</span>
                  </div>
                  <span className="inline-block w-full bg-gray-400" style={{height: 1}}></span>
                </div>

                <div className="flex mb-4 flex-col items-start justify-between">
                  <div className="flex items-center mb-4 w-full justify-between">
                    <span className="flex items-center justify-between">
                      <span className="pr-2"><BsBookmarks /></span>
                      <span>Sujet</span>
                    </span>
                    <span>Informatique</span>
                  </div>
                </div>
                
                <div className="w-full">
                  <button className="px-3 w-full inline-block rounded-md py-4 bg-primary text-white font-semibold">Poursuivre la leçon</button>
                  <button className="px-3 w-full mt-4 inline-block rounded-md py-4 bg-gray-100 text-gray-600 hover:bg-orange-400 hover:text-white transition-all font-semibold">Cours Achevé</button>
                </div>
              </div>
            </div>
            <div className="px-8 rounded-md w-10/12 py-4 mt-4 border bg-white  -translate-y-80">
              <h1 className="text-xl font-semibold mb-2"  style={{color: '#003667'}}>Catégories de Cours</h1>

              <ul>
                <li className="my-3 text-gray-500">ADMINISTRATION</li>
                <li className="my-3 text-gray-500">INFORMATIQUE</li>
                <li className="my-3 text-gray-500">SCIENCES DE LA SANTÉ</li>
                <li className="my-3 text-gray-500"> ÉLECTRONIQUE</li>
                <li className="my-3 text-gray-500">COMMUNICATION</li>
              </ul>
            </div>

            <div className="px-8  mb-5rounded-md w-10/12 py-4 mt-4 border bg-white  -translate-y-80">
              <h1 className="text-xl font-semibold mb-2"  style={{color: '#003667'}}>Cours connexes</h1>
              <div className="mt-3 flex justify-start items-start">
                <div className="w-10/12 h-20 overflow-hidden rounded-md relative">
                  <img src={Banner2} className="w-full absolute z-10 left-0 bottom-0 right-0 h-full object-cover" alt="" />
                </div>
                <div className="pl-2">
                  <p className="text-sm font-semibold" style={{color: '#003667'}}>Les métiers du bureau d’étude dans</p>
                  <span className="text-sm py-1 mt-2 inline-block font-bold px-2 rounded-md text-white bg-orange-400">Voir le cour</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;
