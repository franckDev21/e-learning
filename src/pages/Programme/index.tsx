import React, { FC } from "react";
import Banner from "../../containers/Banner";
import Layout from "../../containers/Loyout";
import Info from "../../assets/images/info.jpeg";

type Programes = {};

const Programes: FC<Programes> = () => {
  return (
    <Layout>
      <Banner 

      left={<>
        <img src={Info} className="rounded-md" width={500} alt="" />
      </>}

      right={<>
        <div className="ml-4 max-w-md pb-4">
          <h1 className="text-5xl font-bold flex flex-col justify-start items-start">
            <span style={{backgroundColor: '#003667'}} className="text-white py-2 px-4 font-extrabold">Informatiques</span>
          </h1>
  
          <p className="text-white w-8/12 leading-7 my-3">
            Apprenez à apprendre. <br />
            Découvrez les compétences de demain.
            Et prenez votre carrière en main.
          </p>
  
          <button className="bg-white rounded-md text-violet-500 mt-3 px-6 py-3 uppercase text-sm font-semibold">En savoir plus</button>
        </div> 
      </>} />  

      <div className="py-10 bg-white ">
        <div className="container mx-auto flex items-start">
          <div className="w-2/3 "> 
            <span className="h-1 w-20 bg-violet-600 rounded-lg mb-2 inline-block " ></span>
            <h1 className="text-3xl uppercase leading-tight text-left font-semibold" style={{color: '#003667'}} > SOYEZ DE LA PROCHAINE VAGUE AVEC UNE FORMATION À LA FINE POINTE DE LA TECHNOLOGIE!</h1>
            <div style={{height: '1px'}} className='w-full min-w-full '></div>

          </div>
          
          <div className="w-1/2 h-60 ">

          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Programes;
