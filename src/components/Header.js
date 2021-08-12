import logo from "../img/logo-pharmacy.png";
import login from "../img/login_1.png";
import registr from "../img/registr_1.png";
import React from "react";



export function Header (){

    
return(
    <div className="head">
    <div className = "log">
      <img className="logo" src={logo} />
      <p>ԴԵՂԵՐԻ ՏԵՂԵԿԱՏՈՒ<br></br>
      drugs.am</p>
    </div>
    
       <nav className="menu">
        <ul className="menu_ul">
        <li>Գլխավոր</li>
        <li>Մեր մասին</li>
        <li>Դեղատներ</li>
        <li>Կապ</li>
      </ul>
      </nav>
     
    <div className="use">
        <div className="login" onClick ={()=>
            document.querySelector('.popup-login').style.display="flex"}>
          <img className="log-in" src={login} />
          <p>մուտք</p>
        </div>
        <div className="registration" onClick={()=>
        document.querySelector('.popup-registr').style.display='flex'
        }>
          <img className="registr" src={registr} />
          <p>գրանցում</p>
        </div>
    </div>
 </div>
)
}