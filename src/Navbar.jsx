import React from "react";
import {Link} from "react-router-dom"

function Navbar(){

    function SobreMim(){
        setTimeout(() => {
            document.getElementById("sb").style.borderWidth= "0 0 3px";
            document.getElementById("cv").style.borderWidth= "0";
            document.getElementById("ct").style.borderWidth= "0";
            document.getElementById("sb").style.height= "57px";
            document.getElementById("cv").style.height= "60px";
            document.getElementById("ct").style.height= "60px";
            document.getElementById("sb").style.borderStyle= "solid";
            document.getElementById("cv").style.borderStyle= "none";
            document.getElementById("ct").style.borderStyle= "none";
        }, 0);
    }
    function Cv(){
        setTimeout(() => {
            document.getElementById("sb").style.borderWidth= "0";
            document.getElementById("cv").style.borderWidth= "0 0 3px";
            document.getElementById("ct").style.borderWidth= "0";
            document.getElementById("sb").style.height= "60px";
            document.getElementById("cv").style.height= "57px";
            document.getElementById("ct").style.height= "60px";
            document.getElementById("sb").style.borderStyle= "none";
            document.getElementById("cv").style.borderStyle= "solid";
            document.getElementById("ct").style.borderStyle= "none";
        }, 0);
    }
    function Ct(){
        setTimeout(() => {
            document.getElementById("sb").style.borderWidth= "0";
            document.getElementById("cv").style.borderWidth= "0";
            document.getElementById("ct").style.borderWidth= "0 0 3px";
            document.getElementById("sb").style.height= "60px";
            document.getElementById("cv").style.height= "60px";
            document.getElementById("ct").style.height= "57px";
            document.getElementById("sb").style.borderStyle= "none";
            document.getElementById("cv").style.borderStyle= "none";
            document.getElementById("ct").style.borderStyle= "solid";
        }, 0);
    }
    
    return(
        <div className="navbar">
        <Link onClick={SobreMim} id="sb" to="/" className="Aba">Sobre mim</Link>
        <Link onClick={Cv} id="cv" to="/curriculo" className="Aba">Currículo</Link>
        <Link onClick={Ct} id="ct" to="/contato" className="Aba">Contato</Link>
      </div>
    )
}

export default Navbar