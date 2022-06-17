import React, { FC } from "react";
import Banner from "../../../containers/Banner";
import Layout from "../../../containers/Loyout";
import Info from "../../../assets/images/Bureau.webp";
import Dev from "../../../assets/images/Dev.jpeg";
import finance from "../../../assets/images/finance.png";
import fenetre from "../../../assets/images/fenetre.jpeg";
import menuisier_1 from "../../../assets/images/menuserie_1.jpeg";
import menuisier_2 from "../../../assets/images/menuisier_2.jpeg";
import menuisier_3 from "../../../assets/images/menuisier_3.png";
import BannerImg from "../../../assets/images/bg.jpeg";
import { BsCheck2Circle,BsFillCalendarDateFill } from 'react-icons/bs';
import { GrCertificate } from 'react-icons/gr';

import TableComponent from "../../../components/TabComponent";

import "./index.scss";
import { useParams } from "react-router-dom";
import CardCourse from "../../../components/CardCourse";

type ProgrameProps = {};

const ProgrameDetail: FC<ProgrameProps> = () => {

  const { name } = useParams();

  return (
    <Layout>
      <Banner left={
        <>
          <img src={BannerImg} className="w-full absolute z-10 left-0 bottom-0 right-0 h-full object-cover" alt=""  />
          <div style={{zIndex: 1004}} className="container mx-auto relative z-20 py-10 text-5xl leading font-extrabold ">
            <span style={{color: '#003667'}} className='bg-white px-6 inline-block py-2'>{name}</span> <br />
          </div>
        </>
      } />

      <div className="bg-white w-full pt-5">

        <div className="container mx-auto flex justify-between items-start">

          <div className="w-full">
            <h1 className="text-5xl uppercase font-extrabold" style={{color: '#003667'}}> <br /> Boiseries</h1>
            <span className="w-10 h-1 bg-orange-400 rounded-md inline-block"></span>
            
            <section>
              <h1 className="text-3xl mb-4 uppercase font-extrabold mt-5" style={{color: '#003667'}}>Présentation du programme de formation</h1>

              <div className="flex flex-col mb-6">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-900">
                                <thead className="bg-gray-100 bg-primary">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <label htmlFor="checkbox-all" className="text-gray-400">Nº</label>
                                            </div>
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400">
                                          rubriques
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400">
                                          Information
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    
                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="p-4 w-4">
                                            <div className="flex items-center">
                                              <label htmlFor="checkbox-all" className="text-white">1</label>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Nom de la formation</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">boiseries</td>
                                    </tr>

                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="p-4 w-4">
                                            <div className="flex items-center">
                                              <label htmlFor="checkbox-all" className="text-white">2</label>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Région </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Douale - Cameroun</td>
                                    </tr>

                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="p-4 w-4">
                                            <div className="flex items-center">
                                              <label htmlFor="checkbox-all" className="text-white">3</label>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">industrielle </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Menuiserie, Boiseries</td>
                                    </tr>

                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="p-4 w-4">
                                            <div className="flex items-center">
                                              <label htmlFor="checkbox-all" className="text-white">4</label>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Nature de la formation </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">cours de technicien</td>
                                    </tr>

                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="p-4 w-4">
                                            <div className="flex items-center">
                                              <label htmlFor="checkbox-all" className="text-white">5</label>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Â ge minimum requis</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">17 ans</td>
                                    </tr>

                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="p-4 w-4">
                                            <div className="flex items-center">
                                              <label htmlFor="checkbox-all" className="text-white">6</label>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Diplôme ou niveau scolaire requis</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Lycée</td>
                                    </tr>

                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="p-4 w-4">
                                            <div className="flex items-center">
                                              <label htmlFor="checkbox-all" className="text-white">7</label>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Lieux de formation</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">VTC</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
              </div>

              <h1 className="text-3xl mb-4 uppercase font-extrabold mt-5" style={{color: '#003667'}}>Durée de la formation</h1>

              <div className="flex flex-col mb-6">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-900">
                                <thead className="bg-gray-100 bg-primary">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <label htmlFor="checkbox-all" className="text-gray-400">Nº</label>
                                            </div>
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400">
                                          rubriques
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400">
                                          Information
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    
                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="p-4 w-4">
                                            <div className="flex items-center">
                                              <label htmlFor="checkbox-all" className="text-white">1</label>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Durée totale de la formation ou de la période</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">1 an</td>
                                    </tr>

                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="p-4 w-4">
                                            <div className="flex items-center">
                                              <label htmlFor="checkbox-all" className="text-white">2</label>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Durée de la formation dans le centre </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">1,296 heur</td>
                                    </tr>

                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="p-4 w-4">
                                            <div className="flex items-center">
                                              <label htmlFor="checkbox-all" className="text-white">3</label>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Durée du stage </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">216 heurs</td>
                                    </tr>

                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="p-4 w-4">
                                            <div className="flex items-center">
                                              <label htmlFor="checkbox-all" className="text-white">4</label>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Nombre total d'heures </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">10,512 heurs</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
              </div>


              <div className="flex justify-start items-center">
                <button className="px-3 rounded-md bg-gray-600 py-1 text-white">DISPONIBILITÉ :</button>
                <div className="flex items-center">
                  <div className="flex items-center ml-3 my-10">
                    <span className="mr-1"><BsCheck2Circle size={20} className='text-blue-600' /></span>
                    <span> OUVERT SEPTEMBRE 2022</span>
                  </div>
                  <div className="flex items-center ml-3 my-10">
                    <span className="mr-1"><BsCheck2Circle size={20} className='text-blue-600' /></span>
                    <span> OUVERT OCTOBRE 2022</span>
                  </div>
                  <div className="flex  items-center ml-3 my-10">
                    <span className="mr-1"><BsCheck2Circle size={20}className='text-blue-600' /></span>
                    <span> OUVERT DECEMBRE 2022</span>
                  </div>
                </div>
              </div>


              <div >
                <h1 className="text-3xl mb-10 uppercase font-extrabold" style={{color: '#003667'}}>AUTRES PROGRAMMES LIÉS AU DOMAINE</h1>
                <div className="pl-4 flex items-center justify-start mb-10">
                  <div className="border w-1/3 p-4">
                    <div className="my-4 font-semibold cursor-pointer hover:underline">Soutien technique en informatique</div>
                    <span className="block w-full h-0.5 bg-gray-200"></span>

                    <div className="my-4 font-semibold flex items-start justify-between">
                      <span className="mr-4"><GrCertificate size={30} /></span>
                      <span>Certificat d'études supérieur du CAMEROUN</span>
                    </div>
                    <span className="block w-full h-0.5 bg-gray-200"></span>

                    <div className="my-4 flex items-start justify-start font-light text-gray-400">
                      <span className="mr-4"><BsFillCalendarDateFill size={30} className='text-blue-600' /></span>
                      <span>
                        28 Semaines <br />
                        2  2 étapes 
                      </span>
                    </div>
                  </div>
                  <div className="border w-1/3 p-4">
                    <div className="my-4 font-semibold cursor-pointer hover:underline">Techniques des systèmes informatiques</div>
                    <span className="block w-full h-0.5 bg-gray-200"></span>

                    <div className="my-4 font-semibold flex items-start justify-between">
                      <span className="mr-4"><GrCertificate size={30} /></span>
                      <span>Certificat d'études supérieur du CAMEROUN</span>
                    </div>
                    <span className="block w-full h-0.5 bg-gray-200"></span>

                    <div className="my-4 flex items-start justify-start font-light text-gray-400">
                      <span className="mr-4"><BsFillCalendarDateFill size={30} className='text-blue-600' /></span>
                      <span>
                        28 Semaines <br />
                        2  2 étapes 
                      </span>
                    </div>
                  </div>
                  <div className="border w-1/3 p-4">
                    <div className="my-4 font-semibold cursor-pointer hover:underline">Soutien technique en informatique</div>
                    <span className="block w-full h-0.5 bg-gray-200"></span>

                    <div className="my-4 font-semibold flex items-start justify-between">
                      <span className="mr-4"><GrCertificate size={30} /></span>
                      <span>Certificat d'études supérieur du CAMEROUN</span>
                    </div>
                    <span className="block w-full h-0.5 bg-gray-200"></span>

                    <div className="my-4 flex items-start justify-start font-light text-gray-400">
                      <span className="mr-4"><BsFillCalendarDateFill size={30} className='text-blue-600' /></span>
                      <span>
                        2 années <br />
                        4 étapes 
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-3xl mb-10 uppercase font-extrabold" style={{color: '#003667'}}>CHEMINEMENT DU PROGRAMME</h1>

                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 mr-4 bg-blue-500 text-white rounded-full text-4xl flex justify-center items-center font-bold">1</div>
                  <div className="flex flex-col justify-start items-start">
                    <h1 className="text-3xl uppercase font-extrabold" style={{color: '#003667'}}> ÉTAPE 1 </h1>
                    <span className="block w-10/12 h-0.5 bg-gray-200"></span>
                    <h1 className="text-xl opacity-70 italic uppercase font-extrabold" style={{color: '#003667'}}>Module commun</h1>
                  </div>

                </div>

                <div className="p-4 mb-10 grid grid-cols-4 gap-4 justify-items-center justify-between" style={{gridGap: '2rem'}}>
                  <CardCourse
                    title="Affaire civiques"
                    description=""
                    categorie="Menuiserie"
                    image={fenetre}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Koto Eric"
                    showPopUp={false}
                  >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN LIGNE</span>
                    </span>
                  </CardCourse>

                  <CardCourse
                    title="Entrepreneuriat"
                    description=""
                    categorie="Menuiserie"
                    image={menuisier_1}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Mr Kevin"
                    showPopUp={false}
                  >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN CLASSE</span>
                    </span>
                  </CardCourse>

                  <CardCourse
                    title="conception autonome (par chaque commerce)"
                    description=""
                    categorie="Menuiserie"
                    image={menuisier_2}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Mr Kevin"
                    showPopUp={false}
                    >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN LIGNE</span>
                    </span>
                  </CardCourse>

                  <CardCourse
                    title="Introduction à la gestion d'un système d'exploitation"
                    description=""
                    categorie="Menuiserie"
                    image={menuisier_3}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Mr Kevin"
                    showPopUp={false}
                    >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN CLASSE</span>
                    </span>
                  </CardCourse>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 mr-4 bg-blue-500 text-white rounded-full text-4xl flex justify-center items-center font-bold">2</div>
                  <div className="flex flex-col justify-start items-start">
                    <h1 className="text-3xl uppercase font-extrabold" style={{color: '#003667'}}> ÉTAPE 2 </h1>
                    <span className="block w-10/12 h-0.5 bg-gray-200"></span>
                    <h1 className="text-xl opacity-70 italic uppercase font-extrabold" style={{color: '#003667'}}>Module de base</h1>
                  </div>

                </div>

                <div className="p-4 mb-10 grid grid-cols-4 gap-4 justify-items-center justify-between" style={{gridGap: '2rem'}}>
                <CardCourse
                    title="Affaire civiques"
                    description=""
                    categorie="Menuiserie"
                    image={fenetre}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Koto Eric"
                    showPopUp={false}
                  >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN LIGNE</span>
                    </span>
                  </CardCourse>

                  <CardCourse
                    title="Entrepreneuriat"
                    description=""
                    categorie="Menuiserie"
                    image={menuisier_1}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Mr Kevin"
                    showPopUp={false}
                  >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN CLASSE</span>
                    </span>
                  </CardCourse>

                  <CardCourse
                    title="conception autonome (par chaque commerce)"
                    description=""
                    categorie="Menuiserie"
                    image={menuisier_2}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Mr Kevin"
                    showPopUp={false}
                    >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN LIGNE</span>
                    </span>
                  </CardCourse>

                  <CardCourse
                    title="Introduction à la gestion d'un système d'exploitation"
                    description=""
                    categorie="Menuiserie"
                    image={menuisier_3}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Mr Kevin"
                    showPopUp={false}
                    >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN CLASSE</span>
                    </span>
                  </CardCourse>

                </div>

                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 mr-4 bg-blue-500 text-white rounded-full text-4xl flex justify-center items-center font-bold">3</div>
                  <div className="flex flex-col justify-start items-start">
                    <h1 className="text-3xl uppercase font-extrabold" style={{color: '#003667'}}> ÉTAPE 3 </h1>
                    <span className="block w-10/12 h-0.5 bg-gray-200"></span>
                    <h1 className="text-xl opacity-70 italic uppercase font-extrabold" style={{color: '#003667'}}>Module avancée</h1>
                  </div>

                </div>

                <div className="p-4 mb-10 grid grid-cols-4 gap-4 justify-items-center justify-between" style={{gridGap: '2rem'}}>
                <CardCourse
                    title="Affaire civiques"
                    description=""
                    categorie="Menuiserie"
                    image={fenetre}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Koto Eric"
                    showPopUp={false}
                  >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN LIGNE</span>
                    </span>
                  </CardCourse>

                  <CardCourse
                    title="Entrepreneuriat"
                    description=""
                    categorie="Menuiserie"
                    image={menuisier_1}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Mr Kevin"
                    showPopUp={false}
                  >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN CLASSE</span>
                    </span>
                  </CardCourse>

                  <CardCourse
                    title="conception autonome (par chaque commerce)"
                    description=""
                    categorie="Menuiserie"
                    image={menuisier_2}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Mr Kevin"
                    showPopUp={false}
                    >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN LIGNE</span>
                    </span>
                  </CardCourse>

                  <CardCourse
                    title="Introduction à la gestion d'un système d'exploitation"
                    description=""
                    categorie="Menuiserie"
                    image={menuisier_3}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Mr Kevin"
                    showPopUp={false}
                    >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN CLASSE</span>
                    </span>
                  </CardCourse>

                </div>

                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 mr-4 bg-blue-500 text-white rounded-full text-4xl flex justify-center items-center font-bold">4</div>
                  <div className="flex flex-col justify-start items-start">
                    <h1 className="text-3xl uppercase font-extrabold" style={{color: '#003667'}}> ÉTAPE 4 </h1>
                    <span className="block w-10/12 h-0.5 bg-gray-200"></span>
                    <h1 className="text-xl opacity-70 italic uppercase font-extrabold" style={{color: '#003667'}}>Module pratique</h1>
                  </div>

                </div>

                <div className="p-4 mb-10 grid grid-cols-4 gap-4 justify-items-center justify-between" style={{gridGap: '2rem'}}>
                <CardCourse
                    title="Affaire civiques"
                    description=""
                    categorie="Menuiserie"
                    image={fenetre}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Koto Eric"
                    showPopUp={false}
                  >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN LIGNE</span>
                    </span>
                  </CardCourse>

                  <CardCourse
                    title="Entrepreneuriat"
                    description=""
                    categorie="Menuiserie"
                    image={menuisier_1}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Mr Kevin"
                    showPopUp={false}
                  >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN CLASSE</span>
                    </span>
                  </CardCourse>

                  <CardCourse
                    title="conception autonome (par chaque commerce)"
                    description=""
                    categorie="Menuiserie"
                    image={menuisier_2}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Mr Kevin"
                    showPopUp={false}
                    >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN LIGNE</span>
                    </span>
                  </CardCourse>

                  <CardCourse
                    title="Introduction à la gestion d'un système d'exploitation"
                    description=""
                    categorie="Menuiserie"
                    image={menuisier_3}
                    imgProf={Dev}
                    classColor="bg-orange-400"
                    startNumber={['2','4','4']}
                    profName="Mr Kevin"
                    showPopUp={false}
                    >
                    <span className="text-xs w-full flex items-center mt-2">
                      <span>MODES DE LIVRAISON</span> 
                      <span className="w-0.5 h-4 bg-orange-400 inline-block mx-2"></span>
                      <span>EN CLASSE</span>
                    </span>
                  </CardCourse>

                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </Layout> 
  );
};

export default ProgrameDetail;
