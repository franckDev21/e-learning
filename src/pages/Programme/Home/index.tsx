import React, { FC } from "react";
import Banner from "../../../containers/Banner";
import Layout from "../../../containers/Loyout";
import Info from "../../../assets/images/info.jpeg";
import BannerImg from "../../../assets/images/banner_1.jpeg";
import { BsFillCaretDownFill } from 'react-icons/bs';
import TableComponent from "../../../components/TabComponent";
import Jolie from "../../../assets/images/banner_2.jpeg";

type Programes = {};

const Programes: FC<Programes> = () => {

  

  return (
    <Layout>
      <Banner 
        left={
          <>
            <img src={Jolie} className="w-full absolute z-10 left-0 bottom-0 right-0 h-full object-cover" alt="" />
            <div className="container mx-auto relative z-20 py-10 text-4xl leading font-extrabold ">
              <span style={{color: '#003667'}} className='bg-white px-6 inline-block py-2'>DÉCOUVRE NOS</span> <br />
              <span style={{color: '#003667'}} className='bg-white px-6 inline-block pb-2'>PROGRAMMES</span>
            </div>
          </>
        }
      />
      <div className="py-10 bg-white ">
        <div className="container mx-auto flex items-start">
          <div className="w-2/3 "> 
            <span className="h-1 w-20 bg-orange-400 rounded-lg mb-2 inline-block " ></span>
            <h3 className="text-1.5xl uppercase leading-snug text-left font-semibold" style={{color: '#003667'}} >
              <span className="bg-sky-800 text-white px-2">NAT UNIV</span> T'OFFRE PLUS DE 140 PROGRAMMES DE FORMATION ADAPTÉS AU MARCHÉ DU TRAVAIL D’AUJOURD’HUI ET DE DEMAIN. CHOISIS TON PROGRAMME DANS LA LISTE POUR T'INSCRIRE.
            </h3>
            <div style={{height: '1px'}} className='w-full min-w-full '></div>

          </div>
          
          <div className="w-1/2 h-60 flex flex-col items-end">
            <button className="block px-4 py-3 bg-primary text-white uppercase mb-4 max-w-sm w-full">Devenir Étudiant</button>
            <button className="block px-4 py-3 bg-primary text-white uppercase mb-4 max-w-sm w-full">tÉlÉcharger le guide</button>
          </div>
        </div>

        <div className="container mx-auto flex items-start">
          <TableComponent />
        </div>

      </div>

    </Layout>
  );
};

export default Programes;
