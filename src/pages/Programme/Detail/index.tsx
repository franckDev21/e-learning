import React, { FC } from "react";
import Banner from "../../../containers/Banner";
import Layout from "../../../containers/Loyout";
import Info from "../../../assets/images/Bureau.webp";
import Dev from "../../../assets/images/Dev.jpeg";
import finance from "../../../assets/images/finance.png";
import BannerImg from "../../../assets/images/informatique.webp";
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
          <div className="container mx-auto relative z-20 py-10 text-5xl leading font-extrabold ">
            <span style={{color: '#003667'}} className='bg-white px-6 inline-block py-2'>{name}</span> <br />
          </div>
        </>
      } />

      <div className="bg-white w-full pt-5">

        <div className="container mx-auto flex justify-between items-start">

          <div className="w-full">
            <h1 className="text-5xl uppercase font-extrabold" style={{color: '#003667'}}>PROGRAMMATION <br /> INFORMATIQUE</h1>
            <span className="w-10 h-1 bg-orange-400 rounded-md inline-block"></span>
            
            <section>
              <h2 className="my-6 text-2xl">Apprenez à concevoir toutes sortes d'applications informatiques, avec divers langages de programmation. Formation de deux ans.</h2>

              <p className="mb-4">
                Apprenez à concevoir des applications informatiques à l'aide de différents langages de programmation, selon le type d'application désiré. Créez des applications commerciales avec différents langages comme Java, C#, Visual Basic et COBOL. Utilisez le réseau local et élaborez des applications autonomes graphiques (Java, C++, Visual Basic) ainsi que des applications internet (HTML, VBScript, Javascript, PHP, ASP). <br /> <br />
                Il sera aussi question des bases de données Access, Microsoft SQL Server et MySQL. <br /> <br />
                L'étudiant réalise de nombreux travaux pratiques sur les équipements informatiques du collège ou à la maison en vue de compléter sa formation théorique <br /> <br />

                Au terme de sa formation, le diplômé sera en mesure de créer, de tester, d'installer et de faire la maintenance d'applications, ainsi que de diagnostiquer des problèmes et de corriger ceux-ci. <br /><br />
                Programme que La Cité est la seule à offrir en français, en Ontario
              </p>

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

              <div className="mb-8 font-semibold ">
                COTE : 51046 <br />
                TITRE DÉCERNÉ : <span className="uppercase">DIPLÔME D'ÉTUDES supérieur DU CAMEROUN</span> <br />
                DURÉE DU PROGRAMME : 2 années, 4 étapes <br />
                CAMPUS : <span className="text-sky-800">Douala - Cameroun</span> <br />
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
                    <h1 className="text-xl opacity-70 italic uppercase font-extrabold" style={{color: '#003667'}}>COURS OBLIGATOIRES</h1>
                  </div>

                </div>

                <div className="p-4 mb-10 grid grid-cols-4 gap-4 justify-items-center justify-between" style={{gridGap: '2rem'}}>
                <CardCourse
                    title="Introduction à la programmation"
                    description=""
                    categorie="Informatique"
                    image={Info}
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
                    title="Algèbre et trigonométrie"
                    description=""
                    categorie="Informatique"
                    image={BannerImg}
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
                    title="Algèbre et trigonométrie"
                    description=""
                    categorie="Informatique"
                    image={finance}
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
                    categorie="Informatique"
                    image={Info}
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
                    <h1 className="text-xl opacity-70 italic uppercase font-extrabold" style={{color: '#003667'}}>UN COURS DE FRANÇAIS LANGUE PREMIÈRE SELON LE RÉSULTAT AU TEST</h1>
                  </div>

                </div>

                <div className="p-4 mb-10 grid grid-cols-4 gap-4 justify-items-center justify-between" style={{gridGap: '2rem'}}>
                  <CardCourse
                    title="Introduction à la programmation"
                    description=""
                    categorie="Informatique"
                    image={Info}
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
                    title="Algèbre et trigonométrie"
                    description=""
                    categorie="Informatique"
                    image={BannerImg}
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
                    title="Algèbre et trigonométrie"
                    description=""
                    categorie="Informatique"
                    image={finance}
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
                    categorie="Informatique"
                    image={Info}
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
