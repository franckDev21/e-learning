import React, { FC, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Img from "../../assets/images/technique-e-learning.jpeg";
import Facebook from "../../assets/images/facebook.png";
import Google from "../../assets/images/goog.png";
import { RiLockPasswordFill } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {

  const [mode,setMode] = useState('LOGIN');
  const [loard,setLoad] = useState(false);

  const navigate = useNavigate();

  const toogleMode = () => {
    if(mode === 'LOGIN'){
      setMode('REGISTER');
    }else{
      setMode('LOGIN')
    }
  }


  const Service = async () => {
    return new Promise<any>((resolve,reject) =>{
      setTimeout(()=>{
        resolve(true)
      },4000)
    });
  }

  const handleSubmitForm = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className="flex min-h-screen overflow-hidden  bg-gray-100">
      <div className="w-1/2">
        <div className="flex justify-center items-center flex-col min-h-screen " style={{backgroundColor: '#003667'}}>
          <div className="pl-5">
            {/* <Link to="/" className="logo uppercase font-semibold text-2xl" style={{color: '#003667'}} >
              <img style={{width: 250, height: 'auto'}} className="mt-4 rounded-lg h-60 " src={Logo} alt="logo" />
            </Link> */}
          </div>
          
          <form onSubmit={handleSubmitForm} className="rounded-md w-10/12 mx-auto p-6 bg-white shadow-md ">
            <h1 className="text-center font-bold text-5xl mb-10" style={{color: '#003667'}} >{mode !== 'LOGIN' ? "Inscription" : "Connexion"}</h1>
            <div className="flex items-center justify-center mb-4 ">
              <button className="mx-1 hover:bg-blue-100 flex items-center opacity-90 px-6 py-2 rounded-md font-bold uppercase border-2 border-blue-500 text-blue-500">
                <span className="mr-3"><img className="w-5 h-5 rounded-full" src={Facebook} alt="" /></span>
                <span>facebook</span>
              </button>
              <button className="mx-1 hover:bg-gray-100 flex items-center justify-center opacity-90 px-8 py-2 rounded-md font-bold uppercase border-2 border-gray-500 text-gray-500">
                <span className="mr-3"><img className="w-5 h-5 " src={Google} alt="" /></span>
                <span>google</span>
              </button>
            </div>
            <div className="flex uppercase items-center justify-center mb-4">
              <span className="w-40 h-0.5 bg-gray-200"></span>
              <span className="mx-4 font-bold text-gray-700">ou</span>
              <span className="w-40 h-0.5 bg-gray-200"></span>
            </div>
            
            <div className="flex flex-col mb-5 relative">
              {/* <label htmlFor="name" className="text-gray-400 mb-2">Nom</label> */}
              <input type="text" placeholder="Entrer votre nom..."  className="px-4 border py-3 border-b rounded-md focus:ring-2  focus:outline-none"/>
              <span className="absolute top-1/2 -translate-y-1/2 right-4"><BiUserCircle/></span>
            </div>

            {mode === 'REGISTER' && 
            <div className="flex flex-col mb-5 relative">
              {/* <label htmlFor="name" className="text-gray-400 mb-2">Email</label> */}
              <input type="email" placeholder="Email..."  className="px-4 py-3 border rounded-md focus:ring-2  focus:outline-none"/>
              <span className="absolute top-1/2 -translate-y-1/2 right-4"><MdEmail/></span>
            </div>}

            <div className="flex flex-col mb-5 relative">
              {/* <label htmlFor="name" className="text-gray-400 mb-2">Nom</label> */}
              <input type="password" placeholder="Entrer votre numero de matricule ..."  className="px-4 border py-3 border-b rounded-md focus:ring-2  focus:outline-none"/>
              <span className="absolute top-1/2 -translate-y-1/2 right-4"><RiLockPasswordFill /></span>
            </div>

            <div className="flex">

            {mode === 'LOGIN' && <span className="text-blue-400 text-sm cursor-pointer hover:underline">Numéro de matricule oubliez ?</span>}

            <span onClick={() => toogleMode()} className="text-gray-700 ml-4 text-sm cursor-pointer hover:underline">
              {mode === 'LOGIN' ? "S'inscrire" : "Se connecter"}
            </span>

            </div>

            <div className="text-center flex items-center justify-center mt-6">
              <button className="mx-1 opacity-90 px-10 py-4 active:scale-95 rounded-md font-bold uppercase  bg-orange-600 text-white">
                {mode === 'LOGIN' ? "S'inscrire" : "Se connecter"} {loard && <span className="load"></span>}
              </button>
            </div>
          </form  >
        </div>
        {children}
      </div>
      <div className="w-1/2 relative overflow-hidden ">
        <div className="absolute w-full h-full bg-gray-800 bg-opacity-50 z-20"></div>
        <img className="absolute object-cover w-full h-full z-10" src={Img} alt="" />
      </div>
    </div>
  );
};

export default AuthLayout;
