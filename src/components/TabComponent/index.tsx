import React, { FC } from "react";
import { BsFillCaretDownFill } from 'react-icons/bs';

import "./index.scss";

type TableComponentProps = {};

const TableComponent: FC<TableComponentProps> = () => {

  const toggleTr = (e:any,idTab: string) => {
    if(e.currentTarget.classList.contains('cliquable')){
      const element = window.document.querySelector(`#${idTab}`);
      element?.classList.toggle('active');
      e.currentTarget.querySelector('.btn-toggle')?.classList.toggle('active');
      console.log(element);
      
    }
  }

  return (
    <table className="tab-component w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
      <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4 rounded-tl-md w-1/6">Programmes</th>
          <th scope="col" className="px-6 py-3 w-1/6">DURÉE</th>
          <th scope="col" className="px-6 py-3 w-1/6">FRAIS/ÉTAPE</th>
          <th scope="col" className="px-6 py-3 w-1/6">CAMPUS</th>
          <th scope="col" className="px-6 py-3 w-1/6">Date debut</th>
          <th scope="col" className="px-6 py-3 w-1/6 rounded-tr-md">action</th>
        </tr>
      </thead>
      <tbody className="text-primary pb-4">
        <tr className=" bg-slate-100">
          <td className="overflow-hidden pt-6 cliquable" colSpan={6} onClick={(e) => toggleTr(e,'tab')}>
            <span className="flex cursor-pointer justify-between uppercase text-xl font-bold">
              <span className="px-3">Administration</span>
              <span id="btn-toggle" className=" w-4 h-4 pr-3 btn-toggle mr-4"><BsFillCaretDownFill size={16} /></span>
            </span>
            <div className="mx-2 tab-component__table" id="tab">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  mt-4" style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">Administration des affaires</span>
                  <span  className="px-6 py-3 w-1/6">3 années</span>
                  <span  className="px-6 py-3 w-1/6">1 998,31 FCFA</span>
                  <span  className="px-6 py-3 w-1/6">Douala - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">20 Septembre 2022</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  " style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">Commerce - finance</span>
                  <span  className="px-6 py-3 w-1/6">2 années</span>
                  <span  className="px-6 py-3 w-1/6">1 998,31 $</span>
                  <span  className="px-6 py-3 w-1/6">Douala - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">21 Janvier 2023</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  " style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">Pratiques en administration de bureau</span>
                  <span  className="px-6 py-3 w-1/6">1 année</span>
                  <span  className="px-6 py-3 w-1/6">1 998,31 FCFA</span>
                  <span  className="px-6 py-3 w-1/6">Douala - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">21 Janvier 2023</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr className=" bg-slate-100">
          <td className="overflow-hidden pt-6 cliquable" colSpan={6} onClick={(e) => toggleTr(e,'tab1')}>
            <span className="flex cursor-pointer justify-between uppercase text-xl font-bold">
              <span className="px-3">Informatique</span>
              <span id="btn-toggle" className=" w-4 h-4 pr-3 btn-toggle mr-4"><BsFillCaretDownFill size={16} /></span>
            </span>
            <div className="mx-2 tab-component__table" id="tab1">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  mt-4" style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">Intelligence artificielle appliquée</span>
                  <span  className="px-6 py-3 w-1/6">1 année</span>
                  <span  className="px-6 py-3 w-1/6">100 998,31 FCFA</span>
                  <span  className="px-6 py-3 w-1/6">Yaoundé - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">20 Septembre 2022</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  " style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">Programmation informatique</span>
                  <span  className="px-6 py-3 w-1/6">2 années</span>
                  <span  className="px-6 py-3 w-1/6">200 998,31 FCFA</span>
                  <span  className="px-6 py-3 w-1/6">Douala - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">10 Septembre 2022</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  " style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">informatiques - cybersécurité et réseautique</span>
                  <span  className="px-6 py-3 w-1/6">3 années</span>
                  <span  className="px-6 py-3 w-1/6">300 998,31 FCFA</span>
                  <span  className="px-6 py-3 w-1/6">Douala - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">10 Octobre 2022</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr className=" bg-slate-100">
          <td className="overflow-hidden pt-6 cliquable" colSpan={6} onClick={(e) => toggleTr(e,'tab2')}>
            <span className="flex cursor-pointer justify-between uppercase text-xl font-bold">
              <span className="px-3">SCIENCES DE LA SANTÉ</span>
              <span id="btn-toggle" className=" w-4 h-4 pr-3 btn-toggle mr-4"><BsFillCaretDownFill size={16} /></span>
            </span>
            <div className="mx-2 tab-component__table" id="tab2">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  mt-4" style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">Hygiène dentaire</span>
                  <span  className="px-6 py-3 w-1/6">1 année</span>
                  <span  className="px-6 py-3 w-1/6">100 998,31 FCFA</span>
                  <span  className="px-6 py-3 w-1/6">Douala - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">03 Septembre 2022</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  " style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">Gestion de la nutrition et des services alimentaires</span>
                  <span  className="px-6 py-3 w-1/6">2 années</span>
                  <span  className="px-6 py-3 w-1/6">200 998,31 FCFA</span>
                  <span  className="px-6 py-3 w-1/6">Douala - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">10 Septembre 2022</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  " style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">Soins infirmiers auxiliaires</span>
                  <span  className="px-6 py-3 w-1/6">3 années</span>
                  <span  className="px-6 py-3 w-1/6">300 998,31 FCFA</span>
                  <span  className="px-6 py-3 w-1/6">Douala - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">10 Octobre 2022</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr className=" bg-slate-100">
          <td className="overflow-hidden pt-6 cliquable" colSpan={6} onClick={(e) => toggleTr(e,'tab3')}>
            <span className="flex cursor-pointer justify-between uppercase text-xl font-bold">
              <span className="px-3">ÉLECTRONIQUE</span>
              <span id="btn-toggle" className=" w-4 h-4 pr-3 btn-toggle mr-4"><BsFillCaretDownFill size={16} /></span>
            </span>
            <div className="mx-2 tab-component__table" id="tab3">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  mt-4" style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">Techniques du génie électronique</span>
                  <span  className="px-6 py-3 w-1/6">2 année</span>
                  <span  className="px-6 py-3 w-1/6">100 998,31 FCFA</span>
                  <span  className="px-6 py-3 w-1/6">Douala - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">03 Septembre 2022</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  " style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">Technologie du génie électronique</span>
                  <span  className="px-6 py-3 w-1/6">2 années</span>
                  <span  className="px-6 py-3 w-1/6">200 998,31 FCFA</span>
                  <span  className="px-6 py-3 w-1/6">Douala - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">10 Septembre 2022</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr className=" bg-slate-100">
          <td className="overflow-hidden pt-6 cliquable" colSpan={6} onClick={(e) => toggleTr(e,'tab4')}>
            <span className="flex cursor-pointer justify-between uppercase text-xl font-bold">
              <span className="px-3">COMMUNICATION</span>
              <span id="btn-toggle" className=" w-4 h-4 pr-3 btn-toggle mr-4"><BsFillCaretDownFill size={16} /></span>
            </span>
            <div className="mx-2 tab-component__table" id="tab4">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  mt-4" style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">Publicité et communication marketing</span>
                  <span  className="px-6 py-3 w-1/6">2 année</span>
                  <span  className="px-6 py-3 w-1/6">100 998,31 FCFA</span>
                  <span  className="px-6 py-3 w-1/6">Douala - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">03 Septembre 2022</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  " style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">Relations publiques</span>
                  <span  className="px-6 py-3 w-1/6">2 années</span>
                  <span  className="px-6 py-3 w-1/6">200 998,31 FCFA</span>
                  <span  className="px-6 py-3 w-1/6">Douala - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">10 Septembre 2022</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('tab ')
                }}
                className="w-full  " style={{backgroundColor: '#29517b22'}}>
                <div className="w-full items-center flex">
                  <span  className="p-4 rounded-tl-md w-1/6">Techniques de médias et communications numériques</span>
                  <span  className="px-6 py-3 w-1/6">3 années</span>
                  <span  className="px-6 py-3 w-1/6">300 998,31 FCFA</span>
                  <span  className="px-6 py-3 w-1/6">Douala - Cameroun</span>
                  <span  className="px-6 py-3 w-1/6">10 Octobre 2022</span>
                  <span  className="px-6 py-3 w-1/6 rounded-tr-md">
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      console.log(e)
                    }} className="px-4 py-2 rounded-md bg-orange-400 text-white">commencer</button>
                  </span>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;
