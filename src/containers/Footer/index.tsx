import React, { FC } from "react";

type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="border-t pt-5 pb-20 bg-white " style={{backgroundColor: '#003667', color: '#fff'}}>
      <div className="container mx-auto flex justify-between items-start pt-4">

      <ul>
        <li className="uppercase font-semibold mb-3">NAT UNIV</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Qui sommes-nous ?</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Financements</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Expérience de formation</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Forum</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Blog</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Presse</li>
      </ul>

      <ul>
        <li className="uppercase font-semibold mb-3">OPPORTUNITÉS</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Nous rejoindre</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Devenir mentor</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Devenir coach carrière</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">
          <span>AIDE</span> <br />
          <div>
            <span></span>
            <span></span>
          </div>
        </li>
      </ul>

      <ul>
        <li className="uppercase font-semibold mb-3">POUR LES ENTREPRISES</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Formation, reconversion et alternance</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">EN PLUS</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Boutique</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Mentions légales</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Conditions générales d'utilisation</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Politique de protection des données personnelles</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Cookies</li>
        <li className="py-2 text-slate-100 opacity-90 font-light">Accessibilité</li>
      </ul>

      <ul>
        <li className="uppercase font-semibold mb-3 text-left">LANGUE</li>
        <li>
          <span className="w-10 h-10 rounded-full bg-slate-100 opacity-90 inline-block mr-4 cursor-pointer"></span>
          <span className="w-10 h-10 rounded-full bg-slate-100 opacity-90 inline-block mr-4 cursor-pointer"></span>
          <span className="w-10 h-10 rounded-full bg-slate-100 opacity-90 inline-block mr-4 cursor-pointer"></span>
        </li>
      </ul>

      </div>
    </footer>
  );
};

export default Footer;
