import React from "react";
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import foto from "../img/mano.png"
import Navbar from "../Navbar";
import "../App.css"

function About(){
    return(

        <div className="About">
        <div className="myFoto">
        <img src={foto} alt="" />
        <div className="myName">Leonardo Lutaif</div>
        <div className="prof">DEV FULLSTACK</div>
      </div>
      <div className="infos">
        <div className="sobre-mim">
          Sobre Mim
        </div>
        <div className="text-sobre">Desenvolvedor fullstack, com foto em front-end. Estou em busca de estágio!</div>
      </div>
      <div className="redes">
        <a href="https://www.linkedin.com/in/leonardolutaif/" className="iconOne"><FaLinkedinIn size={20} color="black"/></a>
        <a href="https://github.com/leolutaif" className="icon"><FaGithub size={20} color="black"/></a>
        <a href="https://www.instagram.com/leolutaif/" className="icon"><FaInstagramSquare size={20} color="black"/></a>
        <a href="https://twitter.com/leo_lfl1" className="icon"><FaTwitter size={20} color="black"/></a>    
      </div>
      <Navbar/>
        </div>

    )
}

export default About