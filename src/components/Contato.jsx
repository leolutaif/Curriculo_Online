import React from "react";
import Navbar from "../Navbar";
import foto from "../img/mano.png"
import {BsFillCloudDownloadFill} from "react-icons/bs"
import {GrLocation} from "react-icons/gr"
import {BsTelephone} from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"


function Contato(){
    return(
        <div className="Cont">
        <div className="fotoCv">
            <img src={foto} alt="" />
            <div className="names">
                <div className="myName">Leonardo Lutaif</div>
                <div className="prof">DEV FULLSTACK</div>
            
            </div>   
            <button className="download"><BsFillCloudDownloadFill size={30}/></button>    
        </div>
        <div className="cnt">
        <div className="formacao">Contato</div>
        <div className="pais">
            <GrLocation size={22}/>
            <div className="line"/>
            <div className="city">Brasil, São Paulo, Sp</div>
        </div>
        <div className="pais">
            <BsTelephone size={22}/>
            <div className="line"/>
            <div className="city">(11) 99881-9990</div>
        </div>
        <div className="pais">
            <HiOutlineMail size={22}/>
            <div className="line"/>
            <div className="city">leo_lutaif@hotmail.com</div>
        </div>
        </div>

        <a href="https://wa.me/11998819990" className="whats">Fale Comigo!</a>

        <Navbar/>
    </div>
    )
}

export default Contato