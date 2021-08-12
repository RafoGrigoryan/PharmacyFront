import { useState } from "react"

export function PopupRegistr(){
   const [value,setvalue]= useState("");

   function handleRegisterSubmit() {
       const name = document.querySelector(".name-input").value;
       const surname = document.querySelector(".surname-input").value;
       const email = document.querySelector(".email-input").value;
       const login = document.querySelector(".login-input").value;
       const password = document.querySelector(".password-input").value;
       const registerData={
           name,
           surname,
           email,
           login,
           password
       }
       const userDataJson = JSON.stringify(registerData);
       fetch("http/localhost:8080/create/user",{
           method:'POST',
           body:userDataJson
       }
       ).then(res=>console.log(res.text))
   }

    return(
        <div className="popup-registr">
            <div className="popup">
                <div className = "close">
                    <button onClick={()=>
                    document.querySelector('.popup-registr').style.display='none'
                    }>X</button>
                </div>
                <div className="title"> 
                <p>registration</p>
                </div>
                <div className="inputs">

                    <div>
                        <p>name</p>
                        <input type="text" placeholder="name" className="name-input"onClick={()=>{
                        document.querySelector('.popup-registr .popup .inputs div .surname').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .email').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .login').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .repeat-password').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .password').style.display='none'    
                        document.querySelector('.popup-registr .popup .inputs div .name').style.display='inline-block'
                        }}/>
                        <pre className="name">name must not exceed 20 characters</pre>
                        </div>

                    <div>
                        <p>surname</p>
                        <input type="text" placeholder="surname" className="surname-input" onClick={()=>{
                         document.querySelector('.popup-registr .popup .inputs div .name').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .email').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .login').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .repeat-password').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .password').style.display='none'   
                        document.querySelector('.popup-registr .popup .inputs div .surname').style.display='inline-block'
                        }}/>
                        <pre className="surname">surname must not exceed 20 characters</pre>
                        </div>

                    <div>
                        <p>email</p>
                        <input type="email" placeholder="email" className="email-input" onClick={()=>{
                         document.querySelector('.popup-registr .popup .inputs div .name').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .surname').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .login').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .repeat-password').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .password').style.display='none'
                        document.querySelector('.popup-registr .popup .inputs div .email').style.display='inline-block'
                        }}/>
                        <pre className="email">mail must not exceed 30 characters</pre>
                        </div>

                    <div>
                        <p>login</p>
                        <input type="text" placeholder="login" className="login-input" onClick={()=>{
                       document.querySelector('.popup-registr .popup .inputs div .name').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .surname').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .email').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .repeat-password').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .password').style.display='none'
                        document.querySelector('.popup-registr .popup .inputs div .login').style.display='inline-block'
                        }}/>
                         <pre className="login">login must not exceed 30 characters</pre>
                        </div>

                    <div>
                        
                        <p>password</p>
                        <input type="password" placeholder="password" className="password-input"    
                        onClick={()=>{
                        document.querySelector('.popup-registr .popup .inputs div .name').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .surname').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .email').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .login').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .repeat-password').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .password').style.display='inline-block'
                        }}/>
                        <pre className="password">mail must not exceed 30 characters</pre>
                        </div>

                    <div>
                        <p>repeat password</p>
                        <input type="password" placeholder="repeat password" onClick={()=>{
                       document.querySelector('.popup-registr .popup .inputs div .name').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .surname').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .email').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .login').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .password').style.display='none'
                        document.querySelector('.popup-registr .popup .inputs div .repeat-password').style.display='inline-block'
                        }}/>
                        <pre className="repeat-password">invalid password</pre>
                        </div>

                       
                    <div><button onClick={handleRegisterSubmit}>send</button></div>
                </div>
                </div> 
        </div>
    )
}