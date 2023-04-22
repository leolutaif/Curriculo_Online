import React from "react";
import Navbar from "../Navbar";
import foto from "../img/mano.png"
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { DiReact } from 'react-icons/di';
import { DiJava } from 'react-icons/di';
import { DiPython } from 'react-icons/di';
import { DiMysql } from 'react-icons/di';
import { DiNodejsSmall } from 'react-icons/di';
import { BsFillCloudDownloadFill } from 'react-icons/bs';
import curriculo from "./cv.pdf"


function Cv(){

    return(
        <div className="Cv">
            <div className="fotoCv">
                <img src={foto} alt="" />
                <div className="names">
                    <div className="myName">Leonardo Lutaif</div>
                    <div className="prof">DEV FULLSTACK</div>
                
                </div>   
                <a href={curriculo} download className="download"><BsFillCloudDownloadFill color="black" size={30}/></a>    
            </div>
            <div className="cv-list">
                    <div className="formacao">
                        Formação
                    </div>
                    <div className="inst">
                        Universidade Presbiteriana Mackenzie
                    </div>
                    <div className="curso">
                        Sistemas de Informação
                    </div>
                    <div className="data">
                        2021 - 2025
                    </div>
                    <div className="inst">
                        Etec Mandaqui
                    </div>
                    <div className="curso">
                        Técnico em Administração
                    </div>
                    <div className="data">
                        2018 - 2020
                    </div>
                    <div className="formacao mg">
                        Habilidades
                    </div>
                <div className="habi">
                    <div className="skill">
                        <AiFillHtml5 size={30}/>
                        HTML
                    </div>
                    <div className="skill lf">
                        <DiCss3 size={30}/>
                        CSS
                    </div>
                    <div className="skill lf">
                        <IoLogoJavascript size={30}/>
                        JavaScript
                    </div>
                    <div className="skill lf">
                        <DiReact size={30}/>
                        REACT
                    </div>
                </div>
                <div className="habi">
                    <div className="skill">
                        <DiJava size={30}/>
                        JAVA
                    </div>
                    <div className="skill lf">
                        <DiPython size={30}/>
                        PYTHON
                    </div>
                    <div className="skill lf">
                        <DiMysql size={30}/>
                        MySQL
                    </div>
                    <div className="skill lf">
                        <DiNodejsSmall size={30}/>
                        NODE
                    </div>
                   
                </div>
                    
                </div>
            <Navbar/>
        </div>
    )
}

export default Cv